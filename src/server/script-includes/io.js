var io = Class.create();
io.prototype = {
  initialize: function(){},
  
  writeQuizRecord: function(quizJson){
    const {
      name,
      number,
      date,
      audience,
    } = quizJson

    const quizSysId = insertRecord('x_0221_quiz_app_quiz', quizJson, [ 'name', 'number', 'date', 'audience' ])
  }

  
}


function insertRecord(table, record, fields = null){
  const fieldList = fields === null ? Object.keys(record) : fields;

  const gr = new GlideRecord(table);
  fieldList.forEach(field => {
    gr.setValue(field, record[field]);
  })

  return gr.insert()
}