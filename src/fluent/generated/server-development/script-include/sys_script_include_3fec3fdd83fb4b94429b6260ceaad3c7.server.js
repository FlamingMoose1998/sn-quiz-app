var ioRound = Class.create();
ioRound.prototype = {
  initialize: function () { },

  read: function (grRound) {
    const ioQuestion = new x_0221_quiz_app.ioQuestion();

    const roundJson = {};
    roundJson.theme = grRound.getValue('theme');
    roundJson.type = grRound.getValue('type');

    const questions = [];
    const grM2m = new GlideRecord('x_0221_quiz_app_round_question');
    grM2m.addQuery('round', grRound.getValue('sys_id'));
    grM2m.orderBy('number');
    grM2m.query();

    while (grM2m.next()) {
      const questionJson = ioQuestion.read(grM2m.question.getRefRecord())
      questions.push(questionJson);
    }

    if (questions.length > 0) {
      roundJson.questions = questions;
    }

    return roundJson;
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
  write: function (roundJson, { quizSysId = null, roundIndex = null }) {
    const io = new x_0221_quiz_app.io();
    const roundSysId = io.insertRecord('x_0221_quiz_app_round', roundJson, ['name', 'number', 'type', 'theme'])

    if (typeof quizSysId === null || roundIndex === null) {
      return roundSysId
    }

    io.insertRecord('x_0221_quiz_app_quiz_round', {
      quiz: quizSysId,
      round: roundSysId,
      number: roundIndex + 1,
    })

    return roundSysId;
  },
}
