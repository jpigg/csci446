var guessesLeft = 10;
var highScores = new Array([9, "HarryJamesPotter"], [3, "ZedCthulhu"], [2, "NearlyDied"]);
//var setNum = 50;
var setNum = Math.floor(Math.random()*100) + 1;

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

function tooHigh(guess)
{
	//alert("too high");
	$("#message").html(guess + " was too high!");
}

function tooLow(guess)
{
	$("#message").html(guess + " was too low!");
}

function lose()
{
	again("You Lost!");
}

function again(preMessage)
{
	$("#message").html(preMessage + " <a href=\"javascript:location.reload(true)\">Play again?</a>");
}

function win()
{
	var name=prompt("Congrats! What's your name?", "Yong Bakos");
	//highScores = new Array([34, "yourmom"], [9, "HarryJamesPotter"], [3, "ZedCthulhu"], [2, "NearlyDied"]);
	var newScore = new Array([guessesLeft, name]);
	populateHighScores(newScore);
	again("Congrats! You won!");
}

function checkGuess()
{
	var guess = $('#guess').val();
	if(guess < setNum)
	{
		tooLow(guess);
		updateGuesses();
	}
	else if(guess > setNum)
	{
		tooHigh(guess);
		updateGuesses();
	}
	else
	{
		win();
	}

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