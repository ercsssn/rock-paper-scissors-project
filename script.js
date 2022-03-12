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

function changeRound() {
    let banner = document.querySelector('.banner');

    let playerItem = document.querySelector('.player');
    const playerButton = playerItem.querySelector('.key.invert');

    let computerItem = document.querySelector('.computer');
    const compButton = computerItem.querySelector('.key.invert');

    banner.textContent = 'Press any key to start';
    playerButton.classList.remove('invert');
    compButton.classList.remove('invert');

}

function selectKey(e) {
    if (e.target !== e.currentTarget) {
        let clickedItem = e.target;
        clickedItem.classList.toggle('invert'); // Invert button color when selected

        let parent = document.querySelector('.key.invert'); // Get kbd text content for playerSelection
        let child = parent.querySelector('kbd');
        let play = child.textContent;
        player = play;
    }
}

function playGame(e) {
    computer = computerPlay();
    let computerParent = document.querySelector('.computer');
    let computerButtons = computerParent.querySelectorAll('.key');
    
    for (let i=0; i < computerButtons.length; i++) {
        let buttonText = computerButtons[i].querySelector('kbd');
        computerText = buttonText.textContent;
        if (computerText === computer) {
            computerButtons[i].classList.add('invert');  // highlight computer selection
        }
    }
    
    let banner = document.querySelector('.banner');
    let sub = document.querySelector('.sub');
    banner.textContent = playRound(player,computer);
    sub.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    
} 

let playerScore = 0;
let computerScore = 0;
let player, computer;

const restart = document.querySelector('.banner');
restart.addEventListener('click',changeRound);

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

