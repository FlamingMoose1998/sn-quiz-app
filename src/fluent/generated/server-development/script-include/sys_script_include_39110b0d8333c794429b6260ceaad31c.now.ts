import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['39110b0d8333c794429b6260ceaad31c'],
    name: 'ioRead',
    script: Now.include('./sys_script_include_39110b0d8333c794429b6260ceaad31c.server.js'),
    apiName: 'x_0221_quiz_app.ioRead',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: false,
    protectionPolicy: 'read',
})
