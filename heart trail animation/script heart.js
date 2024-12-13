const bodyEl = document.querySelector(".heart-animation-area");
let heartCount = 0; // Counter for hearts created
let isMouseDown = false; // Track if mouse is held down

// Event listener for mouse down
bodyEl.addEventListener("mousedown", (event) => {
    if (event.button === 0) { // Check if left mouse button is clicked
        isMouseDown = true; // Set mouse down state to true
        createHeart(event); // Create a heart immediately
    }
});

// Event listener for mouse move
bodyEl.addEventListener("mousemove", (event) => {
    if (isMouseDown) { // Only create hearts if mouse is held down
        createHeart(event);
    }
});

// Event listener for mouse up
bodyEl.addEventListener("mouseup", () => {
    isMouseDown = false; // Reset mouse down state
});

// Function to create a heart
function createHeart(event) {
    const xPos = event.offsetX; // Get x position of mouse
    const yPos = event.offsetY; // Get y position of mouse
    const spanEl = document.createElement("span"); // Create a new span for the heart
    spanEl.style.left = xPos + "px"; // Set position
    spanEl.style.top = yPos + "px";
    
    // Random size for the heart
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    // Random color effect
    const randomHue = Math.floor(Math.random() * 360);
    spanEl.style.filter = `hue-rotate(${randomHue}deg)`;

    bodyEl.appendChild(spanEl); // Add heart to the body
    heartCount++; // Increment heart count
    updateCounter(); // Update the heart counter

    // Remove heart after 3 seconds
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
}

// Function to update the heart counter
function updateCounter() {
    let counterEl = document.querySelector(".counter");
    if (!counterEl) {
        counterEl = document.createElement("div");
        counterEl.className = "counter";
        bodyEl.appendChild(counterEl);
    }
    counterEl.innerText = `Hearts Created: ${heartCount}`; // Update counter text
}
