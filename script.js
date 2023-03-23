/* Rock Paper Scissors game for the Odin Project
1. Get the computer's choice(cc) between Rock, Paper, or scissors */

const choices  = ["Rock", "Paper", "Scissors"]
const computerSelection = getComputerChoice();
console.log(computerSelection);

function getComputerChoice() {
    let cc = choices[Math.floor(Math.random()*choices.length)];
    return cc;
    }

/* 2. Get the player's choice(PC) between Rock, Paper, or Scissors*/
const playerSelection = "Rock";
console.log(playerSelection);
const win = "You win!";
const lose = "You lose!";
const tie = "You tie!";

/*4. Compare PC to CC
   A. Display each choice
   B. Declare victor */

    function playRound() {
        if (playerSelection === computerSelection) {
            return tie;
        } else if (playerSelection === "Rock") {
            if (computerSelection === "Paper") {
                return lose;
            } else if (computerSelection === "Scissors") {
                return win;
            }            
        } else if (playerSelection === "Paper") {
            if (computerSelection === "Rock") {
                return win;
            } else if (computerSelection === "Scissors") {
                return lose;
            }
        } else {
            if (computerSelection === "Paper") {
                return win;
            } else if (computerSelection === "Rock") {
                return lose;
            }
        }
        }
    

    console.log(playRound());
    

    

