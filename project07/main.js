var guessesLeft = 10;
var highScores = new Array([9, "HarryJamesPotter"], [3, "ZedCthulhu"], [2, "NearlyDied"]);
var setNum = 50;

$(function() {
  updateScore(guessesLeft);
  populateHighScores(highScores);
});

function updateGuesses()
{
	//document.getElementById("guessesLeft").innerHTML = guessesLeft;
	guessesLeft = guessesLeft -1;
	$("#guessesLeft").html(guessesLeft);
	if(guessesLeft === 0)
	{
		lose();
	}
}

function tooHigh()
{
	alert("too high");
}

function tooLow()
{
	alert("too low");
}

function lose()
{
	alert("You lose");
}

function win()
{
	alert("You win");
}

function checkGuess()
{
	var guess = $('#guess').val();
	if(guess < setNum)
	{
		tooLow();
	}
	else if(guess > setNum)
	{
		tooHigh();
	}
	else
	{
		win();
	}
	updateGuesses();
//	alert("test");
}

function populateHighScores(scores) {
  for (var i = 0; i < scores.length; ++i) {
    $('div#highScores').append("<p>" + scores[i][0] + " " + scores[i][1] + "</p>");
  }
}

function updateScore(score) {
  $('h2#score span#guessesLeft').append(score);
}