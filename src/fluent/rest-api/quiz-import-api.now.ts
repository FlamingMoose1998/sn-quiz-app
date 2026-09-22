import '@servicenow/sdk/global'
import { RestApi } from '@servicenow/sdk/core'

RestApi({
    $id: Now.ID['quiz-import-api'],
    name: 'Quiz Import API',
    serviceId: 'quiz_import',
    consumes: 'application/json',
    produces: 'application/json',
    shortDescription: 'API to import quiz data from JSON',
    routes: [
        {
            $id: Now.ID['quiz-import-route'],
            name: 'Import Quiz',
            method: 'POST',
            path: '/import',
            shortDescription: 'Import a quiz from JSON payload',
            script: `(function process(request, response) {
    const body = request.body.dataString;
    const importer = new x_0221_quiz_app.QuizImporter();
    const result = importer.importQuiz(body);
    response.setBody(result);
})(request, response)`,
        },
    ],
})
