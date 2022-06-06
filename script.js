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

    let instructions = document.querySelector('.instruct');

    banner.textContent = 'Select your hand!';
    instructions.textContent = "";
    // console.log(compButton);
    playerButton.classList.remove('invert');
    compButton.classList.remove('invert');
    // console.log(compButton);
    if (playerScore === 5) {
        banner.textContent = 'Victory! Player Wins!';
        window.setTimeout(location.reload.bind(location),3000);
    } else if (computerScore === 5) {
        banner.textContent = 'Defeat... Computer Wins'; 
        window.setTimeout(location.reload.bind(location),3000);
    }
}

function selectKey(e) {
    if (e.target !== e.currentTarget) {
        let clickedItem = e.target;
        // console.log(clickedItem);
        console.log(e.target.tagName);
        if (e.target.tagName == "IMG" || e.target.tagName == "SPAN" || e.target.tagName == "KBD"){
            return;
        }
        clickedItem.classList.toggle('invert'); // Invert button color when selected

        let parent = document.querySelector('.key.invert'); // Get kbd text content for playerSelection
        let child = parent.querySelector('kbd');
        let play = child.textContent;
        player = play;
    }else {
        return;
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
    let instructions = document.querySelector('.instruct');
    banner.textContent = playRound(player,computer);
    sub.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
    instructions.textContent = "( Click the banner for next round)";
    
} 

let playerScore = 0;
let computerScore = 0;
let player, computer;

const restart = document.querySelector('.banner');
restart.addEventListener('click',changeRound);

const keys = document.querySelector('.player');
// console.log(keys); 
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

