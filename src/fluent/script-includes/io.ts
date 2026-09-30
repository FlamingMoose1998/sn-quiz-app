import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['QuizImporter'],
    name: 'QuizImporter',
    script: Now.include('../../server/script-includes/io.js'),
    description: 'Handles reading and writing quiz objects',
    accessibleFrom: 'public',
})
