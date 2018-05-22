
//jQuery//
$(document).ready(function() {
// global Variables 

var win = 0;
var loss= 0;
var countDown= 50;
var playerAnswer1;
var playerAnswer2;
var playerAnswer3;
var playerAnswer4;
var playerAnswer5; 
var unanswered=[];
var correctAnswers = ["Frida Kahlo", "7th", "Henry","33","Pheobe"];

 // hide screen 
 $(".start-screen").css({
    'display': 'inline'
});
$(".trivia-screen").css({
    'display': 'none'
});
$(".timer-screen").css({
    'display': 'none'
});

//---START GAME FUNCTION----//
$("#start-btn").click(function(){
    // hide screen 
		$(".start-screen").css({
            'display': 'none'
        });
        $(".trivia-screen").css({
            'display': 'block'
        });
        $(".timer-screen").css({
            'display': 'block'
        });
        $(".reset").css( {
            'display': 'block'
        })
    timer();
    console.log(timer);
  });
  
// ----TIMER FUNCTION
    function timer () {
        if (countDown > 0) {
            setTimeout(countDown, 5000);
            $("#count-down").html('<h5> ' + countDown + ' seconds left!</h5>');
        }
        else {
//--- WHEN TIMER REACHES 0: store playersGuess, compare with correctAnswers update "#score-board"
           arrayOfAnswers();
           correctAnswers();
           scoreBoard();
        }
    }
//---create array of players answers to LATER compare with array of correct answers.
function arrayOfAnswers() {
	playerAnswers.push(playerAnswer1);
	playerAnswers.push(playerAnswer2);
    playerAnswers.push(playerAnswer3);
    playerAnswers.push(playerAnswer4);
    playerAnswers.push(playerAnswer5);
	console.log(playerAnswers);
	}
        
//--compareArrays correctAnswers with arrayOfAwnsers    
function compareArray() {
    var pAnswersLength = playerAnswers.length;
    for (var i = 0; i < pAnswersLength; i++) 
		{
			if (correctAnswers[i] === playerAnswers[i]) {
				win++;
			} else if (playerAnswers[i] === undefined) {
				unanswered++;
			} else {
				loss++;
			}
		}
	}
//---GETS VALUE OF CLICK-->

$(".question-1").on('click', function (storeTriviaBtnAnswer) {	
	playerAnswer1 = $('input[name="question-1"]:checked').val();
	}); 

$('.question-2').on('click', function (storeTriviaBtnAnswer) {	
	playerAnswer2 = $('input[name="question-2"]:checked').val();
	}); 

$('.question-3').on('click', function (storeTriviaBtnAnswer) {	
	playerAnswer3 = $('input[name="question-3"]:checked').val();
    }); 

$('.question-4').on('click', function (storeTriviaBtnAnswer) {	
    playerAnswer4 = $('input[name="question-4"]:checked').val();
    }); 

$('.question-5').on('click', function (storeTriviaBtnAnswer) {	
	playerAnswer5 = $('input[name="question-5"]:checked').val();
    }); 
    
//--- UPDATES SCORE 
function scoreBoard() {
	 $("#score-board").html('<h2>Finish!</h2><h3>Wins: ' + win + '</h3> <h3>Loss: ' + loss + '</h3>' + '<h3>Unanswered: ' + unanswered + '</h3>');

}

//reset, restart game

$("#reset-game").on("click", function() {
    var win = 0;
    var loss= 0;
    var countDown= 50
    var playerAnswer1;
    var playerAnswer2;
    var playerAnswer3;
    var playerAnswer4;
    var playerAnswer5; 
    var unanswered= [];

    $("#socre-board").empty();
    $(".question-1").attr("checked", false);
    $(".question-2").attr("checked", false);
    $(".question-3").attr("checked", false);
    $(".question-4").attr("checked", false);
    $(".question-5").attr("checked", false);

 // hide screen 
 $(".start-screen").css({
    'display': 'inline'
});
$(".trivia-screen").css({
    'display': 'none'
});

$(".timer-screen").css({
    'display': 'none'
});


});


});


