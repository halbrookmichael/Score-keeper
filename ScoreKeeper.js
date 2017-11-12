// Player 1 Score

var p1Button = document.getElementById("p1");
var p1Score = 0;
var p1Display = document.querySelector("#p1Display");

// Player 2 Score

var p2Button = document.getElementById("p2");
var p2Score = 0;
var p2Display = document.querySelector("#p2Display");

// Change Winning Score

var winningScoreDisplay = document.querySelector("p span");

// Reset

var resetButton = document.getElementById("reset");

// Game End - boolean

var winningScore = 5;
var gameOver = false;

// Play to Change

var numInput = document.querySelector("input");

// Game Score Logic

p1Button.addEventListener("click", function(){
	if(!gameOver) {
		p1Score ++;
		if(p1Score === winningScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver) {
		p2Score ++;
		if(p2Score === winningScore) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

// Reset Game

resetButton.addEventListener("click", function(){
	reset();
});

// Update Play to Amount

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(this.value);
	reset();
});


function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
};