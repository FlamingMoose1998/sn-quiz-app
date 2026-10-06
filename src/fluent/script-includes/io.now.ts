import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['Io'],
    name: 'io',
    script: Now.include('../../server/script-includes/io.js'),
    description: 'Handles reading and writing quiz objects',
    accessibleFrom: 'public',
    apiName: 'x_0221_quiz_app.io',
    clientCallable: false,
    mobileCallable: false,
    sandboxCallable: false,
    active: true,
})
