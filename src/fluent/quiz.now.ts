import { Table, StringColumn, DateColumn, ReferenceColumn } from '@servicenow/sdk/core';

export const x_0221_quiz_app_quiz = Table({
    name: 'x_0221_quiz_app_quiz',
    label: 'Quiz',
    display: 'name',
    schema: {
        name: StringColumn({
            label: 'Name',
            maxLength: 40,
            mandatory: true,
        }),
        number: StringColumn({
            label: 'Number',
            maxLength: 40,
        }),
        date: DateColumn({
            label: 'Date',
        }),
        audience: ReferenceColumn({
            label: 'Audience',
            referenceTable: 'x_0221_quiz_app_audience',
        }),
    },
});
