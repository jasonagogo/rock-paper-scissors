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
const playerSelection= getPlayerChoice();
const computerSelection= getComputerChoice();

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
        return computer.textContent = computerSelection;
      })
}

//compare playerSelection to computerSelection and determine winner

function playRound() {
  for (let i=0; i<5; i++) {
    let winCount= 0;
    let lossCount= 0;
    let gameCount= i+1;
    state.textContent= "MAKE YOUR SELECTION!!!";
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    //update gameCount, lossCount, winCount and return all three in state div
  } 

}


