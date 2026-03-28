function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3) + 1
    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else if (choice === 3) {
        return 'scissors';
    }
}

function getHumanChoice(){
    choice = prompt("rock, paper or scissors?");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // humanChoice = humanChoice.toLowercase()
    if (humanChoice === 'rock'){
        if (computerChoice === 'rock') {
            console.log('It\'s a tie');
        } else if (computerChoice === 'paper') {
            console.log('You lose');
            computerScore ++;
        } else {
            console.log('You win')
            humanScore ++;
        }
    } else if (humanChoice === 'paper'){
        if (computerChoice === 'rock') {
            console.log('You win');
            humanScore ++;
        } else if (computerChoice === 'paper') {
            console.log('It\'s a tie');
        } else {
            console.log('You lose')
            computerScore ++;
        }
    } else if (humanChoice === 'scissors' ) {
        if (computerChoice === 'rock') {
            console.log('You lose');
            computerScore ++;
        } else if (computerChoice === 'paper') {
            console.log('You win');
            humanScore ++;
        } else {
            console.log('It\'s a tie.')
        }
    }
}



function playGame() {
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        playRound(humanSelection, computerSelection)
    }

    console.log('Human score is: ', humanScore)
    console.log('Computer score is: ', computerScore)

    if (humanScore > computerScore){
        console.log('You win')
    } else if (humanScore < computerScore) {
        console.log('You lose')
    } else {
        console.log('It\'s a tie')
    }
}

playGame();