// Grab the roll button element from HTML
const buttonEl = document.getElementById("roll-button");

// Grab the dice element from HTML
const diceEl = document.getElementById("dice");

// Grab the roll history element from HTML
const rollHistoryEl = document.getElementById("roll-history");

// Make an empty array to store roll history
let historyList = [];

// Function to roll the dice
function rollDice() {
    // Dice roll result, random number from 1 to 6
    const rollResult = Math.floor(Math.random() * 6) + 1;
    // Get the dice face based on roll result
    const diceFace = getDiceFace(rollResult);
    // Show the dice face in the dice element
    diceEl.innerHTML = diceFace;
    // Add the roll result to the history
    historyList.push(rollResult);
    // Update the roll history display
    updateRollHistory();
}

// Function to update the roll history display
function updateRollHistory() {
    // Clear the roll history element
    rollHistoryEl.innerHTML = "";
    // Loop through all roll results in historyList
    for (let i = 0; i < historyList.length; i++) {
        // Make a new list item element
        const listItem = document.createElement("li");
        // Fill the list item with the roll result
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
        // Add the list item to the roll history element
        rollHistoryEl.appendChild(listItem);
    }
}

// Function to get the dice face based on roll result
function getDiceFace(rollResult) {
    // Check the roll result and return the matching dice face
    switch (rollResult) {
        case 1:
            return "&#9856;"; // Dice face for number 1
        case 2:
            return "&#9857;"; // Dice face for number 2
        case 3:
            return "&#9858;"; // Dice face for number 3
        case 4:
            return "&#9859;"; // Dice face for number 4
        case 5:
            return "&#9860;"; // Dice face for number 5
        case 6:
            return "&#9861;"; // Dice face for number 6
        default:
            return ""; // If no match, return empty string
    }
}

// Add event listener to the roll button
buttonEl.addEventListener("click", () => {
    // Add animation class to the dice element
    diceEl.classList.add("roll-animation");
    // Remove animation class after 1 second
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        // Roll the dice after animation ends
        rollDice();
    }, 1000);
});