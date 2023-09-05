console.log("Yo what up")

const rpsArray = ["rock", "paper", "scissors"]

function getComputerChoice(rpsArray) {
  return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}

let playerSelection = prompt("Choose rock, paper, or scissors.").toLowerCase();

function playRound(playerSelection, computerSelection) {

  console.log(playerSelection, computerSelection)
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (playerSelection == computerSelection) {
    return `It's a tie between ${playerSelection} and ${computerSelection}!`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  }
}

const computerSelection = getComputerChoice(rpsArray);
console.log(playRound(playerSelection, computerSelection));
