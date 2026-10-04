// @ts-nocheck
const QuizImporter = Class.create();
QuizImporter.prototype = {
    initialize: function () {
        this._categoryCache = {};
        this._logs = [];
    },

    _log: function (message) {
        this._logs.push(message);
    },

    getReport: function () {
        return this._logs;
    },

    importQuiz: function (rawJsonSysId) {
        const result = {
            success: false,
            quizId: '',
            counts: {
                quizzes: 0,
                rounds: 0,
                questions: 0,
                categories: 0,
                audiences: 0,
                quizRounds: 0,
                roundQuestions: 0,
            },
            errors: [],
            logs: [],
        };

        try {
            const grRawJson = new GlideRecord('x_0221_quiz_app_raw_json');
            if (!grRawJson.get(rawJsonSysId)) {
                this._log(`ERROR: raw_json record not found: ${rawJsonSysId}`);
                result.errors.push(`raw_json record not found: ${rawJsonSysId}`);
                result.logs = this.getReport();
                return result;
            }
            this._log(`Loaded raw_json record: ${rawJsonSysId}`);

            const jsonString = grRawJson.getValue('json');
            const { name, number, date, audience, rounds = [] } = JSON.parse(jsonString);
            this._log(`Parsed quiz JSON: "${name}" with ${rounds.length} round(s)`);

            // 1. Find or create Audience
            const audienceSysId = this._findOrCreateAudience(audience);
            if (audienceSysId) {
                result.counts.audiences++;
                this._log(`Audience: "${audience}" → ${audienceSysId}`);
            }

            // 2. Create Quiz
            const grQuiz = new GlideRecord('x_0221_quiz_app_quiz');
            grQuiz.initialize();
            grQuiz.setValue('name', name);
            grQuiz.setValue('number', number);
            grQuiz.setValue('date', this._convertDate(date));
            grQuiz.setValue('audience', audienceSysId);
            const quizSysId = grQuiz.insert();
            result.counts.quizzes++;
            result.quizId = quizSysId.toString();
            this._log(`Created quiz: "${name}" → ${quizSysId}`);

            // 3. Loop through rounds
            for (const roundData of rounds) {
                const { name: roundName, roundNumber, type, theme, path, questions = [] } = roundData;

                const grRound = new GlideRecord('x_0221_quiz_app_round');
                grRound.initialize();
                grRound.setValue('name', roundName || '');
                grRound.setValue('number', String(roundNumber));
                grRound.setValue('type', type);
                if (theme) grRound.setValue('theme', theme);
                if (path) grRound.setValue('path', path);
                const roundSysId = grRound.insert();
                result.counts.rounds++;
                this._log(`  Round ${roundNumber}: "${roundName || type}" → ${roundSysId}`);

                const grQuizRound = new GlideRecord('x_0221_quiz_app_quiz_round');
                grQuizRound.initialize();
                grQuizRound.setValue('quiz', quizSysId);
                grQuizRound.setValue('round', roundSysId);
                grQuizRound.insert();
                result.counts.quizRounds++;

                for (const questionData of questions) {
                    const { textNl, answerNl, type: qType, category, difficulty, mediaType, media, fullscreen } = questionData;

                    const categorySysId = this._findOrCreateCategory(category);
                    if (categorySysId && !this._categoryCache[`__counted_${category}`]) {
                        result.counts.categories++;
                        this._categoryCache[`__counted_${category}`] = true;
                        this._log(`    Category: "${category}" → ${categorySysId}`);
                    }

                    const grQa = new GlideRecord('x_0221_quiz_app_qa');
                    grQa.initialize();
                    grQa.setValue('question', textNl || '');
                    grQa.setValue('answer', answerNl || '');
                    const qaSysId = grQa.insert();

                    const grQuestion = new GlideRecord('x_0221_quiz_app_question');
                    grQuestion.initialize();
                    grQuestion.setValue('question', textNl || '');
                    grQuestion.setValue('answer', answerNl || '');
                    grQuestion.setValue('qa', qaSysId);
                    grQuestion.setValue('type', qType || 'normal');
                    grQuestion.setValue('category', categorySysId);
                    grQuestion.setValue('difficulty', String(difficulty || ''));
                    if (mediaType) grQuestion.setValue('media_type', mediaType);
                    if (media) grQuestion.setValue('filename', media);
                    grQuestion.setValue('fullscreen', fullscreen ? 'true' : 'false');

                    const questionSysId = grQuestion.insert();
                    result.counts.questions++;
                    result.counts.roundQuestions++;

                    const grRoundQuestion = new GlideRecord('x_0221_quiz_app_round_question');
                    grRoundQuestion.initialize();
                    grRoundQuestion.setValue('round', roundSysId);
                    grRoundQuestion.setValue('question', questionSysId);
                    grRoundQuestion.insert();

                    this._log(`    Question: "${(textNl || '').substring(0, 50)}..." → ${questionSysId}`);
                }
                this._log(`  Round ${roundNumber} complete: ${questions.length} question(s)`);
            }

            result.success = true;
            this._log(`Import complete: ${result.counts.rounds} rounds, ${result.counts.questions} questions`);
        } catch (e) {
            result.success = false;
            result.errors.push(`Error importing quiz: ${e.message}`);
            this._log(`ERROR: ${e.message}`);
            gs.error(`QuizImporter: Error importing quiz - ${e.message}`);
        }

        result.logs = this.getReport();
        return result;
    },

    _findOrCreateAudience: function (name) {
        if (!name) return '';
        const grAudience = new GlideRecord('x_0221_quiz_app_audience');
        grAudience.addQuery('name', name);
        grAudience.query();
        if (grAudience.next()) return grAudience.getUniqueValue();
        grAudience.initialize();
        grAudience.setValue('name', name);
        return grAudience.insert().toString();
    },

    _findOrCreateCategory: function (name) {
        if (!name) return '';
        if (this._categoryCache[name]) return this._categoryCache[name];
        const grCategory = new GlideRecord('x_0221_quiz_app_category');
        grCategory.addQuery('name', name);
        grCategory.query();
        if (grCategory.next()) {
            const sysId = grCategory.getUniqueValue();
            this._categoryCache[name] = sysId;
            return sysId;
        }
        grCategory.initialize();
        grCategory.setValue('name', name);
        const newSysId = grCategory.insert().toString();
        this._categoryCache[name] = newSysId;
        return newSysId;
    },

    _convertDate: function (dateStr) {
        if (!dateStr) return '';
        const [day, month, year] = dateStr.split('-');
        if (!year) return dateStr;
        return `${year}-${month}-${day}`;
    },

    type: 'QuizImporter',
};
