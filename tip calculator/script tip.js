const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
  const billValue = parseFloat(billInput.value); // Convert bill value to a number
  const tipValue = parseFloat(tipInput.value); // Convert tip value to a number
  
  // Ensure both values are valid numbers before calculation
  if (isNaN(billValue) || isNaN(tipValue)) {
    alert("Please enter valid numbers for bill amount and tip percentage.");
    return; // Exit the function if values are not numbers
  }

  const totalValue = billValue * (1 + tipValue / 100);
  totalSpan.innerText = totalValue.toFixed(2); // Display total with 2 decimal places
}

btnEl.addEventListener("click", calculateTotal);
