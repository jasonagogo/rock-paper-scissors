//name global variables
const choices= ['ROCK', 'PAPER', 'SCISSORS']
const win = "YOU WIN!!!";
const lose= "YOU LOSE!!!";
const tie= "YOU TIE!!!";
const state = document.querySelector('#gameState');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const pchoices = document.querySelectorAll('.playerSelection');
state.textContent= "MAKE YOUR SELECTION!!!"
let playerSelection= getPlayerChoice();
let computerSelection= getComputerChoice();

//collect player selection through an onClick event
function getPlayerChoice() {
    const playerSelection = pchoices.forEach(choice => {
     choice.addEventListener('click', function handleClick(e) {
        //change the state.textContent to reflect the player's selection
        state.textContent = `YOU HAVE SELECTED ${this.id}!!!`.toUpperCase();
         player.setAttribute("id", `${this.id}`);
         computer.textContent = 'NOW CLICK ME!!!';
         return this.id;
     })
 })
    return playerSelection;
 }
 
//generate the computerSelection through an onClick event
function getComputerChoice() {
    const computerSelection= computer.addEventListener('click', 
      function handleClick(e) {
        const computerSelection = choices[Math.floor(Math.random()*choices.length)];
        computer.textContent = computerSelection;
        document.getElementsByClassName('computer').textContent
      })
    }

//compare playerSelection to computerSelection and determine winner


for (let i=0; i<5; i++) {
    let winCount= 0;
    let lossCount= 0;
    let gameCount= i+1;
    state.textContent= "MAKE YOUR SELECTION!!!";
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    let playerState = playerSelection.toUpperCase;
    let computerState = computerSelection.toUpperCase;
    if (playerState === computerState) {
        computer.textContent = '';
        player.removeAttribute('id');
        state.textContent = tie + '     Game Count: ' + gameCount 
        '     Wins: ' + winCount + '     Losses: ' + lossCount;
        return
    } else if (playerState === 'ROCK') {
        if (computerState === 'PAPER') {
          lossCount++
          computer.textContent = '';
          player.removeAttribute('id');
          state.textContent = lose + '     Game Count: ' + gameCount 
          '     Wins: ' + winCount + '     Losses: ' + lossCount;
          return
          } else {
            winCount++
            computer.textContent = '';
            player.removeAttribute('id');
            state.textContent = win + '     Game Count: ' + gameCount 
            '     Wins: ' + winCount + '     Losses: ' + lossCount;
            return
          }
        }
      else if (playerState === 'PAPER') {
        if (computerState === 'SCISSORS') {
            lossCount++
            computer.textContent = '';
            player.removeAttribute('id');
            state.textContent = lose + '     Game Count: ' + gameCount 
            '     Wins: ' + winCount + '     Losses: ' + lossCount;
            return
            } else {
              winCount++
              computer.textContent = '';
              player.removeAttribute('id');
              state.textContent = win + '     Game Count: ' + gameCount 
              '     Wins: ' + winCount + '     Losses: ' + lossCount;
              return
            }
      }
      else {
        if (computerState === 'ROCK') {
            lossCount++
            computer.textContent = '';
            player.removeAttribute('id');
            state.textContent = lose + '     Game Count: ' + gameCount 
            '     Wins: ' + winCount + '     Losses: ' + lossCount;
            return
            } else {
              winCount++
              computer.textContent = '';
              player.removeAttribute('id');
              state.textContent = win + '     Game Count: ' + gameCount 
              '     Wins: ' + winCount + '     Losses: ' + lossCount;
              return
            }
      }  

    //update gameCount, lossCount, winCount and return all three in state div
  }
