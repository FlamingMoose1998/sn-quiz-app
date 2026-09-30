import { Record, default_view } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['d012b74783eb4754429b6260ceaad31f'],
    table: 'sys_ui_section',
    data: {
        header: false,
        name: 'x_0221_quiz_app_raw_json',
        sys_domain: 'global',
        sys_domain_path: '/',
        title: true,
        view: default_view,
    },
})
Record({
    $id: Now.ID['d812b74783eb4754429b6260ceaad3ce'],
    table: 'sys_ui_element',
    data: {
        element: 'name',
        position: 0,
        sys_ui_section: 'd012b74783eb4754429b6260ceaad31f',
    },
})
Record({
    $id: Now.ID['1012b74783eb4754429b6260ceaad3d0'],
    table: 'sys_ui_element',
    data: {
        element: 'json',
        position: 1,
        sys_ui_section: 'd012b74783eb4754429b6260ceaad31f',
    },
})
Record({
    $id: Now.ID['d812b74783eb4754429b6260ceaad3d0'],
    table: 'sys_ui_element',
    data: {
        element: 'quiz',
        position: 2,
        sys_ui_section: 'd012b74783eb4754429b6260ceaad31f',
    },
})
