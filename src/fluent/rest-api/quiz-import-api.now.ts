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
            shortDescription: 'Store quiz JSON in raw_json table for processing',
            script: `(function process(request, response) {
    const body = request.body.dataString;
    const data = JSON.parse(body);
    const grRawJson = new GlideRecord('x_0221_quiz_app_raw_json');
    grRawJson.initialize();
    grRawJson.setValue('name', data.name || 'Unnamed Quiz');
    grRawJson.setValue('json', body);
    const sysId = grRawJson.insert();
    response.setBody({ success: true, rawJsonId: sysId.toString(), name: data.name });
})(request, response)`,
        },
    ],
})
