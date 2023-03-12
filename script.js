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
function playRound(e, playerScore, computerScore) {
    
    let playerSelection = e.target.textContent.slice(4, -1);
    let computerSelection = getComputerChoice();

    if(playerSelection === computerSelection) {
        promptMessage(`The halls of Asgard Rumble! What a clash of weapons!, play again! <br/>
        Javi: ${playerScore} \t            Jotun King: ${computerScore}`);        
    } else if (
        (playerSelection == 'Mjolnir' && computerSelection == 'Jotun Cloak') ||
        (playerSelection == 'Jotun Cloak' && computerSelection == 'Excalibur') ||
        (playerSelection == 'Excalibur' && computerSelection == 'Mjolnir')
        ){
            computerScore += 1;
            promptMessage(`You Lose!, Jotun King wins this round! Come on Drengr! <br/>
            Javi: ${playerScore} \t            Jotun King: ${computerScore}`);
    } else {
        playerScore += 1;
        promptMessage(`You Win this round!, Jotun King is cowering in fear! <br/>
        Javi: ${playerScore} \t            Jotun King: ${computerScore}`);
    }
    return [playerScore, computerScore];
}

function game() {
    let finalScore = 5;            //to keep track of final score
    let playerScore = 0;
    let computerScore = 0;

    let pressedButton = document.getElementsByTagName('button');

    for (let i = 0; i < pressedButton.length; i++) {
        pressedButton[i].addEventListener('click', function(e) {           //The parameteres are being passed into the playRound now
            [playerScore, computerScore] = playRound(e, playerScore, computerScore);
            if (playerScore == finalScore) {
                promptMessage(`You won the battle and closed the chasm!
                Javi: ${playerScore} \t            Jotun King: ${computerScore}`);
            } else if (computerScore == finalScore) {
                promptMessage(`You Lost! The Old Gods are coming down!
                Javi: ${playerScore} \t            Jotun King: ${computerScore}`);
            }
        });
    }
}     
game();