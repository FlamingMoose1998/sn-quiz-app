// @ts-nocheck
var io = Class.create()
io.prototype = {
    initialize: function ({ enableLogging = true }) {
        this.report = {
            counts: {
                quizzes: 0,
                rounds: 0,
                questions: 0,
            },
        }

        if (enableLogging) {
            this.logger = new x_0221_quiz_app.log({ enableLogging: true })
        }
    },

    /**
     * Writes a quiz and all its components to the database
     * @param {Quiz} quizJson
     * @returns {string} quizSysId
     */
    writeQuiz: function (quizJson) {
        quizJson.audience = this.getSysId('x_0221_quiz_app_audience', 'name', quizJson.audience)

        const [day, month, year] = quizJson.date.split('-')
        quizJson.date = `${year}-${month}-${day}`

        const quizSysId = insertRecord('x_0221_quiz_app_quiz', quizJson, ['name', 'number', 'audience'])
        this.report.counts.quizzes++

        // quizJson.rounds.forEach((roundJson, roundIndex) => {
        //   const roundSysId = writeRound(roundJson, { quizSysId, roundIndex });
        //   roundJson.questions.forEach((questionJson, questionIndex) => {
        //     const questionSysId = writeQuestion(questionJson, { roundSysId, questionIndex })
        //   })
        // })

        return quizSysId
    },

    getReport: function () {
        return this.report
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
}

/**
 * Writes a round and its components to the database
 * If the quizSysId is provided the round is linked to that quiz
 * @param {Round} roundJson
 * @param {Object} options
 * @param {string|null} options.quizSysId
 * @param {number|null} options.roundIndex
 * @returns {string} roundSysId
 */
function writeRound(roundJson, { quizSysId = null, roundIndex = null }) {
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
}

/**
 * Writes a question and its components to the database
 * If the roundSysId is provided the question is linked to that round
 * @param {Question} questionJson
 * @param {Object} options
 * @param {string|null} options.roundSysId
 * @param {number|null} options.questionIndex
 * @returns {string} questionSysId
 */
function writeQuestion(questionJson, { roundSysId = null, questionIndex }) {
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
}

function insertQA(languagueObject) {
    const language = 'nl'
    const { question, answer } = languagueObject[language]

    return insertRecord('x_0221_quiz_app_qa', { question, answer, language })
}

function insertRecord(table, record, fields = null) {
    const fieldList = fields === null ? Object.keys(record) : fields

    const gr = new GlideRecord(table)
    fieldList.forEach((fieldName) => {
        gr.setValue(fieldName, record[fieldName])
    })

    return gr.insert()
}
