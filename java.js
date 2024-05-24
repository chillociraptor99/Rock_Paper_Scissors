let computerChoice = "nothing"; // Computer's choice
let playerChoice = "nothing";   // Player's choice
let computerCnum = 0;           // Player's choice as a number
let playerScore = 0;            // Player's number of wins
let computerScore = 0;          // Computer's number of wins
let roundScore = 0;             // Who won the round, 0 for PC, 1 for player
let round = 0;                  // Round, set to 0 at game start


function playGame(rnd) {
    do {
        // Generate random whole number 0-2 and assign it to a valid choice
        function getComputerChoice() {
            computerCnum = Math.floor(Math.random () * 3);
            if (computerCnum === 0) {
                computerChoice = "ROCK";
            } else if (computerCnum === 1) {
                computerChoice = "SCISSORS";
            } else {
                computerChoice = "PAPER";
            }
        //    console.log(computerCnum); Uncomment to debug
        //   console.log(computerChoice); Uncomment to debug
        }
    getComputerChoice();

        // Get player's choice via prompt 
        function getPlayerChoice(pChoice) {
            pChoice = window.prompt("Rock, Paper, Scissors?");
            playerChoice = pChoice.toUpperCase();
        }
    getPlayerChoice();

        // Compare player choice to computer choice
        function playRound(humanChoice, pcChoice) {
        //    console.log(computerChoice); Uncomment to debug
        //   console.log(playerChoice); Uncomment to debug
            if (computerChoice === "ROCK" && playerChoice === "PAPER") {
                console.log("You win!");
                roundScore = 1;
                round++;
                scoreRound();
            } else if (computerChoice === "PAPER" && playerChoice === "SCISSORS") {
                console.log("You win!");
                roundScore = 1;
                round++;
                scoreRound();
            } else if (computerChoice === "SCISSORS" && playerChoice === "ROCK") {
                console.log("You win!");
                roundScore = 1;
                round++;
                scoreRound();
            } else if (computerChoice === "ROCK" && playerChoice === "SCISSORS") {
                console.log("You lose.");
                roundScore = 0;
                round++;
                scoreRound();  
            } else if (computerChoice === "PAPER" && playerChoice === "ROCK") {
                console.log("You lose.");
                roundScore = 0;
                round++;
                scoreRound(); 
            } else if (computerChoice === "SCISSORS" && playerChoice === "PAPER") {
                console.log("You lose.");
                roundScore = 0;
                round++;
                scoreRound();       
            } else if (computerChoice === playerChoice) {
                console.log("A tie! No one wins.");
                round++;
            } else {
                console.log("Funny! Please choose rock, paper, or scissors!");
            }
        }

        // Explain results
        console.log("You chose " + playerChoice + ".");
        console.log("The computer chose " + computerChoice + ".");
        playRound();

        // Score the round as it ends
        function scoreRound() {
            if (roundScore === 0) {
                ++computerScore;
            } else if (roundScore === 1) {
                ++playerScore;
            } else console.log("Error. What did you do?");
//            console.log("Your score is " + playerScore + "!");
 //           console.log("The computer's score is " + computerScore + "!");
            if (playerScore > computerScore) {
                console.log("You're winning!");
            } else if (computerScore > playerScore) {
                console.log("You're losing!");
            } else console.log("You're tied!");
        }
        gameOver();
    } 
    while (round < 6); 
}

    // Check for game end condition and print final scores
    function gameOver(ovr) {
    //    console.log("checking round: " + round); Uncomment to debug
        if (round === 6) {
            console.log("Game over! Your final score was " + playerScore + ". The computer's final score was " + computerScore + ".");
            if (playerScore > computerScore) {
                console.log("You won!");
            } else if (playerScore === computerScore) {
                console.log("You tied.");
            }
             else console.log("You lost.");
        }
    }

playGame();
