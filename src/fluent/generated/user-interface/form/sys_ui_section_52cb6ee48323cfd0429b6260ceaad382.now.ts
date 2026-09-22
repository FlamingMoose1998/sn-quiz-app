import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['52cb6ee48323cfd0429b6260ceaad382'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_0221_quiz_app_quiz_round',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['5ecb6ee48323cfd0429b6260ceaad389'],
    table: 'sys_ui_element',
    data: {
        element: '.begin_split',
        position: 0,
        sys_ui_section: '52cb6ee48323cfd0429b6260ceaad382',
        type: '.begin_split',
    },
})
Record({
    $id: Now.ID['1acb6ee48323cfd0429b6260ceaad38a'],
    table: 'sys_ui_element',
    data: {
        element: 'round',
        position: 1,
        sys_ui_section: '52cb6ee48323cfd0429b6260ceaad382',
    },
})
Record({
    $id: Now.ID['d2cb6ee48323cfd0429b6260ceaad38b'],
    table: 'sys_ui_element',
    data: {
        element: '.split',
        position: 2,
        sys_ui_section: '52cb6ee48323cfd0429b6260ceaad382',
        type: '.split',
    },
})
Record({
    $id: Now.ID['9ecb6ee48323cfd0429b6260ceaad38b'],
    table: 'sys_ui_element',
    data: {
        element: 'quiz',
        position: 3,
        sys_ui_section: '52cb6ee48323cfd0429b6260ceaad382',
    },
})
Record({
    $id: Now.ID['5acb6ee48323cfd0429b6260ceaad38c'],
    table: 'sys_ui_element',
    data: {
        element: '.end_split',
        position: 4,
        sys_ui_section: '52cb6ee48323cfd0429b6260ceaad382',
        type: '.end_split',
    },
})
