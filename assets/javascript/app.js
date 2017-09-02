var numCorrect = 0;
var numWrong = 0;
var unanswered = 0;
var intervalId;

$(window).on("load", function() {

	var timeRemaining = 21;
	time();

	function time() {

		if(timeRemaining === 0) {
			checkAnswers();
		} else {
			timeRemaining--;
			$("#spanTime").html(timeRemaining)
			intervalId = setTimeout(time,1000);
		}
	}

});

function checkAnswers() {

	clearTimeout(intervalId);
	console.log("checkAnswerFunciton");

	for(var i=1; i<6; i++) {
		var val = $('input[name=answer'+ i+' ]:checked').val();

		if(i == 1) {
			console.log(val);
			if(val == "answerB") {
				numCorrect++;
			} else {
				numWrong++;
			}
		}

		if(i == 2) {

			if(val == "answerC") {
				numCorrect++;
			} else {
				numWrong++;
			}
		}

		if(i == 3) {

			if(val == "answerA") {
				numCorrect++;
			} else {
				numWrong++;
			}
		}
		if(i == 4) {

			if(val == "answerA") {
				numCorrect++;
			} else {
				numWrong++;
			}
		}
		if(i == 5) {

			if(val == "answerB") {
				numCorrect++;
			} else {
				numWrong++;
			}
		}
	}

	results();
}

function results() {
	var q;
	console.log("Correct: " + numCorrect);
	console.log("Wrong: " +numWrong);
	if(numCorrect===1) { 
		q=" question"; 
	} else {
		q=" questions";
	}

	$(".spanCorrect").html("You got " + numCorrect + q + " correct!");
	$(".spanWrong").html("and " + numWrong + " wrong");

	$("button").css("display", "none");
	$("#resultsBox").css("display", "inline");
	$("#questionBox").css("display", "none");
}