import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Explicit relationship: Quiz → Rounds (via quiz_round m2m)
const quizRoundsRel = Record({
    $id: Now.ID['quiz-rounds-rel'],
    table: 'sys_relationship',
    data: {
        name: 'Quiz Rounds',
        advanced: false,
        basic_apply_to: 'x_0221_quiz_app_quiz',
        basic_query_from: 'x_0221_quiz_app_round',
        simple_reference: false,
        query_with: `(function refineQuery(current, parent) {
    const grQuizRound = new GlideRecord('x_0221_quiz_app_quiz_round');
    grQuizRound.addQuery('quiz', parent.sys_id);
    grQuizRound.query();
    const roundIds = [];
    while (grQuizRound.next()) {
        roundIds.push(grQuizRound.getValue('round'));
    }
    if (roundIds.length > 0) {
        current.addQuery('sys_id', 'IN', roundIds.join(','));
    } else {
        current.addQuery('sys_id', 'NULL');
    }
})(current, parent);`,
    },
});

// Explicit relationship: Round → Questions (via round_question m2m)
const roundQuestionsRel = Record({
    $id: Now.ID['round-questions-rel'],
    table: 'sys_relationship',
    data: {
        name: 'Round Questions',
        advanced: false,
        basic_apply_to: 'x_0221_quiz_app_round',
        basic_query_from: 'x_0221_quiz_app_question',
        simple_reference: false,
        query_with: `(function refineQuery(current, parent) {
    const grRoundQuestion = new GlideRecord('x_0221_quiz_app_round_question');
    grRoundQuestion.addQuery('round', parent.sys_id);
    grRoundQuestion.query();
    const questionIds = [];
    while (grRoundQuestion.next()) {
        questionIds.push(grRoundQuestion.getValue('question'));
    }
    if (questionIds.length > 0) {
        current.addQuery('sys_id', 'IN', questionIds.join(','));
    } else {
        current.addQuery('sys_id', 'NULL');
    }
})(current, parent);`,
    },
});

// Related list container on Quiz form
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
        related_list: `REL:${quizRoundsRel}`,
    },
});

// Related list container on Round form
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
        related_list: `REL:${roundQuestionsRel}`,
    },
});
