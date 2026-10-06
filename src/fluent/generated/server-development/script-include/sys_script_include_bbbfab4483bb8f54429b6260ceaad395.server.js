// @ts-nocheck
const QuizImportAjax = Class.create();
QuizImportAjax.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
    processImport: function () {
        const rawJsonSysId = this.getParameter('sysparm_raw_json_sys_id');
        const importer = new x_0221_quiz_app.QuizImporter();
        const result = importer.importQuiz(rawJsonSysId);
        return JSON.stringify(result);
    },
    type: 'QuizImportAjax',
});
