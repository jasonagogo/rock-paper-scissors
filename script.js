const choices = ['ROCK', 'PAPER', 'SCISSORS'];
let playerScore = 0;
let computerScore = 0;
let round = 1;
const maxWin = 5;
updateScore();
let player = document.querySelector('.player');
let scoreBoard = document.getElementsByClassName('.scoreBoard');
const results = document.getElementById('result');
let pchoices = document.querySelector('.playerSelection');


//generate computerSelection
function getComputerChoice() {
  const computerSelection = choices[Math.floor(Math.random()*choices.length)];
  return computerSelection;
  }

let playRound = (playerSelection, computerSelection) => {
  let result = document.createElement('p');
  if (playerSelection === computerSelection) {
    result.textContent = `Round #${round}: IT'S A TIE!!! ${playerSelection} and ${computerSelection}`;  
  }else if(playerSelection === 'PAPER' && computerSelection === 'ROCK'
          || playerSelection === 'ROCK' && computerSelection === 'SCISSORS'
          || playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
            playerScore++;
            result.textContent = `ROUND #${round}: WIN!!! ${playerSelection} and ${computerSelection}`;
          }else{
            computerScore++,
            result.textContent = `ROUND #${round}: LOSE!!! ${playerSelection} and ${computerSelection}`;
          }
          round++;
          result.classList.add('text');
          results.appendChild(result);
          updateScore();
}

//This function updates the score at the DOM and checks for final win condition
function updateScore(){
  if(playerScore <= maxWin && computerScore <= maxWin) {
    let pScore = document.getElementById('playerScore');
    pScore.textContent = playerScore;
    let computer = document.getElementById('computerScore');
    computer.textContent = computerScore;
  }
  if(computerScore === maxWin || playerScore === maxWin){
    //Removes event listener
    let btn = Array.from(document.getElementsByClassName('btn'));
    btn.forEach(e => e.classList.remove('btn'));

    //Shows final Score at display and changes Chappie's icon
    let finalScore = document.createElement('p');
    if(computerScore === maxWin){
      finalScore.textContent = 'YOU LOSE, YOU LOUSE!';
      player.setAttribute('style', 'border-color: red');
    }else{
      finalScore.textContent = 'YOU WIN, YOU LEGEND!!!';
      player.setAttribute('style', 'border-color: green');
    }
    finalScore.setAttribute('style', 'font-size: 40px; font-weight: bold');
    results.insertBefore(finalScore,results.firstChild);
  }
}

//This function reboots the game
function start(){
  //adds btn class to user buttons, enabling click event listener
  let btn = Array.from(document.getElementsByClassName('playerSelection'));
  btn.forEach(e => e.classList.add('.btn'));
  //Reset and updates scores
  playerScore = 0;
  computerScore = 0;
  round = 1;
  updateScore;
  //Clears result window
  let results = document.getElementById('result');
  results.innerHTML = '<p>RESULTS</p>';
  player.setAttribute('id', '');
}

//establish event listener
window.addEventListener('click', (e) => {
  //this check controls the click
  if(e.target.className.includes('btn')){
    let playerSelection = e.target.id;

    playerSelection = (e.target.id).toUpperCase();
    player.setAttribute('id', e.target.id);
    playRound(playerSelection, getComputerChoice());
  }
  if(e.target.id === 'startBtn') {
    start();
  }
});