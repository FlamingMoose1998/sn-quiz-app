import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['5d96634083bb8f54429b6260ceaad321'],
    name: 'log',
    script: Now.include('./sys_script_include_5d96634083bb8f54429b6260ceaad321.server.js'),
    apiName: 'x_0221_quiz_app.log',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
    protectionPolicy: 'read',
})
