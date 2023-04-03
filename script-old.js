/* Rock Paper Scissors game for the Odin Project*/
// Declare globals
const choices  = ["ROCK", "PAPER", "SCISSORS"]
const win = "You win!";
const lose = "You lose!";
const tie = "You tie!";
const state = document.querySelector('#gameState');
state.textContent = "MAKE YOUR SELECTION!!!"
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const gameCount = 0;
const winCount = 0;
const lossCount = 0;

/* Get the player's choice(PC) between Rock, Paper, or Scissors*/
const pchoices = document.querySelectorAll('.playerSelection');

let playerSelection = getPlayerChoice();

function getPlayerChoice() {
   let playerSelection = pchoices.forEach(choice => {
    choice.addEventListener('click', function handleClick(e) {
        state.textContent = `YOU HAVE SELECTED ${this.id}!!!`.toUpperCase();
        player.setAttribute("id", `${this.id}`);
        computer.textContent = 'NOW CLICK ME!!!';
        return this.id;
    })
})
   return playerSelection;
}

//  Get the computer's choice(cc) between Rock, Paper, or scissors
let computerSelection = getComputerChoice();

function getComputerChoice() {
    const computerSelection = choices[Math.floor(Math.random()*choices.length)];
    //console.log(computerSelection);
    return computerSelection;
    }

//computer.addEventListener('click', console.log(playRound()));
/*function game() {
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
      //computer.textContent= '';
      //player.removeAttribute('id');
      //state.textContent= "Wins: " + winCount.toString + "     Losses: " + lossCount.toString "      Games: " + gameCount.string;
      return;
    }
}


4. Compare PC to CC
   A. Display each choice
   B. Declare victor */


computer.addEventListener('click', function playRound() {
    computer.textContent = '';
    state.textContent = "MAKE YOUR SELECTION!!!";
    playerSelection = getPlayerChoice();
    console.log(playerSelection);
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    if (playerSelection === computerSelection) {
        state.textContent= tie;
        return 
    } else if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            state.textContent= lose;
            return 
        } else if (computerSelection === "SCISSORS") {
            state.textContent= win;
            return 
        }            
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            state.textContent= win;
            return 
        } else if (computerSelection === "SCISSORS") {
            state.textContent= lose;
            return 
        }
    } else {
        if (computerSelection === "PAPER") {
            state.textContent= win;
            return 
        } else if (computerSelection === "ROCK") {
            state.textContent= lose;
            return 
        }
    }
    });
