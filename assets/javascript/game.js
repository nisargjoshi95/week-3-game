$(document).ready(function() {
	$("body").keyup(function(event) {
		// event
		var keyPressed = String.fromCharCode(event.keyCode).toLowerCase();

		// elements
		var word = $("#word");
		var lettersGuessed = $("#lettersGuessed");

		// words
		var words = ["hang loose", "radical", "groovy"];

		lettersGuessed.text('some text')
	});
});