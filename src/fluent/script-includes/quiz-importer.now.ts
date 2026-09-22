import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['QuizImporter'],
    name: 'QuizImporter',
    script: Now.include('../../server/script-includes/quiz-importer.js'),
    description: 'Imports quiz data from JSON into Quiz App tables',
    accessibleFrom: 'public',
})
