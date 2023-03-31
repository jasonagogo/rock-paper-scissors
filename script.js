/* Rock Paper Scissors game for the Odin Project

//Get the computer's choice(cc) between Rock, Paper, or scissors */

const choices  = ["ROCK", "PAPER", "SCISSORS"]
const win = "You win!";
const lose = "You lose!";
const tie = "You tie!";
const state = document.querySelector('#gameState');
state.textContent = "MAKE YOUR SELECTION!!!"
const player = document.querySelector('.player');

let computerSelection = getComputerChoice();

function getComputerChoice() {
    const computerSelection = choices[Math.floor(Math.random()*choices.length)];
    console.log(computerSelection);
    return computerSelection;
    }


/* 2. Get the player's choice(PC) between Rock, Paper, or Scissors*/
const pchoices = document.querySelectorAll('.playerSelection');

let playerSelection = getPlayerChoice();

function getPlayerChoice() {
   let playerSelection = pchoices.forEach(choice => {
    choice.addEventListener('click', function handleClick(e) {
        state.textContent = `YOU HAVE SELECTED ${this.id}!!!`.toUpperCase();
        player.setAttribute("id", `${this.id}`);
        return this.id;
    })
})
   return playerSelection;
}

pchoices.forEach(choice => {
    choice.addEventListener('click', );
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
    } else if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            return lose;
        } else if (computerSelection === "SCISSORS") {
            return win;
        }            
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            return win;
        } else if (computerSelection === "SCISSORS") {
            return lose;
        }
    } else {
        if (computerSelection === "PAPER") {
            return win;
        } else if (computerSelection === "ROCK") {
            return lose;
        }
    }
    };
