import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['6cbb6ae48323cfd0429b6260ceaad3ab'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_0221_quiz_app_round',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['64bb6ae48323cfd0429b6260ceaad3e7'],
    table: 'sys_ui_element',
    data: {
        element: '.begin_split',
        position: 0,
        sys_ui_section: '6cbb6ae48323cfd0429b6260ceaad3ab',
        type: '.begin_split',
    },
})
Record({
    $id: Now.ID['68196e1583734b94429b6260ceaad30b'],
    table: 'sys_ui_element',
    data: {
        element: '.split',
        position: 1,
        sys_ui_section: '6cbb6ae48323cfd0429b6260ceaad3ab',
        type: '.split',
    },
})
Record({
    $id: Now.ID['24196e1583734b94429b6260ceaad30c'],
    table: 'sys_ui_element',
    data: {
        element: 'type',
        position: 2,
        sys_ui_section: '6cbb6ae48323cfd0429b6260ceaad3ab',
    },
})
Record({
    $id: Now.ID['ec196e1583734b94429b6260ceaad30c'],
    table: 'sys_ui_element',
    data: {
        element: '.end_split',
        position: 3,
        sys_ui_section: '6cbb6ae48323cfd0429b6260ceaad3ab',
        type: '.end_split',
    },
})
