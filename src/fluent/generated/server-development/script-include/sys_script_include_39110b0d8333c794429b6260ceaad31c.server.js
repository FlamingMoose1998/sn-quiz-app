// @ts-nocheck
var ioRead = Class.create();
ioRead.prototype = {
  initialize: function ({
    enableLogging = true
  } = {}) {

    this.logger = new x_0221_quiz_app.log({ enableLogging })
  },

  readQuizBySysId: function (sysId) {
    const grQuiz = new GlideRecord('x_0221_quiz_app_quiz');
    if (grQuiz.get(sysId)) {
      return this.readQuiz(grQuiz);
    }
  },

  /**
   * Reads a quiz record from the database
   * @param {GlideRecord} grQuiz
   * @returns {Quiz} quizJson
   */
  readQuiz: function (grQuiz) {
    const quizJson = this.getQuizJsonFromGlideRecord(grQuiz);
    const quizSysId = grQuiz.getValue('sys_id');

    quizJson.rounds = this.readRounds(quizSysId);

    return quizJson;
  },


  getQuizJson: function (grQuiz) {
    const quizJson = this.readQuiz(grQuiz);
    quizJson.rounds = this.readRounds(grQuiz);
  },


  readRounds: function (quizSysId) {
    const rounds = [];
    const grQuizRound = new GlideRecord('x_0221_quiz_app_quiz_round');
    grQuizRound.addQuery('quiz', quizSysId);
    grQuizRound.orderBy('number');
    grQuizRound.query();

    while (grQuizRound.next()) {
      const roundJson = {};
      [
        'type',
        'theme'
      ].forEach(field => roundJson[field] = grQuizRound.round[field].toString())

      const roundSysId = grQuizRound.getValue('round');
      const questions = this.readQuestions(roundSysId);
      if (questions.length > 0) {
        roundJson.questions = questions;
      }

      rounds.push(roundJson);
    }
  },

  readQuestions: function (roundSysId) {
    const questions = [];



    return questions;
  },

  getQuizJsonFromGlideRecord: function (grQuiz) {
    const quizJson = {};

    [
      'name',
      'number'
    ].forEach(field => quizJson[field] = gr.getValue(field))
    [
      'category',
      'audience'
    ].forEach(field => quizJson[field] = gr.getDisplayValue(field))

    return quizJson;
  },
  getRoundJsonFromGlideRecord: function (grRound) {
    const roundJson = {};
    roundJson.theme = grRound.getValue('theme')
    const questions = [];
    const grM2m = new GlideRecord('x_0221_quiz_app_round_question');
    grM2m.addQuery('round', grRound.getValue('sys_id'));
    grM2m.orderBy('number');
    grM2m.query();

    while (grM2m.next()){
      questions.push(this.getQuestionJsonFromGlideRecord(grM2m.question.getRefRecord()))
    }
    
    if (questions.length > 0){
      roundJson.questions = questions;
    }

    return roundJson;
  },

  getQuestionJsonFromGlideRecord: function (grQuestion) {
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



  copyValues: function (gr, json, fieldList) {
    return this.copy(gr, json, fieldList, false);
  },

  copyDisplayValues: function (gr, json, fieldList) {
    return this.copy(gr, json, fieldList, true);
  },

  copy: function (gr, json, fieldList, display = false) {
    if (!Array.isArray(fieldList)) throw new Error('invalid fieldList');

    fieldList.forEach(field => {
      if (!gr.isValidField(field)) return;

      json[field] = display ? gr.getDisplayValue(field) : gr.getValue(field);
    })

    return json;
  },

  type: 'ioRead'
};



function insertQA(languagueObject = {}) {
  const language = 'nl'
  const {
    question,
    answer
  } = languagueObject[language]

  return insertRecord('x_0221_quiz_app_qa', {
    question,
    answer,
    language
  })
}
