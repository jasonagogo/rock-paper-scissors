/* Rock Paper Scissors game for the Odin Project
1. Get the computer's choice(cc) between Rock, Paper, or scissors */

const choices  = ["rock", "paper", "scissors"]
const computerSelection = getComputerChoice();
console.log(computerSelection);

function getComputerChoice() {
    let cc = choices[Math.floor(Math.random()*choices.length)];
    return cc;
    }

/* 2. Get the player's choice(PC) between Rock, Paper, or Scissors*/
const playerSelection = getPlayerChoice();

function getPlayerChoice() {
   let pc = prompt("Rock, Paper, or Scissors?").toLowerCase();
   return pc;
}
/*console.log(playerSelection);*/
const win = "You win!";
const lose = "You lose!";
const tie = "You tie!";
let x = getPlayerChoice();
let y = getComputerChoice();
let i = 1;

function game () {
    do {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        return console.log(playRound(playerSelection, computerSelection));
        i++;
    }
    while (i < 5) {
        
    }
}


/*4. Compare PC to CC
   A. Display each choice
   B. Declare victor */

    function playRound(x, y) {
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
    
console.log(game());
    

    

