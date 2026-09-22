import '@servicenow/sdk/global';
import { UiAction } from '@servicenow/sdk/core';

UiAction({
    $id: Now.ID['delete-quiz-action'],
    table: 'x_0221_quiz_app_quiz',
    name: 'Delete Quiz',
    actionName: 'delete_quiz',
    showUpdate: true,
    form: {
        showButton: true,
        style: 'destructive',
    },
    client: {
        isClient: true,
        onClick: 'confirmDeleteQuiz()',
    },
    script: `
function confirmDeleteQuiz() {
    if (confirm('Are you sure you want to delete this quiz? Orphaned rounds and questions will also be removed.')) {
        gsftSubmit(null, g_form.getFormElement(), 'delete_quiz');
    }
}

if (typeof window == 'undefined') {
    deleteQuiz();
}

function deleteQuiz() {
    const quizSysId = current.getUniqueValue();
    const roundsToCheck = [];

    // 1. Collect rounds linked to this quiz and delete the quiz_round junctions
    const grQuizRound = new GlideRecord('x_0221_quiz_app_quiz_round');
    grQuizRound.addQuery('quiz', quizSysId);
    grQuizRound.query();
    while (grQuizRound.next()) {
        roundsToCheck.push(grQuizRound.getValue('round'));
        grQuizRound.deleteRecord();
    }

    // 2. For each round, check if it still appears in another quiz
    for (const roundSysId of roundsToCheck) {
        const grOtherQuizRound = new GlideRecord('x_0221_quiz_app_quiz_round');
        grOtherQuizRound.addQuery('round', roundSysId);
        grOtherQuizRound.setLimit(1);
        grOtherQuizRound.query();

        if (!grOtherQuizRound.hasNext()) {
            // Round is orphaned — collect its questions before deleting junctions
            const questionsToCheck = [];
            const grRoundQuestion = new GlideRecord('x_0221_quiz_app_round_question');
            grRoundQuestion.addQuery('round', roundSysId);
            grRoundQuestion.query();
            while (grRoundQuestion.next()) {
                questionsToCheck.push(grRoundQuestion.getValue('question'));
                grRoundQuestion.deleteRecord();
            }

            // 3. For each question, check if it still appears in another round
            for (const questionSysId of questionsToCheck) {
                const grOtherRoundQuestion = new GlideRecord('x_0221_quiz_app_round_question');
                grOtherRoundQuestion.addQuery('question', questionSysId);
                grOtherRoundQuestion.setLimit(1);
                grOtherRoundQuestion.query();

                if (!grOtherRoundQuestion.hasNext()) {
                    // Question is orphaned — delete it
                    const grQuestion = new GlideRecord('x_0221_quiz_app_question');
                    if (grQuestion.get(questionSysId)) {
                        grQuestion.deleteRecord();
                    }
                }
            }

            // Delete the orphaned round
            const grRound = new GlideRecord('x_0221_quiz_app_round');
            if (grRound.get(roundSysId)) {
                grRound.deleteRecord();
            }
        }
    }

    // 4. Delete the quiz itself
    current.deleteRecord();

    gs.addInfoMessage('Quiz and orphaned rounds/questions have been deleted.');
    action.setRedirectURL('x_0221_quiz_app_quiz_list.do');
}`,
});
