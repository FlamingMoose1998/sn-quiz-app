import "@servicenow/sdk/global";
import { ApplicationMenu, Record } from "@servicenow/sdk/core";

const appMenu = ApplicationMenu({
    $id: Now.ID["quiz-app-menu"],
    title: "Quiz App",
    hint: "Quiz management application",
    active: true,
});

// Table modules
Record({
    $id: Now.ID["quiz-module"],
    table: "sys_app_module",
    data: {
        title: "Quizzes",
        application: appMenu,
        link_type: "LIST",
        name: "x_0221_quiz_app_quiz",
        active: true,
        order: 100,
    },
});

Record({
    $id: Now.ID["round-module"],
    table: "sys_app_module",
    data: {
        title: "Rounds",
        application: appMenu,
        link_type: "LIST",
        name: "x_0221_quiz_app_round",
        active: true,
        order: 200,
    },
});

Record({
    $id: Now.ID["question-module"],
    table: "sys_app_module",
    data: {
        title: "Questions",
        application: appMenu,
        link_type: "LIST",
        name: "x_0221_quiz_app_question",
        active: true,
        order: 300,
    },
});

Record({
    $id: Now.ID["category-module"],
    table: "sys_app_module",
    data: {
        title: "Categories",
        application: appMenu,
        link_type: "LIST",
        name: "x_0221_quiz_app_category",
        active: true,
        order: 400,
    },
});

Record({
    $id: Now.ID["audience-module"],
    table: "sys_app_module",
    data: {
        title: "Audiences",
        application: appMenu,
        link_type: "LIST",
        name: "x_0221_quiz_app_audience",
        active: true,
        order: 500,
    },
});

// Separator
Record({
    $id: Now.ID["tools-separator"],
    table: "sys_app_module",
    data: {
        title: "Tools",
        application: appMenu,
        link_type: "SEPARATOR",
        active: true,
        order: 600,
    },
});

// Import page module
Record({
    $id: Now.ID["quiz-import-module"],
    table: "sys_app_module",
    data: {
        title: "Import Quiz",
        application: appMenu,
        link_type: "DIRECT",
        query: "x_0221_quiz_app_import.do",
        active: true,
        order: 700,
    },
});
