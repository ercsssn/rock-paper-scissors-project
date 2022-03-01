function computerPlay() {
    const handSigns = ['Rock','Paper','Scissors']; 
    let randomHandSign = Math.floor(Math.random() * handSigns.length);
    return handSigns[randomHandSign];
}

function playRound(playerSelection,computerSelection) {
    let input = prompt('Which hand sign will you play?\n Rock, Paper, Scissors? ');
    const playerSelection = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    const computerSelection = computerPlay();
    
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore += 1;
        return 'You Win! Rock beats Scissors';
    }else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore += 1;
        return 'You Win! Paper beats Rock'; 
    }else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore += 1;
        return 'You Win! Scissors beats Paper';
    }else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore += 1;
        return 'You Lose! Paper beats Rock';
    }else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore += 1;
        return 'You Lose! Scissors beats Paper';
    }else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore += 1;
        return 'You Lose! Rock beats Scissors';
    }else if (playerSelection === computerSelection){
        playerScore += 1;
        computerScore += 1;
        return 'Draw';
    }else {
        return 'Enter a valid play';
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound();
        console.log(`Player Score: ${playerScore} | Computer Score ${computerScore}`);
    
    }
}


let computerScore = 0;
let playerScore = 0;

game();