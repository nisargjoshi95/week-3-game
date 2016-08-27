//on document load
$(document).ready(function() {
	
});

//global functions
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//objects
function game(wb, wordElement, guessElement) {
	this.wordBank = wb;
	console.log(this.wordBank);
	this.currentWord = this.wordBank[getRandomInt(0,0)];
	console.log(this.currentWord);
	this.currentWordElement = wordElement;
	this.guessedElement = guessElement;

	this.setup = function() {
		// body...
		console.log(this);
		this.currentWord = this.wordBank[getRandomInt(0,10)];
		this.currentWordElement.text("");
		this.guessedElement.text("");
		for (var i = this.currentWord.length - 1; i >= 0; i--) {
			this.currentWordElement.text(this.currentWordElement.text() + "_ ");
		}
	}

	this.guess = function(key) {
		console.log(key);
		for (var i = this.currentWord.length - 1; i >= 0; i--) {
			if(this.currentWord[i] === key) {
				var elementText = this.currentWordElement.text().split("");
				elementText[i*2] = key;
				this.currentWordElement.text(elementText.join(""));
			} else {
				if(!(this.guessedElement.text().includes(key) || this.currentWord.includes(key)))
					this.guessedElement.text(this.guessedElement.text() + key + " ");
			}
		}

		if(!this.currentWordElement.text().includes("_")) {
			this.win();
		}
	}

	this.win = function() {
		console.log("win!!");
		$("#status").text("Good job! Press any key to keep playing!");
		console.log("timeout");
		window.setTimeout(this.setup.bind(this), 1000);
	}
}

//word bank
var bank = ["wavy", "radical", "groovy", "gnarly", "amped", "barney", "dude", "epic", "frontside", "shaka"];

//elements
var wordE = $("#word");
var lettersGuessed = $("#lettersGuessed");

//start game
var hangman = new game(bank, wordE, lettersGuessed);
hangman.setup(hangman);

//listeners
$("body").keyup(function(event) {
	// event
	var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();

	hangman.guess(keyPressed);
});