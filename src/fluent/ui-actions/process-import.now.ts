import '@servicenow/sdk/global'
import { UiAction } from '@servicenow/sdk/core'

UiAction({
    $id: Now.ID['process-import-action'],
    table: 'x_0221_quiz_app_raw_json',
    name: 'Process Import',
    actionName: 'process_import',
    showUpdate: true,
    form: {
        showButton: true,
        style: 'primary',
    },
    client: {
        isClient: true,
        onClick: 'confirmProcessImport()',
    },
    script: `function confirmProcessImport() {
    if (confirm('Process this JSON into quiz records?')) {
        gsftSubmit(null, g_form.getFormElement(), 'process_import');
    }
}

if (typeof window == 'undefined') {
    processImport();
}

function processImport() {
    // const importer = new x_0221_quiz_app.QuizImporter();
    // const result = importer.importQuiz(current.getUniqueValue());
	const quizSysId = current.getValue('sys_id');
	const io = new x_0221_quiz_app.io();
	const s = current.getValue('json')
	const json = JSON.parse(s);
	io.writeQuiz(json);
	const result = io.getReport();
	
    if (result.errors.length === 0) {
        gs.addInfoMessage('Quiz imported: ' + result.counts.quizzes + ' quiz, ' + result.counts.rounds + ' rounds, ' + result.counts.questions + ' questions');
        action.setRedirectURL('x_0221_quiz_app_quiz.do?sys_id=' + result.quizId);
    } else {
        gs.addErrorMessage('Import failed: ' + result.errors.join(', '));
        action.setRedirectURL(current);
    }
}`,
    workspace: {
        clientScriptV2: `function onClick(g_form) {

}`,
    },
    messages: [],
    showInsert: true,
})
