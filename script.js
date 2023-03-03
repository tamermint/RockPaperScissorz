//This program is a small game between computer and user - a game of rock,
//paper and scissors

//function to get computer's choice.
//Math.random() to generate a random number between 0 and 1 and then multiply by 
//length of choiceArr. Math.floor() will return nearest random integer
//randomItem to get index value from 0 to choiceArr.length

function getComputerChoice() {
    let choiceArr = ['Rock', 'Paper', 'Scissors'];
    const randomItem = Math.floor(Math.random() * choiceArr.length);
    const item = choiceArr[randomItem];
    return item;
}

//Let's keep two scores 
let playerScore = 0;
let computerScore = 0;


//now let's create a function that takes player's selection and pits it
//against computer's selection
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1); //to force the input format to be Rock or Paper or Scissors

    if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        // return "You Lose! Paper beats Rock";
        computerScore += 1;
        alert("This round goes to computer!");
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        // return "You Lose! Scissors beats Paper";
        computerScore += 1;
        alert("This round goes to computer!");
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        // return "You Lose! Rock beats Scissors";
        computerScore += 1;
        alert("This round goes to computer!");
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        // return "You Win! Scissors beats Paper!";
        playerScore += 1;
        alert("This round goes to player!");
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        // return "You Win! Rock beats Scissors!";
        playerScore += 1;
        alert("This round goes to player!");
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        // return "You Win! Paper beats Rock!";
        playerScore += 1;
        alert("This round goes to player!");
    }
}

function game() {
    
    const playerSelection = prompt("What's your choice?");
    const computerSelection = getComputerChoice();
    if(computerSelection === playerSelection) {
        getComputerChoice();
    }
    playRound(playerSelection, computerSelection);
    console.log(playerScore);
    console.log(computerScore);
    if (playerScore > computerScore) 
        alert("The Winner is Player!");
    else 
        alert("The Winner is Computer!");
    
}
console.log(game());