//name global variables
const choices= ['ROCK', 'PAPER', 'SCISSORS']
const win = "YOU WIN!!!";
const lose= "YOU LOSE!!!";
const tie= "YOU TIE!!!";
const state = document.querySelector('#gameState');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const pchoices = document.querySelectorAll('.playerSelection');
state.textContent= "MAKE YOUR SELECTION!!!";
let playerSelection= getPlayerChoice();
let computerSelection= getComputerChoice();
let playerSelected = false;
let computerSelected = false;

//collect player selection through an onClick event
function getPlayerChoice() {
  return new Promise((resolve, reject) => {  
    for(const choice of pchoices) {
     choice.addEventListener('click', function handleClick(e) {
        //change the state.textContent to reflect the player's selection
        state.textContent = `YOU HAVE SELECTED ${this.id}!!!`.toUpperCase();
         player.setAttribute("id", `${this.id}`);
         computer.textContent = 'NOW CLICK ME!!!';
         playerSelection = this.id.toUpperCase();
         playerSelected = true;
         resolve();
     });
    }
  });
}
 
//generate the computerSelection through an onClick event
function getComputerChoice() {
    return new Promise((resolve, reject) => {
      computer.addEventListener('click', function handleClick(e) {
        const computerSelection = choices[Math.floor(Math.random()*choices.length)];
        computer.textContent = computerSelection;
        computerSelection = computerSelection.toUpperCase();
        computerSelected = true;
      });
    });
  }
//compare playerSelection to computerSelection and determine winner
if (playerSelected && computerSelected) {
  game();
}

async function game() {
  let winCount= 0;
  let lossCount= 0; 
  for (let i=0; i<5; i++) {
    let gameCount= i+1;
    state.textContent= "MAKE YOUR SELECTION!!!";
    let playerSelection =  await getPlayerChoice();
    let computerSelection = await getComputerChoice();
    let playerState = playerSelection;
    let computerState = computerSelection;
    if (playerState === computerState) {
        computer.textContent = '';
        player.removeAttribute('id');
        state.textContent = tie + '     Game Count: ' + gameCount 
        '     Wins: ' + winCount + '     Losses: ' + lossCount;
    } else if (playerState === 'ROCK') {
        if (computerState === 'PAPER') {
          lossCount++
          computer.textContent = '';
          player.removeAttribute('id');
          state.textContent = lose + '     Game Count: ' + gameCount 
          '     Wins: ' + winCount + '     Losses: ' + lossCount;
          } else {
            winCount++
            computer.textContent = '';
            player.removeAttribute('id');
            state.textContent = win + '     Game Count: ' + gameCount 
            '     Wins: ' + winCount + '     Losses: ' + lossCount;
          }
        }
      else if (playerState === 'PAPER') {
        if (computerState === 'SCISSORS') {
            lossCount++
            computer.textContent = '';
            player.removeAttribute('id');
            state.textContent = lose + '     Game Count: ' + gameCount 
            '     Wins: ' + winCount + '     Losses: ' + lossCount;
            } else {
              winCount++
              computer.textContent = '';
              player.removeAttribute('id');
              state.textContent = win + '     Game Count: ' + gameCount 
              '     Wins: ' + winCount + '     Losses: ' + lossCount;
            }
      }
      else {
        if (computerState === 'ROCK') {
            lossCount++
            computer.textContent = '';
            player.removeAttribute('id');
            state.textContent = lose + '     Game Count: ' + gameCount 
            '     Wins: ' + winCount + '     Losses: ' + lossCount;
            } else {
              winCount++
              computer.textContent = '';
              player.removeAttribute('id');
              state.textContent = win + '     Game Count: ' + gameCount 
              '     Wins: ' + winCount + '     Losses: ' + lossCount;
            }
      }  

    //update gameCount, lossCount, winCount and return all three in state div
  }
<<<<<<< HEAD
}
=======
}*/
>>>>>>> 1b630d8882e16ab13c461b59be1b97cafcef31dc
