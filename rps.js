function getComputerChoice(){

    let choices = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * 1000);
    return choices[randomIndex];

}

function playRound(playerSelection, computerSelection) {


    let validChoices = ["rock", "paper", "scissors"];
    
    if (!validChoices.includes(playerSelection)){
        return "Invalid choice"
    }




   if (!playerSelection) {
    return "Invalid input. Please choose rock, paper, or scissors.";
  }
    
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {

    return "tie";
        
    } else if (


        playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper" ){
        return `You win ${playerSelection} beat ${computerSelection}`;
    } else {
        return `You win ${computerSelection} beat ${playerSelection}`;
        
    } 
    
}



function game() {

    let gameScore = 0;
    let playerScore = 0;


    for (let i = 0; i < 5; i++){ 

        let playerSelection = prompt("Choose rock, paper, or scissors");
        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.startsWith("You Win!")) {
          playerScore++;
        } else if (result.startsWith("You Lose!")) {
          computerScore++;
        }


        
    }

    if (playerScore > gameScore) {
        console.log(`You win. (${playerScore} - ${computerScore})`);
      } else if (gameScore > playerScore) {
        console.log(`You lose. (${playerScore} - ${computerScore})`);
      } else {
        console.log(`It's a tie. (${playerScore} - ${computerScore})`);
      }
      

    
}


game();