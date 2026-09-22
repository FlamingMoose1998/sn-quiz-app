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
    $id: Now.ID['a8bb6ae48323cfd0429b6260ceaad3e8'],
    table: 'sys_ui_element',
    data: {
        element: 'number',
        position: 1,
        sys_ui_section: '6cbb6ae48323cfd0429b6260ceaad3ab',
    },
})
Record({
    $id: Now.ID['64bb6ae48323cfd0429b6260ceaad3e9'],
    table: 'sys_ui_element',
    data: {
        element: '.split',
        position: 2,
        sys_ui_section: '6cbb6ae48323cfd0429b6260ceaad3ab',
        type: '.split',
    },
})
Record({
    $id: Now.ID['20bb6ae48323cfd0429b6260ceaad3ea'],
    table: 'sys_ui_element',
    data: {
        element: 'type',
        position: 3,
        sys_ui_section: '6cbb6ae48323cfd0429b6260ceaad3ab',
    },
})
Record({
    $id: Now.ID['e8bb6ae48323cfd0429b6260ceaad3ea'],
    table: 'sys_ui_element',
    data: {
        element: '.end_split',
        position: 4,
        sys_ui_section: '6cbb6ae48323cfd0429b6260ceaad3ab',
        type: '.end_split',
    },
})
