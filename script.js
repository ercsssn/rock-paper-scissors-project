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

function game() {
    let round = 1;
    for (let i = 0; i < 5; i++) {
        let input = prompt('Which hand sign will you play?\n Rock, Paper, Scissors?');
        const player = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
        const computer = computerPlay();
        console.log(`Round ${round} ` + playRound(player, computer));
        round++;
     }
}

playerScore = 0;
computerScore = 0;

game();

console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`)

if (playerScore > computerScore) {
    console.log('Victory! Player Wins!');
}else if (computerScore > playerScore) {
    console.log('Defeat .. Computer Wins');
}else if (playerScore === computerScore) {
    console.log('Draw');
}

