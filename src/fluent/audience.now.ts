import { Table, StringColumn } from '@servicenow/sdk/core';

export const x_0221_quiz_app_audience = Table({
    name: 'x_0221_quiz_app_audience',
    label: 'Audience',
    display: 'name',
    schema: {
        name: StringColumn({
            label: 'Name',
            maxLength: 40,
            mandatory: true,
        }),
    },
});
