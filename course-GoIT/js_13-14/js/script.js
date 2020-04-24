'user strict';


$(function() {
    var test = {
        questions: [{
            name: 'q0',
            title: 'Вопрос №1',
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
            correct: ['q0a0']
        }, {
            name: 'q1',
            title: 'Вопрос №2',
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
            correct: ['q1a1']
        }, {
            name: 'q2',
            title: 'Вопрос №3',
            answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
            correct: ['q2a2']
        }]
    };
    try {
        localStorage.setItem('ITtest', JSON.stringify(test));
    } catch (e) {
        alert(e);
    }
    try {
        document.body.innerHTML = tmpl('test', JSON.parse(localStorage.getItem('ITtest')));
    } catch (e) {
        alert(e);
    }
    $('.form__test').on('submit', function(e) {
        e.preventDefault();
        var $userAnswers = $(this).serialize().split('&');
        var answers = [];
        $userAnswers.forEach(function(answer) {
            answers.push(answer.replace('=on', ''));
        });
        var rigthAnswers = [];
        var localTest = JSON.parse(localStorage.getItem('ITtest'));
        localTest.questions.forEach(function(question) {
            question.correct.forEach(function(correct) {
                rigthAnswers.push(correct);
            });
        });

        rigthAnswers.sort();
        answers.sort();
        var userResult = 0;
        var result = rigthAnswers.every(function(e, i) {
            if (e === answers[i]) {
                userResult++;
                return true;
            } else {
                return false;
            }
        });

        $('.modal-content').text(' Your answers are ' + (result ? 'correct' : 'wrong') + '! Co  rrect answers: ' + userResult);
        localStorage.clear();
        $('#myModal').modal('show');

        try {
            localStorage.setItem('ITtest', JSON.stringify(test));
        } catch (e) {
            alert(e);
        }

        $('.form__test').trigger('reset');
    });
});
