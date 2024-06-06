let computerChoice = "nothing"; // Computer's choice
let playerChoice = "nothing";   // Player's choice
let computerCnum = 0;           // Player's choice as a number
let playerScore = 0;            // Player's number of wins
let computerScore = 0;          // Computer's number of wins
let roundScore = 0;             // Who won the round, 0 for PC, 1 for player
let round = 0;                  // Set starting round
const btnsDiv = document.getElementById("rpsButtons");
const mainDiv = document.getElementById("mainDiv");
const scoreboard = document.createElement("div");
const playerSelection = document.createElement("div");
rpsButtons.appendChild(playerSelection);
const computerSelection = document.createElement("div");
rpsButtons.appendChild(computerSelection);
const roundResult = document.createElement("div");
rpsButtons.appendChild(roundResult);

// Get player's choice via button 
btnsDiv.addEventListener("click", function(e) {
    if (e.target.id != "") {
    playerChoice = e.target.id;
    playerSelection.textContent = "You chose " + playerChoice + ".";
    round++;
    console.log(round);
    playGame();
    } 
});

if (round = 1) {
    mainDiv.appendChild(scoreboard);
    scoreboard.textContent = "Player: " + playerScore + " vs. Computer: " + computerScore;
    }

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
    }
    // Computer win condition
    function computerWin(winCondition) {
        roundResult.textContent = "You lost the round!";
        computerScore++;
        scoreboard.textContent = "Player: " + playerScore + " vs. Computer: " + computerScore;
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
        if (playerScore < computerScore) {
            scoreboard.textContent = "Player: " + playerScore + " vs. Computer: " + computerScore + " || Sorry, you lost!";
        } else if (playerScore > computerScore) {
            scoreboard.textContent = "Player: " + playerScore + " vs. Computer: " + computerScore + " || Wow, you won!";
        } else {
            scoreboard.textContent = "Player: " + playerScore + " vs. Computer: " + computerScore + " || Looks like a tie! You both win this time.";
        }
    }
}