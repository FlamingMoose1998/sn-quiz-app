import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['bbbfab4483bb8f54429b6260ceaad395'],
    name: 'QuizImportAjax',
    script: Now.include('./sys_script_include_bbbfab4483bb8f54429b6260ceaad395.server.js'),
    apiName: 'x_0221_quiz_app.QuizImportAjax',
    clientCallable: true,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
    protectionPolicy: 'read',
})
