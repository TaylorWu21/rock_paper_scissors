var userChoice = "";
var computerChoice ="";
var result = "";
var userWins = 0;
var computerWins = 0;

function getInput(x) {
	userChoice = x;
	computerInput();
	compare(userChoice, computerChoice);
	winCount(result);
	winner();
	computerOutput();
	userOutput();
	displayUserWin();
	displayComputerWin();
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
		result = (choice2 === 'paper') ? "You Lose!" : "You Win!";
	}
	else if(choice1 === "paper") {
		result = (choice2 === 'rock') ? "You Win!" : "You Lose!";
	}
	else if(choice1 === 'scissors') {
		result = (choice2 === 'rock') ? "You Lose!" : "You Win!";
	}
	return result
}

function winCount(result) {
	if(result === 'You Win!') {
		userWins++
	} else if(result === 'You Lose!') {
		computerWins++
	} else {
		return;
	}
}

function displayUserWin() {
	var userWin = document.getElementById("user_win");
	userWin.innerHTML = "Your wins: " + userWins;
}

function displayComputerWin() {
	var computerWin = document.getElementById("computer_win");
	computerWin.innerHTML = "Computer wins: " + computerWins;
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
