const computerOptins = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * 3);
    
    return computerOptins[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Play again';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        return "You Lose! Paper bats Rock.";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return "You Lose! Scissors bats Paper.";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return "You Lose! Rock bats Scissors.";
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return "You Win! Paper bats Rock.";
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return "You Win! Scissors bats Paper.";
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return "You Win! Rock bats Scissors.";
    } else {
        return 'Bad input';
    }  
  }
  
  let playerSelection = 'rock';
  
  function game() {
      for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
      }
        if (playerScore > computerScore) {
            console.log("You Win Game!");
        } else if (playerScore < computerScore) {
            console.log("You Lost Game!");
        } else {
            console.log("Tie!");
        }  
  }
    console.log(game());