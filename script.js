function computerPlay() {
    const handSigns = ['Rock','Paper','Scissors']; 
    let randomHandSign = Math.floor(Math.random() * handSigns.length);
    return handSigns[randomHandSign];
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore++; 
        return 'You Win! Rock beats Scissors';
    }else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore++;
        return 'You Win! Paper beats Rock'; 
    }else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore++;
        return 'You Win! Scissors beats Paper';
    }else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore++;
        return 'You Lose! Paper beats Rock';
    }else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore++;
        return 'You Lose! Scissors beats Paper';
    }else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore++;
        return 'You Lose! Rock beats Scissors';
    }else if (playerSelection === computerSelection){
        computerScore++;
        playerScore++;
        return 'Draw';
    }else {
        return 'Enter a valid play';
    }
}

let playerScore = 0;
let computerScore = 0;

let player, computer;

function selectKey(e) {
    if (e.target !== e.currentTarget) {
        let clickedItem = e.target;
        clickedItem.classList.toggle('invert');
        let parent = document.querySelector('.key.invert');
        let child = parent.querySelector('kbd');
        let play = child.textContent;
        player = play;
    }
}

function playGame(e) {
    computer = computerPlay();
    let banner = document.querySelector('.banner');
    banner.textContent = playRound(player,computer);
}

const keys = document.querySelector('.player');
keys.addEventListener('click',selectKey);

window.addEventListener('keydown', playGame);













//game();

//console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`)

//if (playerScore > computerScore) {
   // console.log('Victory! Player Wins!');
//}else if (computerScore > playerScore) {
    //console.log('Defeat .. Computer Wins');
//}else if (playerScore === computerScore) {    
    //console.log('Draw');
//}

//window.addEventListener('keydown',game);

