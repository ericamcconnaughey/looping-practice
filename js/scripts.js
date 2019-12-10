
// Back-End (business logic)

var total = 0;
var answers = [];

// Front-End (user-interface logic)

$(document).ready(function () {
	$("form#calculator").submit(function () {
		event.preventDefault();
		var goalNumber = parseInt($("#goalInput").val());
		var countingNumber = parseInt($("#countInput").val());

		//if else for empty and non-number inputs
		if (isNaN(goalNumber) || isNaN(countingNumber)) {
			$("#output").text("Sorry, I only know how to count by numbers!");
		} else if (goalNumber <= countingNumber) {
			$("#output").text("Please make your goal number larger than your counting number.");
		} else if (countingNumber <= 0) {
			$("#output").text("I'd rather not crash from an infinite loop. Try again.");
		} else {
			//for loop to add counting number until goal number
			for (var currentNumber = 0; currentNumber < goalNumber; currentNumber += countingNumber) {
				answers.push(currentNumber);
			}

			$("#output").text(answers + "," + goalNumber);
		}
	})
})