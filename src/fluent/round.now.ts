import { Table, StringColumn, ChoiceColumn } from '@servicenow/sdk/core';

export const x_0221_quiz_app_round = Table({
    name: 'x_0221_quiz_app_round',
    label: 'Round',
    schema: {
        number: StringColumn({
            label: 'Number',
            maxLength: 40,
        }),
        type: ChoiceColumn({
            label: 'Type',
            choices: {
                normal: 'Normal',
                '1234': '1234',
                '1ak': '1ak',
            },
        }),
    },
});
