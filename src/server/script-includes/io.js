/**
 * ==========================================
 * Base Enums & Helper Schemas
 * ==========================================
 */

/**
 * @typedef {1 | 2 | 3} Difficulty
 */

/**
 * @typedef {'image' | 'audio' | 'video'} MediaType
 */

/**
 * @typedef {Object} QA
 * @property {string} question
 * @property {string} answer
 */

/**
 * ==========================================
 * Question Schemas
 * ==========================================
 */

/**
 * @typedef {Object} QuestionBase
 * @property {string} type
 * @property {string} _id
 * @property {string} category
 * @property {string} media
 * @property {string} mediaPath
 * @property {MediaType} mediaType
 * @property {boolean} fullscreen
 * @property {number} [nr]
 * @property {string} [preset]
 */

/**
 * @typedef {QuestionBase & {
 *   type: 'normal',
 *   qa: QA,
 *   difficulty: Difficulty,
 *   category: string
 * }} QuestionNormal
 */

/**
 * @typedef {QuestionBase & {
 *   type: '1234',
 *   p1: QA,
 *   p2: QA,
 *   p3: QA,
 *   p4: QA
 * }} Question1234
 */

/**
 * @typedef {QuestionNormal | Question1234} Question
 */

/**
 * ==========================================
 * Round Schemas
 * ==========================================
 */

/**
 * @typedef {Object} RoundBase
 * @property {string} _id
 * @property {string} name
 */

/**
 * @typedef {RoundBase & {
 *   type: 'normal',
 *   questions: Question[]
 * }} RoundNormal
 */

/**
 * @typedef {RoundBase & {
 *   type: '1234',
 *   questions: Question1234[]
 * }} Round1234
 */

/**
 * @typedef {RoundBase & {
 *   type: '1ak',
 *   answers: string[],
 *   mediaPath: string,
 *   media: string
 * }} Round1ak
 */

/**
 * @typedef {RoundBase & {
 *   type: 'match2',
 *   answers: string[],
 *   mediaPath: string,
 *   media: string
 * }} RoundMatch2
 */

/**
 * @typedef {RoundBase & {
 *   type: 'special'
 * }} RoundSpecial
 */

/**
 * @typedef {Object} RoundHandoutQuestion
 * @property {string} answerNl
 */

/**
 * @typedef {RoundBase & {
 *   type: 'handout',
 *   mediaPath: string,
 *   media: string,
 *   questions: RoundHandoutQuestion[]
 * }} RoundHandout
 */

/**
 * @typedef {RoundNormal | Round1234 | Round1ak | RoundMatch2 | RoundSpecial | RoundHandout} Round
 */

/**
 * ==========================================
 * Quiz Schema
 * ==========================================
 */

/**
 * @typedef {Object} Quiz
 * @property {string} _id
 * @property {string} name
 * @property {string} number
 * @property {string} fullName
 * @property {string} audience
 * @property {string} date
 * @property {Round[]} rounds
 */


// @ts-ignore
var io = Class.create();
io.prototype = {
  initialize: function(){},
  
  /**
   * Writes a quiz and all its components to the database
   * @param {Quiz} quizJson
   * @returns {string} quizSysId
   */
  writeQuizRecord: function(quizJson){
    const quizSysId = insertRecord('x_0221_quiz_app_quiz', quizJson, [ 'name', 'number', 'date', 'audience' ])

    // quizJson.rounds.forEach((roundJson, roundIndex) => {
    //   const roundSysId = writeRound(roundJson, { quizSysId, roundIndex });
    //   roundJson.questions.forEach((questionJson, questionIndex) => {
    //     const questionSysId = writeQuestion(questionJson, { roundSysId, questionIndex })
    //   })
    // })

    return quizSysId;
  }  
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
function writeRound(roundJson, { quizSysId = null, roundIndex = null}){
  const roundSysId = insertRecord('x_0221_quiz_app_round', roundJson, [ 'name', 'number', 'type', 'theme' ]);

  if (typeof quizSysId === null || roundIndex === null){
    return roundSysId;
  }
  
  insertRecord('x_0221_quiz_app_quiz_round', { 
    quiz: quizSysId,
    round: roundSysId,
    number: roundIndex+1,
  })
  
  return roundSysId;
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
function writeQuestion(questionJson, { roundSysId = null, questionIndex }){
  switch (questionJson.type){
    case '1234': 
      ['p1', 'p2', 'p3', 'p4'].forEach(p => {
        const qaSysId = insertQA(questionJson[p])
        //insertQA(questionJson[p].question, questionJson[p].answer, 'nl');
        questionJson[p] = qaSysId;
      })
      break;
    case 'normal':
      const qaSysId = insertQA(questionJson.qa)
      //insertQA(questionJson.textNl, questionJson.answerNl, 'nl');
      questionJson.qa = qaSysId;
      break;
    default:
      throw new Error('invalid question type')

  }

  const questionSysId = insertRecord('x_0221_quiz_app_question', questionJson);
  if (typeof roundSysId === 'string'){
    insertRecord('x_0221_quiz_app_round_question', { 
      round: roundSysId,
      question: questionSysId,
      number: questionIndex+1,
    })
  }

  return questionSysId;
}

function insertQA(languagueObject){
  const language = 'nl'
  const { question, answer } = languagueObject[language];

  return insertRecord('x_0221_quiz_app_qa', { question, answer, language });
}



function insertRecord(table, record, fields = null){
  const fieldList = fields === null ? Object.keys(record) : fields;

  const gr = new GlideRecord(table);
  fieldList.forEach(field => {
    gr.setValue(field, record[field]);
  })

  return gr.insert()
}
