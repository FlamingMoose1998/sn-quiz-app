import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Related list on Quiz form: show related Quiz_Round records
const quizRelatedList = Record({
    $id: Now.ID['quiz-related-list'],
    table: 'sys_ui_related_list',
    data: {
        name: 'x_0221_quiz_app_quiz',
        view: 'Default view',
    },
});

Record({
    $id: Now.ID['quiz-rounds-entry'],
    table: 'sys_ui_related_list_entry',
    data: {
        list_id: quizRelatedList,
        position: 0,
        related_list: 'x_0221_quiz_app_quiz_round.quiz',
    },
});

// Related list on Round form: show related Round_Question records
const roundRelatedList = Record({
    $id: Now.ID['round-related-list'],
    table: 'sys_ui_related_list',
    data: {
        name: 'x_0221_quiz_app_round',
        view: 'Default view',
    },
});

Record({
    $id: Now.ID['round-questions-entry'],
    table: 'sys_ui_related_list_entry',
    data: {
        list_id: roundRelatedList,
        position: 0,
        related_list: 'x_0221_quiz_app_round_question.round',
    },
});
