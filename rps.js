function getComputerChoice(){

    let choices = ["rock", "paper","scissors"];
    let choicesRand = Math.floor(Math.random() * choices.length);
    return choices[choicesRand];

    
}


function gamePlay (playerSelection, computerSelection) {

    let validChoice = ["rock", "paper","scissors"];
    if (!validChoice.includes(playerSelection)){
        return "invalid choice";

    }

     playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return "tie";
    } else if (

        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper"
        
    ){
        return `You lose. ${playerSelection} beats ${computerSelection}`;
    } else {

        return `You win. ${computerSelection} beats ${playerSelection}`

        
    }


}

function game(){


    let computerScore = 0;
    let playerScore = 0;
    

    for (let i = 0; i < 5; i++){

        let playerSelection = prompt("WHATS YOUR CHOICE?", " ");
        let computerSelection = getComputerChoice();

        let result = gamePlay(playerSelection, computerSelection)
        console.log(result);

        if (result.startsWith("You win")){
            playerScore++;
        } else if (result.startsWith("You lose")){
            computerScore++;
        }
    

        
            
    
    
    }
        


    

    

    if (computerScore > playerScore){
        console.log(`You lost! ${computerScore} - ${playerScore}`);
    } else if (playerScore > computerScore){
        console.log(`You win! ${playerScore} - ${computerScore}`);
    } else {
        console.log("tie");
    }

    
}

game();