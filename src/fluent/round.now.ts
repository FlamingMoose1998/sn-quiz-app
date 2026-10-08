import { Table, StringColumn, ChoiceColumn } from '@servicenow/sdk/core';

export const x_0221_quiz_app_round = Table({
    name: 'x_0221_quiz_app_round',
    label: 'Round',
    display: 'name',
    schema: {
        type: ChoiceColumn({
            label: 'Type',
            choices: {
                normal: 'Normal',
                '1234': '1234',
                '1ak': '1ak',
            },
        }),
        theme: StringColumn({
            label: 'Theme',
            maxLength: 40,
        }),
    },
});
