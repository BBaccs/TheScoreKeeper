var p1btn = document.querySelector("#p1");
var p2btn = document.querySelector("#p2");
var resetbtn = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input[type='number']");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;




numInput.addEventListener("change", function(){
	winningScore = Number(numInput.value);
	winningScoreDisplay.textContent = winningScore;
	reset();
});

p1btn.addEventListener("click", function(){
	if (!gameOver) {
		p1Score++;

	} if (p1Score === winningScore) {
		p1Display.style.color = "red";
		console.log("Player 1 reached 5 and wins!");
		gameOver = true;
		console.log("Player1 is the winner!")
	}
p1Display.textContent = p1Score;
});


p2btn.addEventListener("click", function(){
	if (!gameOver) {
		p2Score++;
		p2Display.textContent = p2Score;
	} if (p2Score === winningScore) {
		p2Display.style.color = "green";
		gameOver = true;
		console.log("P2 is winner winner chicken dinner!")
	}
});


resetbtn.addEventListener("click", function(){
	reset();
});


function reset(){
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.style.color = "black";
	p2Display.style.color = "black";
}







































// var p1Button = document.querySelector("#p1");
// var p2Button = document.querySelector("#p2");
// var p1Display = document.querySelector("#p1Display");
// var p2Display = document.querySelector("#p2Display");
// var p1Score = 0;
// var p2Score = 0;
// var gameOver = false;
// var winningScore = 5;
// var resetButton = document.querySelector("#reset");
// var numInput = document.querySelector("input");
// var winningScoreDisplay = document.querySelector("p span");


// p1Button.addEventListener("click", function() {
// 	if (!gameOver) {
// 		p1Score++;
// 		console.log(p1Score, winningScore);
// 	if (p1Score === winningScore) {
// 		p1Display.classList.add("winner");
// 		gameOver = true;

// 	}
// 		p1Display.textContent = p1Score;
// 	} 
// });

// p2Button.addEventListener("click", function() {
// 	if (!gameOver) {
// 		p2Score++;
// 	if (p2Score === winningScore) {
// 		p2Display.classList.add("winner");
// 		gameOver = true;
// 	}
// 		p2Display.textContent = p2Score;
// 	}
// });

// resetButton.addEventListener("click", function(){
// 	reset();
// });

// function reset() {
// 		p1Score = 0;
// 		p2Score = 0;
// 		p2Display.textContent = 0;
// 		p1Display.textContent = 0;
// 		p1Display.classList.remove("winner");
// 		p2Display.classList.remove("winner");
// 		gameOver = false;
// }

// numInput.addEventListener("change", function() {
// 	winningScoreDisplay.textContent = numInput.value;
// 	winningScore = Number(numInput.value);
// 	reset();
// });


// var button = document.querySelector("button");

// button.addEventListener("click", function(){
// 	if (document.body.backgroundColor = "white") {
// 		document.body.style.backgroundColor = "purple";
// 	} else { 
// 		document.body.style.backgroundColor = "white";
		
// 	}
// });


// var button = document.querySelector("button");
// var iAmPurple = false;

// button.addEventListener("click", function(){
// 	if (iAmPurple) {
// 		document.body.style.backgroundColor = "white";
// 	}
// 	else { 
// 		document.body.style.backgroundColor = "purple";
// 	}
// 	iAmPurple = !iAmPurple;
// });