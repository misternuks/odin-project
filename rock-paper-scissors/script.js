const choices = ["rock", "paper", "scissors"];
const rounds = 5;

// Get the computer's RPS throw
let getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

// Get the human's RPS throw via prompt with loop to force correct answer
function getHumanChoice() {
  let humanAnswer = prompt("Choose rock, paper, or scissors").toLowerCase();
  while (!choices.includes(humanAnswer)) {
    humanAnswer = prompt("Try again: choose rock, paper, or scissors.");
  }
  return humanAnswer;
}

// Determine the result of one round
function determineWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) return "tie";

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (computerChoice === winConditions[humanChoice]) {
    return "human";
  } else {
    return "computer";
  }
}

// Display the result of the round
function displayRoundResult(humanChoice, computerChoice, result) {
  console.log(`You chose ${humanChoice}`);
  console.log(`The computer chose ${computerChoice}`);

  if (result === "human") {
    console.log(`You win the round: ${humanChoice} beats ${computerChoice}!`)
  } else if (result === "computer") {
    console.log(`You lose this round: ${computerChoice} beats ${humanChoice}.`)
  } else {
    console.log ("This round is a tie.")
  }
}

// Play the game
function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  for (i = 0; i < rounds; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = determineWinner(humanChoice, computerChoice);

    displayRoundResult(humanChoice, computerChoice, result);

    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++
    }
  }

  displayFinalResult(humanScore, computerScore);
}

// Display the final game result
function displayFinalResult(humanScore, computerScore) {
  console.log(`Final score: ${humanScore} to ${computerScore}.`);

  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("The computer wins the game.");
  } else {
    console.log("The game was a tie.")
  }
}

// Play the game
playGame();
