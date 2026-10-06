import { Table, StringColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_0221_quiz_app_raw_json = Table({
    schema: {
        name: StringColumn({
            label: 'Name',
            maxLength: 40,
            mandatory: true,
        }),
        quiz: ReferenceColumn({
            label: 'Quiz',
            referenceTable: 'x_0221_quiz_app_quiz',
            maxLength: 32,
        }),
        json: StringColumn({
            label: 'Json',
            maxLength: 10000,
        }),
    },
    augments: 'x_0221_quiz_app_raw_json',
})
