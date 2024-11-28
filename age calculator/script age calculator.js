// Get references to the button, input, and result elements
const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");
const ageEl = document.getElementById("age");
const resetBtn = document.getElementById("resetBtn");
const funFactsList = document.getElementById("funFactsList");

// Function to calculate age based on user input
function calculateAge() {
    const birthdayValue = birthdayEl.value; // Get the user's birthday input
    if (birthdayValue === "") {
        alert("Please enter your birthday"); // Alert if no date is entered
    } else {
        const age = getAge(birthdayValue); // Calculate age
        ageEl.innerText = age; // Display age
        resultEl.classList.add("show"); // Show the result
        resetBtn.classList.remove("hidden"); // Show reset button
        generateFunFacts(age); // Generate fun facts
    }
}

// Function to calculate age accurately
function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }

    return age; // Return the calculated age
}

// Function to generate fun facts based on age
function generateFunFacts(age) {
    const facts = [
        `You've been vibin' for about ${age * 365} days! That's a whole lotta sunsets! 🌅`,
        `You've lived through ${age * 12} months of pure chaos! 🌀`,
        `You've seen ${age * 52} weekends! Time to party! 🎉`,
        `You were born in the same year as some epic moments! 🎊`,
        `You've cruised through ${Math.floor(age / 10)} decades! That's legendary! 🚀`
    ];

    // Clear previous facts
    funFactsList.innerHTML = "";

    // Add facts to the list
    facts.forEach(fact => {
        const li = document.createElement("li");
        li.textContent = fact;
        funFactsList.appendChild(li);
    });

    // Show fun facts section
    document.querySelector('.fun-facts').classList.remove('hidden');
}

// Function to reset the form
function resetForm() {
    birthdayEl.value = ""; // Clear the input
    resultEl.classList.remove("show"); // Hide the result
    resetBtn.classList.add("hidden"); // Hide reset button
    funFactsList.innerHTML = ""; // Clear fun facts
    document.querySelector('.fun-facts').classList.add('hidden'); // Hide fun facts section
}

// Add event listeners
btnEl.addEventListener("click", calculateAge);
resetBtn.addEventListener("click", resetForm);
