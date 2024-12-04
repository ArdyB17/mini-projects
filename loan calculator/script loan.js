document.getElementById("calculate-btn").addEventListener("click", calculateLoan);
document.getElementById("reset-btn").addEventListener("click", resetForm);

function calculateLoan() {
    const loanAmountValue = parseFloat(document.getElementById("loan-amount").value);
    const interestRateValue = parseFloat(document.getElementById("interest-rate").value);
    const monthsValue = parseInt(document.getElementById("months-to-pay").value);

    // Validate inputs
    if (isNaN(loanAmountValue) || isNaN(interestRateValue) || isNaN(monthsValue)) {
        alert("Please enter valid numbers.");
        return;
    }

    const interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsValue;
    const monthlyPayment = (loanAmountValue / monthsValue + interest).toFixed(2);
    const totalInterest = (interest * monthsValue).toFixed(2);

    document.getElementById("monthly-payment").innerHTML = monthlyPayment;
    document.getElementById("total-interest").innerHTML = totalInterest;

    // Animate results
    animateResults();
}


function resetForm() {
    document.getElementById("loan-form").reset();
    document.getElementById("monthly-payment").innerHTML = "0.00";
    document.getElementById("total-interest").innerHTML = "0.00";
}


function animateResults() {
    const paymentElement = document.getElementById("monthly-payment");
    const totalInterestElement = document.getElementById("total-interest");

    paymentElement.classList.add("fade-in");
    totalInterestElement.classList.add("fade-in");

    setTimeout(() => {
        paymentElement.classList.remove("fade-in");
        totalInterestElement.classList.remove("fade-in");
    }, 1000);
}

// CSS for fade-in animation
const style = document.createElement('style');
style.innerHTML = `
.fade-in {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}
.fade-in.show {
    opacity: 1;
}
`;
document.head.appendChild(style);
