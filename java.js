let computerChoice = "nothing"; // Computer's choice
let playerChoice = "nothing";   // Player's choice
let computerCnum = 0;           // Player's choice as a number
let playerCnum = 0;             // Computer's choice as a number
let playerScore = 0;            // Player's number of wins
let computerScore = 0;          // Computer's number of wins

// Generate random whole number 0-2 and assign it to a valid choice
function getComputerChoice(cNum) {
    computerCnum = Math.floor(Math.random () * 3);
    if (computerCnum === 0) {
        computerChoice = "Rock";
    } else if (computerCnum === 1) {
        computerChoice = "Scissors";
    } else {
        computerChoice = "Paper";
    }
    console.log(computerCnum);
    console.log(computerChoice);
}

getComputerChoice();

// Get player's choice via prompt 
function getPlayerChoice(pChoice) {
    pChoice = window.prompt("Rock, Paper, Scissors?");
    playerChoice = pChoice.toUpperCase();
    console.log(playerChoice);
}

getPlayerChoice();

// Compare player choice to computer choice
function playRound(humanChoice, computerChoice) {
    
}
