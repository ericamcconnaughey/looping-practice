
	// Back-End (business logic)

	var total = 0;
	const countedNumbers = [];
	

	
	// Front-End (user-interface logic)
	
	$(document).ready(function() {
		$("form#calculator").submit(function() {
			event.preventDefault();
			var goalNumber = parseInt($("#goalInput").val());
			var countingNumber = parseInt($("#countInput").val());
			console.log("goal number: " + goalNumber);  // for debugging
    	console.log("counting number: " + countingNumber);  // for debugging

			//if else for empty and non-number inputs

			//for loop to add counting number until goal number
			for (var currentNumber = 0; currentNumber < goalNumber; currentNumber += countingNumber) {
				console.log(currentNumber);
				var answers = countedNumbers.push(currentNumber);
				//countedNumbers.push([currentNumber]);
			}
			 
				console.log(answers);
			$("#output").text(answers);
		})
	})