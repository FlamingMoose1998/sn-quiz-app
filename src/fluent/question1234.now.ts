import { Table, ReferenceColumn } from '@servicenow/sdk/core';

export const x_0221_quiz_app_question1234 = Table({
    name: 'x_0221_quiz_app_question1234',
    label: 'Question 1234',
    extends: 'x_0221_quiz_app_question',
    schema: {
        p1: ReferenceColumn({
            label: 'P1',
            referenceTable: 'x_0221_quiz_app_qa',
        }),
        p2: ReferenceColumn({
            label: 'P2',
            referenceTable: 'x_0221_quiz_app_qa',
        }),
        p3: ReferenceColumn({
            label: 'P3',
            referenceTable: 'x_0221_quiz_app_qa',
        }),
        p4: ReferenceColumn({
            label: 'P4',
            referenceTable: 'x_0221_quiz_app_qa',
        }),
    },
});
