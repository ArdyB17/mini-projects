
// Select all the buttons on the page
const buttons = document.querySelectorAll("button");

// Get the elements with the IDs "result", "user-score", and "computer-score"
// and store them in the variables resultEl, playerScoreEl, and computerScoreEl respectively 
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

// Initialize the player and computer scores to 0
let playerScore = 0;
let computerScore = 0;


// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Call the playRound function with the button's ID and the result of computerPlay as arguments
    const result = playRound(button.id, computerPlay());
    // Update the result element with the result of the round
    resultEl.textContent = result;
  });
});


// Function to randomly select one of the three choices ("rock", "paper", or "scissors")
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}   

// Function to determine the result of a round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    // If it's a tie, return a message indicating the tie
    return "Well, it's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    // If the player wins, increment the player score, update the player score element,
    //  and return a message indicating the win
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    // If the computer wins, increment the computer score, update the computer score element, 
    // and return a message indicating the loss
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}