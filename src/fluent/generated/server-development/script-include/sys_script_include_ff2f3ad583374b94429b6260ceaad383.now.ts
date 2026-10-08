import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['ff2f3ad583374b94429b6260ceaad383'],
    name: 'lib',
    script: Now.include('./sys_script_include_ff2f3ad583374b94429b6260ceaad383.server.js'),
    apiName: 'x_0221_quiz_app.lib',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
    protectionPolicy: 'read',
})
