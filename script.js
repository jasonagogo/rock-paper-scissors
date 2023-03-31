/* Rock Paper Scissors game for the Odin Project

//Get the computer's choice(cc) between Rock, Paper, or scissors */

const choices  = ["rock", "paper", "scissors"]
const win = "You win!";
const lose = "You lose!";
const tie = "You tie!";

let computerSelection = getComputerChoice();

function getComputerChoice() {
    const computerSelection = choices[Math.floor(Math.random()*choices.length)];
    console.log(computerSelection);
    return computerSelection;
    }
const state = document.querySelector('#gameState');
state.textContent = "MAKE YOUR SELECTION!!!"

/* 2. Get the player's choice(PC) between Rock, Paper, or Scissors*/
const pchoices = document.querySelectorAll('.playerSelection');

let playerSelection = getPlayerChoice();

function getPlayerChoice() {
   let playerSelection = pchoices.forEach(choice => {
    choice.addEventListener('click', function handleClick(e) {
        console.log(this.id);
        return this.id;
    })
})
   return playerSelection;
}

pchoices.forEach(choice => {
    choice.addEventListener('click', playRound());
});
/*console.log(playerSelection);*/


function game () {
    for (let i = 0; i < 5; i++ ) {
      let winCount = 0;
      let lossCount = 0;
      let gameCount = i+1;
      if (playRound() === win) {
        winCount++
        gameCount++
      } else if (playRound() === lose) {
          lossCount++
          gameCount++
      } else if (playRound() === tie) {
          gameCount++
      }
      return "Wins: " + winCount + "     Losses: " + "      Games: " + gameCount;
    }
}


/*4. Compare PC to CC
   A. Display each choice
   B. Declare victor */

function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    if (playerSelection === computerSelection) {
        return tie;
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return lose;
        } else if (computerSelection === "scissors") {
            return win;
        }            
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return win;
        } else if (computerSelection === "scissors") {
            return lose;
        }
    } else {
        if (computerSelection === "paper") {
            return win;
        } else if (computerSelection === "rock") {
            return lose;
        }
    }
    };
