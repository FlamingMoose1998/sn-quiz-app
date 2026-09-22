import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['27767a6c8363cfd0429b6260ceaad3d7'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_0221_quiz_app_round_question',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['eb763e6083a3cfd0429b6260ceaad3b8'],
    table: 'sys_ui_element',
    data: {
        element: '.begin_split',
        position: 0,
        sys_ui_section: '27767a6c8363cfd0429b6260ceaad3d7',
        type: '.begin_split',
    },
})
Record({
    $id: Now.ID['e7763e6083a3cfd0429b6260ceaad3b9'],
    table: 'sys_ui_element',
    data: {
        element: 'question',
        position: 1,
        sys_ui_section: '27767a6c8363cfd0429b6260ceaad3d7',
    },
})
Record({
    $id: Now.ID['a3763e6083a3cfd0429b6260ceaad3ba'],
    table: 'sys_ui_element',
    data: {
        element: '.split',
        position: 2,
        sys_ui_section: '27767a6c8363cfd0429b6260ceaad3d7',
        type: '.split',
    },
})
Record({
    $id: Now.ID['6f763e6083a3cfd0429b6260ceaad3ba'],
    table: 'sys_ui_element',
    data: {
        element: 'round',
        position: 3,
        sys_ui_section: '27767a6c8363cfd0429b6260ceaad3d7',
    },
})
Record({
    $id: Now.ID['2b763e6083a3cfd0429b6260ceaad3bb'],
    table: 'sys_ui_element',
    data: {
        element: '.end_split',
        position: 4,
        sys_ui_section: '27767a6c8363cfd0429b6260ceaad3d7',
        type: '.end_split',
    },
})
