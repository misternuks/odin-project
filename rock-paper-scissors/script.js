
const rpsArray = ["rock", "paper", "scissors"];


function game() {

  let playerScore = 0;
  let computerScore = 0;
  let round = 0;

  while (round < 5) {
    function getComputerChoice(rpsArray) {
      return rpsArray[Math.floor(Math.random() * rpsArray.length)];
    }

    const computerSelection = getComputerChoice(rpsArray);

    let playerSelection = prompt("Choose rock, paper, or scissors.").toLowerCase();

    const playerWinMessage = `You win! ${playerSelection} beats ${computerSelection}!`;

    function playRound(playerSelection, computerSelection) {

      console.log(playerSelection, computerSelection)
      if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return playerWinMessage;
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return playerWinMessage;
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return playerWinMessage;
      } else if (playerSelection == computerSelection) {
        return `It's a tie between ${playerSelection} and ${computerSelection}!`;
      } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
      }
    }
    round++;
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore, computerScore);
  }
  console.log(`The final score is Player: ${ playerScore }, Computer: ${ computerScore }.`)
}
