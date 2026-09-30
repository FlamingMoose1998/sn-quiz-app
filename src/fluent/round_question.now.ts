import { Table, ReferenceColumn } from '@servicenow/sdk/core';

export const x_0221_quiz_app_round_question = Table({
    name: 'x_0221_quiz_app_round_question',
    label: 'Round Question',
    schema: {
        round: ReferenceColumn({
            label: 'Round',
            referenceTable: 'x_0221_quiz_app_round',
            mandatory: true,
        }),
        question: ReferenceColumn({
            label: 'Question',
            referenceTable: 'x_0221_quiz_app_question',
            mandatory: true,
        }),
        number: IntegerColumn({
            label: 'Question Number',
        })        
    },
});
