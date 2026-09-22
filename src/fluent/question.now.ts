import { Table, StringColumn, ChoiceColumn, ReferenceColumn } from '@servicenow/sdk/core';

export const x_0221_quiz_app_question = Table({
    name: 'x_0221_quiz_app_question',
    label: 'Question',
    display: 'question',
    schema: {
        question: StringColumn({
            label: 'Question',
            maxLength: 400,
            mandatory: true,
        }),
        answer: StringColumn({
            label: 'Answer',
            maxLength: 400,
        }),
        type: ChoiceColumn({
            label: 'Type',
            choices: {
                normal: 'Normal',
                '1234': '1234',
            },
        }),
        category: ReferenceColumn({
            label: 'Category',
            referenceTable: 'x_0221_quiz_app_category',
        }),
        media_type: ChoiceColumn({
            label: 'Media Type',
            choices: {
                image: 'Image',
                audio: 'Audio',
                video: 'Video',
            },
        }),
        filename: StringColumn({
            label: 'Filename',
            maxLength: 400,
        }),
    },
});
