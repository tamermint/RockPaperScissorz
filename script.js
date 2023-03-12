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

function promptMessage(message) {
    var prompt = document.createElement("div");
    prompt.id = "win";
    prompt.innerHTML = message;
    prompt.style.display = "none";
    prompt.style.position = "fixed";
    prompt.style.top = "50%";
    prompt.style.left = "50%";
    prompt.style.Height = "500px";
    prompt.style.Width = "500px";
    prompt.style.fontSize = "1.5rem";
    prompt.style.textAlign = "center";
    prompt.style.transform = "translate(-50%, -50%)";
    prompt.style.backgroundColor = "rgba(19,77,102,0.9)";
    prompt.style.color = "snow";
    prompt.style.padding = "100px";
    prompt.style.border = "0 solid gold";
    prompt.style.borderRadius = "1000px";
    prompt.style.boxShadow = " 0 0 5px 5px gold";
    prompt.style.opacity = 0;
    prompt.style.transition = "opacity 0.5s ease-in-out";
    prompt.style.zIndex = 9999;

    document.body.appendChild(prompt);

    prompt.style.display = "block";

    setTimeout(function() {
        prompt.style.opacity = 1;
    }, 100);

    setTimeout(function() {
        prompt.style.opacity = 0;
    }, 2000);

    setTimeout(function() {
        document.body.removeChild(prompt);
    }, 2100);
}




//now let's create a function that takes player's selection and pits it
//against computer's selection
function playRound(e) {
    let playerSelection = e.target.textContent.slice(4, -1);
    console.log(`playerSelection is ${playerSelection}`);

    let computerSelection = getComputerChoice();
    console.log(`computerSelection is ${computerSelection}`);

    if(playerSelection === computerSelection) {
        promptMessage(`The halls of Asgard Rumble! What a clash of weapons!, play again! <br/>
        Javi: ${playerScore} \t            Jotun King: ${computerScore}`);        
    }

    if (playerSelection == 'Mjolnir' && computerSelection == 'Jotun Cloak') {
        computerScore += 1;
        promptMessage(`You Lose!, Jotun King wins this round! Come on Drengr! <br/>
        Javi: ${playerScore} \t            Jotun King: ${computerScore}`);
    }

    else if (playerSelection == 'Jotun Cloak' && computerSelection == 'Excalibur') {
        computerScore += 1;
        promptMessage(`You Lose!, Jotun King wins this round! Come on Drengr! <br/>
        Javi: ${playerScore} \t            Jotun King: ${computerScore}`);
    }

    else if (playerSelection == 'Excalibur' && computerSelection == 'Mjolnir') {
        computerScore += 1;
        promptMessage(`You Lose!, Jotun King wins this round! Come on Drengr! <br/>
        Javi: ${playerScore} \t            Jotun King: ${computerScore}`);
    }

    else if (playerSelection == 'Excalibur' && computerSelection == 'Jotun Cloak') {
        playerScore += 1;
        promptMessage(`You Win this round!, Jotun King is cowering in fear! <br/>
        Javi: ${playerScore} \t            Jotun King: ${computerScore}`);
    }

    else if (playerSelection == 'Mjolnir' && computerSelection == 'Excalibur') {
        playerScore += 1;
        promptMessage(`You Win this round!, Jotun King is cowering in fear! <br/>
        Javi: ${playerScore} \t            Jotun King: ${computerScore}`);
    }

    else if (playerSelection == 'Jotun Cloak' && computerSelection == 'Mjolnir') {
        playerScore += 1;
        promptMessage(`You Win this round!, Jotun King is cowering in fear! <br/>
        Javi: ${playerScore} \t            Jotun King: ${computerScore}`);
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

