import { Table, StringColumn } from '@servicenow/sdk/core';

export const x_0221_quiz_app_qa = Table({
    name: 'x_0221_quiz_app_qa',
    label: 'QA',
    display: 'question',
    schema: {
        question: StringColumn({
            label: 'Question',
            maxLength: 400,
        }),
        answer: StringColumn({
            label: 'Answer',
            maxLength: 400,
        }),
    },
});
