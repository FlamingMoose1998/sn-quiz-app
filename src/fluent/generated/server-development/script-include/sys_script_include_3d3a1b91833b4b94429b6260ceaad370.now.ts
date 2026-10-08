import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['3d3a1b91833b4b94429b6260ceaad370'],
    name: 'ioWrite',
    script: Now.include('./sys_script_include_3d3a1b91833b4b94429b6260ceaad370.server.js'),
    apiName: 'x_0221_quiz_app.ioWrite',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: false,
    protectionPolicy: 'read',
})
