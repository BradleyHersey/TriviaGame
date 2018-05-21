$(document).ready(function () {
   
    function showQuestion() {
        $('.result').html('');
        startTimer();
        var count = all.question;
        var obj = questions[count];

        var qText = obj.q_text;
        var qDisplay = '<h3>' + qText + '</h3>'
        $('.text').html(qDisplay);

        var qAnswers = [obj.q_options_1, obj.q_options_2, obj.q_options_3, obj.q_options_4]
        $('.options').html('');
        for (var i = 0; i < qAnswers.length; i++) {
            var ans = qAnswers[i];
            var id = i + 1;
            var first = '<li id="' + id + '">'
            var last = '</li>'
            $('.options').append(first + ans + last);
        }

        for (var j = 1; j <= 4; j++) {
            $('#' + j).click(function () {
                showAnswer($(this).attr('id'));
            });
        }

        
    }

    function showAnswer(num) {
        stopTimer();
        all.timer =30;
        var count = all.question;
        var obj = questions[count];
        var objCorrect = obj.q_correct_option
        if (num == 0) {
            all.noanswer++
            $('.result').html('<p>You ran out of time.</p>');
        } else if (num == objCorrect) {
            all.correct++
            $('.result').html('<p>Right on !</p>');
        } else {
            all.wrong++
            $('.result').html('<p>Sorry!</p>');
            $('#' + num).addClass('wrong');
        }
        $('#' + objCorrect).addClass('correct');
        $('.result').append('<p>Correct: ' + all.correct + '</p>');
        $('.result').append('<p>Wrong: ' + all.wrong + '</p>');
        $('.result').append('<p>Timed Out: ' + all.noanswer + '</p>');
        all.question++
        if (all.question < 7) {
            setTimeout(showQuestion, 5000);
        } else {
            setTimeout(gameOver, 5000);
        }

    } 
    function startTrivia() {
    
        $('#beginningPage').hide();
        $('.questionPage').show();
        showQuestion();
    }

    function gameOver() {

        $('.time').html('<h2>Well done buddy!</h2>');
        $('.text').html('');
        $('.result').html('<p>Correct: ' + all.correct + '</p>');
        $('.result').append('<p>Wrong: ' + all.wrong + '</p>');
        $('.result').append('<p>Timed Out: ' + all.noanswer + '</p>');

        $('.options').append('<button type="button" class="btn btn-success" id="startOverButton">Restart</button>');
        $('#startOverButton').click(function () {
            startOver();
            stopTimer();
           
        });
    }
    function startTimer() {
        all.timer = 30;
        $('.time').html('<h2> ' + all.timer + ' seconds</h2>');
        counter = setInterval(runTimer, 1000);
    }
    function runTimer() {
        all.timer--
        $('.time').html('<h2>: ' +all.timer + ' seconds</h2>');
        if (all.timer === 0) {
            stopTimer();
            showAnswer(0);
            
        }
    }
    function stopTimer() {
        clearTimeout(counter);
    }
    function startOver() {
        stopTimer();
        all.correct = 0;
        all.wrong = 0;
        all.noanswer = 0;
        all.question = 0;
        all.timer = 30;
        startTrivia();
        
    }

    
    
    $('#startButton').click(function () {
        
        startTrivia();
    });

 
    $('#startOverButton').click(function () {
        startOver();
    });

    var all = {
        correct: 0,
        wrong: 0,
        noanswer: 0,
        question: 0,
        timer: 30,
    }

    function question(number, cat, text, opt1, opt2, opt3, opt4, ans, date, img) {
        this.id = number;
        this.q_category_id = cat;
        this.q_text = text;
        this.q_options_1 = opt1;
        this.q_options_2 = opt2;
        this.q_options_3 = opt3;
        this.q_options_4 = opt4;
        this.q_correct_option = ans;
       
    }

    var question1 = new question(
        1,
        136,
        'Which country is in the Southern Hemisphere of Africa from the options below?',
        'America',
        'Japan',
        'South Africa',
        'Southern Africa',
        3,
      
    )
    var question2 = new question(
        2,
        136,
        'Which country only has red and yellow in thier flag?',
        'USA',
        'Ghana',
        'Spain',
        'China',
        4,
       
    )
    var question3 = new question(
        3,
        136,
        "Which country use to be used as a place for England's criminals they didn't want in the country? ",
        'Australia',
        'Canada',
        'China',
        'Egypt',
        1,
       
    )
    var question4 = new question(
        4,
        136,
        "Africa's only island ?",
        'Egypt',
        'Sudan',
        'Angola',
        'Madagascar',
       4,
        
    )
    var question5 = new question(
        5,
        136,
        'The BIGGEST country in the world ?',
        'USA',
        'Russia',
        'Africa',
        'China',
        2,
      
    )
    var question6 = new question(
        6,
        136,
        'What is the smallest contient in the world ?',
        'Asia',
        'Australia',
        'Europe',
        'Africa',
        2,
     
    )
    var question7 = new question(
        7,
        136,
        'The country with the highest populous ?',
        'India',
        'China',
        'USA',
        'Russia',
        2,
     
    )

    var questions = [question1, question2, question3, question4, question5, question6, question7]
});


