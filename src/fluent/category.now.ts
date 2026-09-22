import { Table, StringColumn, GenericColumn } from '@servicenow/sdk/core';

export const x_0221_quiz_app_category = Table({
    name: 'x_0221_quiz_app_category',
    label: 'Category',
    display: 'name',
    schema: {
        name: StringColumn({
            label: 'Name',
            maxLength: 40,
            mandatory: true,
        }),
        color: GenericColumn({
            columnType: 'color',
            label: 'Color',
        }),
    },
});
