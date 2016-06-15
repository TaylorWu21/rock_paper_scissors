var userChoice = "";
var computerChoice ="";
var result = "";

function getInput(x) {
	userChoice = x;
	computerInput();
	compare(userChoice, computerChoice);
	winner();
	computerOutput();
	userOutput();
}

function computerInput() {
	computerChoice = Math.random();
		if(computerChoice < 0.34) {
			computerChoice = "rock";
		} else if(computerChoice <= 0.67) {
			computerChoice = "paper";
		} else {
			computerChoice = "scissors";
		} 
}

function compare(choice1, choice2) {

	if(choice1 === choice2) {
		result = "Its a tie!";
	}
	else if(choice1 === "rock") {
		result = (choice2 === 'paper') ? "paper beats rock, you lose!" : "rock beats paper, you win!";
	}
	else if(choice1 === "paper") {
		result = (choice2 === 'rock') ? "paper beats rock, you win!" : "scissors beats paper, you lose!";
	}
	else if(choice1 === 'scissors') {
		result = (choice2 === 'rock') ? "rock beats scissors, you lose!" : "scissors beat paper, you win!";
	}
	return result
}

function computerOutput() {
	var compOutput = document.getElementById("computer_output");
	compOutput.innerHTML = "Computer chose: " + computerChoice;
}

function userOutput() {
	var playerOutput = document.getElementById("user_output");
	playerOutput.innerHTML = "You Chose: " + userChoice;
}

function winner() {
	var output = document.getElementById("output");
	output.innerHTML = result;
}
