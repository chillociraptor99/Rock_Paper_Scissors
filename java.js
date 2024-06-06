let computerChoice = "nothing"; // Computer's choice
let playerChoice = "nothing";   // Player's choice
let computerCnum = 0;           // Player's choice as a number
let playerScore = 0;            // Player's number of wins
let computerScore = 0;          // Computer's number of wins
let roundScore = 0;             // Who won the round, 0 for PC, 1 for player
let round = 0;                  // Set starting round
const btnsDiv = document.getElementById("rpsButtons");
const mainDiv = document.getElementById("mainDiv");

// Create game related divs
const scoreboard = document.createElement("div");
scoreboard.setAttribute("id", "scoreboard");
const resultContainer = document.createElement("div");
mainDiv.appendChild(resultContainer);
resultContainer.setAttribute("id", "resultContainer");
const playerSelection = document.createElement("div");
resultContainer.appendChild(playerSelection);
const computerSelection = document.createElement("div");
resultContainer.appendChild(computerSelection);
const roundResult = document.createElement("div");
resultContainer.appendChild(roundResult);
mainDiv.appendChild(scoreboard);
const finalScore = document.createElement("div");
finalScore.setAttribute("id", "finalScore");
mainDiv.appendChild(finalScore);

// Get player's choice via button 
btnsDiv.addEventListener("click", function(e) {
    if (e.target.id != "" && e.target.id != "rpsButtons") {
    playerChoice = e.target.id;
    playerSelection.textContent = "You chose " + playerChoice + ".";
    round++;
    console.log(round);
    playGame();
    } 
});

// Game logic
function playGame() {
    getComputerChoice();
    // Generate random whole number 0-2 and assign it to a valid choice
    function getComputerChoice() {
        computerCnum = Math.floor(Math.random () * 3);
        if (computerCnum === 0) {
            computerChoice = "rock";
        } else if (computerCnum === 1) {
            computerChoice = "scissors";
        } else {
            computerChoice = "paper";
        }
        computerSelection.textContent = "Computer chose " + computerChoice + ".";
        playRound();
    }
    // Player win condition
    function playerWin(winCondition) {
        roundResult.textContent = "You win the round!";
        playerScore++;
        scoreboard.textContent = "Player: " + playerScore + " vs. Computer: " + computerScore;
        scoreboard.style.borderRadius = "8px";
        scoreboard.style.padding = "6px";
    }
    // Computer win condition
    function computerWin(winCondition) {
        roundResult.textContent = "You lost the round!";
        computerScore++;
        scoreboard.textContent = "Player: " + playerScore + " vs. Computer: " + computerScore;
        scoreboard.style.borderRadius = "8px";
        scoreboard.style.padding = "6px";   
    }
    // Compare player choice to computer choice
    function playRound(pChoice, cChoice) {
        if (computerChoice === "rock" && playerChoice === "paper") {
            playerWin();
        } else if (computerChoice === "paper" && playerChoice === "scissors") {
            playerWin();
        } else if (computerChoice === "scissors" && playerChoice === "rock") {
            playerWin();
        } else if (computerChoice === "rock" && playerChoice === "scissors") {
            computerWin();
        } else if (computerChoice === "paper" && playerChoice === "rock") {
            computerWin();
        } else if (computerChoice === "scissors" && playerChoice === "paper") {
            computerWin();
        } else if (computerChoice === playerChoice) {
            roundResult.textContent = "A tie. No one wins.";
        }
    }
    gameOver();
} 

// Check for game end condition and print final scores
function gameOver() {
    if ((playerScore === 5) || (computerScore === 5)) {
        rpsButtons.remove(); 
        finalScore.style.padding = "6px";  
        if (playerScore < computerScore) {
            finalScore.textContent = "You lose!";
        } else if (playerScore > computerScore) {
            finalScore.textContent = "You win!";
        } else {
            finalScore.textContent = "It's a tie.";
        }
    }
}