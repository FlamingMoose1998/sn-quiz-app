import { Table, StringColumn, ReferenceColumn } from '@servicenow/sdk/core';

export const x_0221_quiz_app_raw_json = Table({
    name: 'x_0221_quiz_app_raw_json',
    label: 'Raw JSON',
    display: 'name',
    schema: {
        name: StringColumn({
            label: 'Name',
            maxLength: 40,
            mandatory: true,
        }),
        quiz: ReferenceColumn({
            label: 'Quiz',
            referenceTable: 'x_0221_quiz_app_quiz',

        }),
        json: StringColumn({
            label: 'Number',
            maxLength: 10000,
        }),
    },
});
