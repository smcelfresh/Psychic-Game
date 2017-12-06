//create array for all options (letters) in the alphabet
var alphaChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//create variables to hold numbers for Wins, Losses, Guesses Left, & Guesses so far
	var winCounter = 0;
	var lossCounter = 0; 
	var guessesleft = 9;
	var guessessofar = event; // get this to add each character each time a key is pressed

//create a document.onkeyup event listener function when user presses a key
		document.onkeyup = function(event) {
		var userSelection = event.key;
		document.getElementById("guessessofar").innerHTML = userSelection;		var userSelection = event.key;
			console.log();

//create random generator for computer's choice

	var computerGuess = 
	alphaChoices [Math.floor(Math.random() * alphaChoices.length)];
	console.log();
//add if , else statement to determine outcome and increment the appropraite number
	if (userSelection === computerGuess) {
		document.getElementById("winCounter").innerHTML = winCounter++;
	} 	else {
		document.getElementById("guessesleft").innerHTML = guessesleft--;
		document.getElementById("lossCounter").innerHTML = lossCounter++;
	}
}	


