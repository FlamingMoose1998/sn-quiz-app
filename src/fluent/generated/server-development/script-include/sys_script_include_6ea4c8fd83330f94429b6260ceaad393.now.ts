import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['6ea4c8fd83330f94429b6260ceaad393'],
    name: 'ioQuiz',
    script: Now.include('./sys_script_include_6ea4c8fd83330f94429b6260ceaad393.server.js'),
    apiName: 'x_0221_quiz_app.ioQuiz',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
    protectionPolicy: 'read',
})
