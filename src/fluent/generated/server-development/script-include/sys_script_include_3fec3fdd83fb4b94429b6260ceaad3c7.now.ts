import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['3fec3fdd83fb4b94429b6260ceaad3c7'],
    name: 'ioRound',
    script: Now.include('./sys_script_include_3fec3fdd83fb4b94429b6260ceaad3c7.server.js'),
    apiName: 'x_0221_quiz_app.ioRound',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
    protectionPolicy: 'read',
})
