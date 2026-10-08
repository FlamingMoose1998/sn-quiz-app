var ioQuiz = Class.create();
ioQuiz.prototype = {
  initialize: function () { },

  read: function (grQuiz) {
    const quizJson = {};

    [
      'name',
      'number'
    ].forEach(field => quizJson[field] = grQuiz.getValue(field))
    [
      'category',
      'audience'
    ].forEach(field => quizJson[field] = grQuiz.getDisplayValue(field))

    return quizJson;
  },

  /**
   * Writes a quiz and all its components to the database
   * @param {Quiz} quizJson
   * @returns {string} quizSysId
   */
  write: function (quizJson) {
    const io = new x_0221_quiz_app.io();

    convert(quizJson)

    quizJson.audience = io.getSysId('x_0221_quiz_app_audience', 'name', quizJson.audience)

    const [day, month, year] = quizJson.date.split('-')
    quizJson.date = `${year}-${month}-${day}`

    const quizSysId = io.insertRecord('x_0221_quiz_app_quiz', quizJson, ['name', 'number', 'audience', 'date'])

    const ioRound = new x_0221_quiz_app.ioRound();
    const ioQuestion = new x_0221_quiz_app.ioQuestion();

    quizJson.rounds.forEach((roundJson, roundIndex) => {
      const roundSysId = ioRound.write(roundJson, { quizSysId, roundIndex })

      if (!Array.isArray(roundJson.questions)) return roundJson;

      roundJson.questions.forEach((questionJson, questionIndex) => {
        const questionSysId = ioQuestion.write(questionJson, { roundSysId, questionIndex })
      })
    })

    return quizSysId;
  },
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
                        ['p1', 'p2', 'p3', 'p4'].map((p) => {
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
