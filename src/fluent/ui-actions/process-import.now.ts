import '@servicenow/sdk/global';
import { UiAction } from '@servicenow/sdk/core';

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
        onClick: 'processImportAction()',
    },
    script: `function processImportAction() {
    if (!confirm('Process this JSON into quiz records?')) return;

    var ga = new GlideAjax('x_0221_quiz_app.QuizImportAjax');
    ga.addParam('sysparm_name', 'processImport');
    ga.addParam('sysparm_raw_json_sys_id', g_form.getUniqueValue());
    ga.getXMLAnswer(function(answer) {
        try {
            var result = JSON.parse(answer);
            showImportReport(result);
        } catch (e) {
            alert('Failed to parse import result: ' + e.message);
        }
    });
}

function showImportReport(result) {
    var logs = result.logs || [];
    var quizId = result.quizId || '';
    var rawJsonId = g_form.getUniqueValue();

    var overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:10000;display:flex;align-items:center;justify-content:center;';

    var dialog = document.createElement('div');
    dialog.style.cssText = 'background:white;border-radius:8px;padding:24px;max-width:720px;width:90%;max-height:80vh;display:flex;flex-direction:column;box-shadow:0 8px 32px rgba(0,0,0,0.3);';

    var title = document.createElement('h2');
    title.textContent = result.success ? 'Import Successful' : 'Import Failed';
    title.style.cssText = 'margin:0 0 16px 0;font-size:18px;color:#232e33;';

    var pre = document.createElement('pre');
    pre.textContent = logs.join('\\n');
    pre.style.cssText = 'font-family:Courier,Courier New,monospace;font-size:12px;line-height:1.6;background:#f1f3f3;padding:16px;border:1px solid #dcdfe0;border-radius:4px;overflow:auto;flex:1;max-height:50vh;margin:0 0 20px 0;white-space:pre-wrap;word-break:break-word;color:#232e33;';

    var btnRow = document.createElement('div');
    btnRow.style.cssText = 'display:flex;gap:12px;justify-content:flex-end;';

    var btnBack = document.createElement('button');
    btnBack.textContent = 'Back to Raw JSON';
    btnBack.style.cssText = 'padding:8px 16px;border:1px solid #ccc;border-radius:4px;background:white;cursor:pointer;font-size:14px;color:#232e33;';
    btnBack.onclick = function() { document.body.removeChild(overlay); };

    var btnQuiz = document.createElement('button');
    btnQuiz.textContent = 'View Quiz';
    btnQuiz.style.cssText = 'padding:8px 16px;border:none;border-radius:4px;background:#0b6abf;color:white;cursor:pointer;font-size:14px;';
    btnQuiz.onclick = function() { window.location.href = 'x_0221_quiz_app_quiz.do?sys_id=' + quizId; };

    if (!result.success || !quizId) {
        btnQuiz.disabled = true;
        btnQuiz.style.opacity = '0.5';
        btnQuiz.style.cursor = 'default';
    }

    btnRow.appendChild(btnBack);
    btnRow.appendChild(btnQuiz);
    dialog.appendChild(title);
    dialog.appendChild(pre);
    dialog.appendChild(btnRow);
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
}`,
});
