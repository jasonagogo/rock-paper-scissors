/* Rock Paper Scissors game for the Odin Project
// Draw the playing field
const container = document.querySelector('#container');
const div = document.createElement('div');
div.classList.add('playingField');
div.style.backgroundImage="url(images/1200px-Rock-paper-scissors.svg.png)"
container.appendChild(div);


//Get the computer's choice(cc) between Rock, Paper, or scissors */

const choices  = ["rock", "paper", "scissors"]
let computerSelection = "y";
console.log(computerSelection);

function getComputerChoice() {
    const computerSelection = choices[Math.floor(Math.random()*choices.length)];
    return computerSelection;
    }

/* 2. Get the player's choice(PC) between Rock, Paper, or Scissors*/
let playerSelection = "x";

const pchoices = document.querySelectorAll('.playerSelection');

pchoices.forEach(choice => {
    choice.addEventListener('click', function handleClick(e) {
        alert('Box Clicked', e);
    })
})


function getPlayerChoice() {
   let playerSelection = poop
   return playerSelection;
}
/*console.log(playerSelection);*/
const win = "You win!";
const lose = "You lose!";
const tie = "You tie!";
let i = 1;

function game () {
    for (let i = 0; i < 5; i++ ) {
      console.log(playRound());
      console.log("Game count" + (i +1));     
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
        }
    
