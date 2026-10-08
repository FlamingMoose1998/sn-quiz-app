// @ts-nocheck
var ioQuestion = Class.create();
ioQuestion.prototype = {
  initialize: function () {},

  read: function (grQuestion) {
    const questionJson = {};
    const type = grQuestion.getValue('type')

    if (type === 'normal') {
      questionJson.qa = {
        nl: {
          question: grQuestion.qa.question.toString(),
          answer: grQuestion.qa.answer.toString(),
        }
      }
    } else if (type === '1234') {
      ['p1', 'p2', 'p3', 'p4'].forEach(p => {
        questionJson[p] = {
          nl: {
            question: grQuestion[p].question,
            answer: grQuestion[p].answer,
          }
        }
      })
    }

    questionJson.type = type;
    questionJson.difficulty = +grQuestion.getValue('difficulty');
    questionJson.filename = grQuestion.getValue('filename');

    questionJson.mediaType = grQuestion.getValue('media_type');
    questionJson.category = grQuestion.getDisplayValue('category');
    questionJson.fullscreen = (grQuestion.getValue('fullscreen') === '1');

    return questionJson;
  },

  write: function (questionJson, {
    roundSysId = null,
    questionIndex
  }) {
    const io = new x_0221_quiz_app.io();

    questionJson.category = io.getSysId('x_0221_quiz_app_category', 'name', questionJson.category);
    questionJson.filename = `${questionJson.mediaPath}/${questionJson.media}`;
    questionJson.media_type = questionJson.mediaType;

    switch (questionJson.type) {
      case '1234':
        ['p1', 'p2', 'p3', 'p4'].forEach((p) => {
          const qaSysId = this.insertQA(questionJson[p])
          questionJson[p] = qaSysId
        })
        break;
      case 'normal':
        const qaSysId = this.insertQA(questionJson.qa)
        questionJson.qa = qaSysId
        break;
      default:
        throw new Error('invalid question type')
    }

    const questionSysId = io.insertRecord('x_0221_quiz_app_question', questionJson)
    if (typeof roundSysId === 'string') {
      io.insertRecord('x_0221_quiz_app_round_question', {
        round: roundSysId,
        question: questionSysId,
        number: questionIndex + 1,
      })
    }

    return questionSysId;
  },

  insertQA: function (languagueObject = {}) {
    const io = new x_0221_quiz_app.io();
    const language = 'nl'
    const { question, answer } = languagueObject[language]

    return io.insertRecord('x_0221_quiz_app_qa', {
      question,
      answer,
      language,
    })
  }
}

