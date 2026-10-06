// @ts-nocheck
var io = Class.create()
io.prototype = {
    initialize: function ({ enableLogging = true } = {}) {
        this.report = {
            counts: {
                quizzes: 0,
                rounds: 0,
                questions: 0,
            },
        }

        if (enableLogging) {
            this.logger = new x_0221_quiz_app.log({
                enableLogging: true,
            })
        }

        this.first = true
    },

    /**
     * Writes a quiz and all its components to the database
     * @param {Quiz} quizJson
     * @returns {string} quizSysId
     */
    writeQuiz: function (quizJson) {
        convert(quizJson)

        quizJson.audience = this.getSysId('x_0221_quiz_app_audience', 'name', quizJson.audience)

        const [day, month, year] = quizJson.date.split('-')
        quizJson.date = `${year}-${month}-${day}`

        const quizSysId = insertRecord('x_0221_quiz_app_quiz', quizJson, ['name', 'number', 'audience', 'date'])
        this.report.counts.quizzes++

        quizJson.rounds.forEach((roundJson, roundIndex) => {
            const roundSysId = this.writeRound(roundJson, {
                quizSysId,
                roundIndex,
            })

            if (!Array.isArray(roundJson.questions)) return roundJson

            roundJson.questions.forEach((questionJson, questionIndex) => {
                const questionSysId = this.writeQuestion(questionJson, { roundSysId, questionIndex })
            })
        })

        return quizSysId
    },

    /**
     * Writes a round and its components to the database
     * If the quizSysId is provided the round is linked to that quiz
     * @param {Round} roundJson
     * @param {Object} options
     * @param {string|null} options.quizSysId
     * @param {number|null} options.roundIndex
     * @returns {string} roundSysId
     */
    writeRound: function (roundJson, { quizSysId = null, roundIndex = null }) {
        const roundSysId = insertRecord('x_0221_quiz_app_round', roundJson, ['name', 'number', 'type', 'theme'])

        if (typeof quizSysId === null || roundIndex === null) {
            return roundSysId
        }

        insertRecord('x_0221_quiz_app_quiz_round', {
            quiz: quizSysId,
            round: roundSysId,
            number: roundIndex + 1,
        })

        return roundSysId
    },

    /**
     * Finds the first record for which the fieldName's value matches value
     * and returns its sys_id.
     * If no record is found, a record with that field/value is created.
     * If more than one record matches the query, only the first result is returned.
     * @param {string} tableName - name of the table to be queried
     * @param {string} fieldName
     * @param {string} value
     * @returns {string} sys_id
     */
    getSysId: function (tableName, fieldName, value) {
        for (const arg of arguments) {
            if (typeof arg !== 'string') throw new Error(`Argument ${arg} missing or wrong type`)
        }

        const gr = new GlideRecord(tableName)
        let sysId
        if (gr.get(fieldName, value)) {
            sysId = gr.getValue('sys_id')
        } else {
            gr.setValue(fieldName, value)
            sysId = gr.insert()
        }

        return sysId
    },

    /**
     * Writes a question and its components to the database
     * If the roundSysId is provided the question is linked to that round
     * @param {Question} questionJson
     * @param {Object} options
     * @param {string|null} options.roundSysId
     * @param {number|null} options.questionIndex
     * @returns {string} questionSysId
     */
    writeQuestion: function (questionJson, { roundSysId = null, questionIndex }) {
        questionJson.category = this.getSysId('x_0221_quiz_app_category', 'name', questionJson.category)

        if (this.first) {
            this.first = false
            gs.info(JSON.stringify(questionJson, null, 2))
        }

        switch (questionJson.type) {
            case '1234':
                ;['p1', 'p2', 'p3', 'p4'].forEach((p) => {
                    const qaSysId = insertQA(questionJson[p])
                    //insertQA(questionJson[p].question, questionJson[p].answer, 'nl');
                    questionJson[p] = qaSysId
                })
                break
            case 'normal':
                const qaSysId = insertQA(questionJson.qa)
                //insertQA(questionJson.textNl, questionJson.answerNl, 'nl');
                questionJson.qa = qaSysId
                break
            default:
                throw new Error('invalid question type')
        }

        const questionSysId = insertRecord('x_0221_quiz_app_question', questionJson)
        if (typeof roundSysId === 'string') {
            insertRecord('x_0221_quiz_app_round_question', {
                round: roundSysId,
                question: questionSysId,
                number: questionIndex + 1,
            })
        }

        return questionSysId
    },

    getReport: function () {
        return this.report
    },

    type: 'io',
}

function insertQA(languagueObject = {}) {
    const language = 'nl'
    const { question, answer } = languagueObject[language]

    return insertRecord('x_0221_quiz_app_qa', {
        question,
        answer,
        language,
    })
}

function insertRecord(table, record, fields = null) {
    const fieldList = fields === null ? Object.keys(record) : fields

    const gr = new GlideRecord(table)
    fieldList.forEach((fieldName) => {
        gr.setValue(fieldName, record[fieldName])
    })

    return gr.insert()
}

function convert(quizJson) {
    const version = quizJson.$jsonversion || 1
    if (version >= 2) return quizJson

    return {
        ...quizJson,
        $jsonversion: 2,
        rounds: quizJson.rounds.map((roundJson) => {
            if (!Array.isArray(roundJson.questions)) return roundJson

            return {
                ...roundJson,
                questions: roundJson.questions.map((questionJson) => {
                    // const langProps = questionJson.type === 'normal' ? ['qa'] : ['p1', 'p2', 'p3', 'p4']

                    if (questionJson.type === 'normal') {
                        questionJson.qa = {
                            nl: {
                                question: questionJson.textNl,
                                answer: questionJson.answerNl,
                            },
                        }
                    } else if (questionJson.type === '1234') {
                        ;['p1', 'p2', 'p3', 'p4'].map((p) => {
                            questionJson[p] = {
                                nl: {
                                    question: questionJson[p].question,
                                    answer: questionJson[p].answer,
                                },
                            }
                        })
                    }
                }),
            }
        }),
    }
}
