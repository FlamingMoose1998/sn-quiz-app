import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['b5a07fc483fb8f54429b6260ceaad398'],
    localOrExisting: 'Existing',
    type: 'client_callable_script_include',
    operation: 'execute',
    roles: ['x_0221_quiz_app.user'],
    name: 'QuizImportAjax',
})
