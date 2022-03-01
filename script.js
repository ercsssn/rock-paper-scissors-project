function computerPlay() {
    const handSigns = ['Rock','Paper','Scissors']; 
    let randomHandSign = Math.floor(Math.random() * handSigns.length);
    return handSigns[randomHandSign];
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You Win! Rock beats Scissors'; 
    }else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You Win! Paper beats Rock'; 
    }else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You Win! Scissors beats Paper';
    }else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You Lose! Paper beats Rock';
    }else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You Lose! Scissors beats Paper';
    }else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You Lose! Rock beats Scissors';
    }else if (playerSelection === computerSelection){
        return 'Draw';
    }else {
        return 'Enter a valid play';
    }
}

let input = prompt('Which hand sign will you play?\n Rock, Paper, Scissors? ');
const playerSelection = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
const computerSelection = computerPlay();
