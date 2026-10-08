import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['2bfe32d583374b94429b6260ceaad377'],
    name: 'ioQuestion',
    script: Now.include('./sys_script_include_2bfe32d583374b94429b6260ceaad377.server.js'),
    apiName: 'x_0221_quiz_app.ioQuestion',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
    protectionPolicy: 'read',
})
