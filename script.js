//This program is a small game between Havi and Jotun King - a game of choosing
//the right weapon

//function to get computer's choice.
//Math.random() to generate a random number between 0 and 1 and then multiply by 
//length of choiceArr. Math.floor() will return nearest random integer
//randomItem to get index value from 0 to choiceArr.length

function getComputerChoice() {
    let choiceArr = ['Mjolnir', 'Jotun Cloak', 'Excalibur'];
    const randomItem = Math.floor(Math.random() * choiceArr.length);
    const item = choiceArr[randomItem];
    return item;
}


//Let's keep two scores 
let playerScore = 0;
let computerScore = 0;

//let's add event listener to each of our buttons

let pressedButton = document.getElementsByTagName('button');

for (let i = 0; i < pressedButton.length; i++) {
    pressedButton[i].addEventListener('click', playRound);
}



//now let's create a function that takes player's selection and pits it
//against computer's selection
function playRound(e) {
    let playerSelection = e.target.textContent.slice(4, -1);
    console.log(`playerSelection is ${playerSelection}`);

    let computerSelection = getComputerChoice();
    console.log(`computerSelection is ${computerSelection}`);

    if(playerSelection === computerSelection) {
        var div = document.createElement("div");
        div.textContent = "The halls of Asgard Rumble! What a clash of weapons!"
        
    }

    if (playerSelection == 'Mjolnir' && computerSelection == 'Jotun Cloak') {
        // return "You Lose! Paper beats Rock";
        computerScore += 1;
        var div = document.createElement("div");
        div.textContent = "You Lose!, Jotun King wins this round!Come on Drengr!";
        console.log(div);
        
    }
    else if (playerSelection == 'Jotun Cloak' && computerSelection == 'Excalibur') {
        // return "You Lose! Scissors beats Paper";
        computerScore += 1;
        var div = document.createElement("div");
        div.textContent = "You Lose!, Jotun King wins this round!Come on Drengr!";
    }
    else if (playerSelection == 'Excalibur' && computerSelection == 'Mjolnir') {
        // return "You Lose! Rock beats Scissors";
        computerScore += 1;
        var div = document.createElement("div");
        div.textContent = "You Lose!, Jotun King wins this round!Come on Drengr!";
    }
    else if (playerSelection == 'Excalibur' && computerSelection == 'Jotun Cloak') {
        // return "You Win! Scissors beats Paper!";
        playerScore += 1;
        var div = document.createElement("div");
        div.textContent = "You Win this round!, Jotun King is cowering in fear!";
    }
    else if (playerSelection == 'Mjolnir' && computerSelection == 'Excalibur') {
        // return "You Win! Rock beats Scissors!";
        playerScore += 1;
        var div = document.createElement("div");
        div.textContent = "You Win this round!, Jotun King is cowering in fear!";
    }
    else if (playerSelection == 'Jotun Cloak' && computerSelection == 'Mjolnir') {
        // return "You Win! Paper beats Rock!";
        playerScore += 1;
        var div = document.createElement("div");
        div.textContent = "You Win this round!, Jotun King is cowering in fear!";
    }
}
/*
function game() {

    Here, we need to create a variable score and tally it with player 
    and computer score, whoever reaches the first point
    a div states that "Game over! <> Wins!"
    
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
console.log(game()); */

