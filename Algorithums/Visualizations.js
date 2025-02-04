// Variables
let speed = 1000;

// Event listener for speed adjustment
array_speed.addEventListener("input", updateSpeed);

// Function to adjust visualization speed
function updateSpeed() {
  const speedValue = parseInt(array_speed.value); // Corrected the reference here

  switch (speedValue) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
    default:
      speed = 1000; // Default speed
  }

  // Adjust delay based on speed
  delay_time = 10000 / (Math.floor(array_size / 10) * speed);
}

// Delay variables
let delay_time = 10000 / (Math.floor(array_size / 10) * speed); // Calculate delay dynamically
let c_delay = 0; // Tracks current delay for each visualization step

// Function to update a div's style during visualization
function div_update(cont, height, color) {
  window.setTimeout(function () {
    // Get the container's height (excluding padding)
    const containerHeight = cont.parentElement.clientHeight;

    // Calculate the width considering the margin and ensure it fits within bounds
    const barWidth = 100 / array_size - 2 * margin_percent;

    // Ensure the height doesn't exceed the container height (stay within bounds)
    const barHeight = Math.min(height, containerHeight); // Make sure height is within the container

    cont.style = `
        margin: 0% ${margin_percent}%;
        width: ${barWidth}%;
        height: ${barHeight}px; /* Use pixel value directly */
        background-color: ${color};
        border-radius: 0 0 2px 2px;
      `;
  }, (c_delay += delay_time));
}

// Function to re-enable buttons after visualization
function enable_buttons() {
  window.setTimeout(() => {
    butts_algos.forEach((button) => {
      button.classList.remove("butt_locked");
      button.classList.add("butt_unselected"); // Corrected: only removing and adding specific classes
      button.disabled = false;
    });

    inp_as.disabled = false;
    inp_gen.disabled = false;
    inp_aspeed.disabled = false;
  }, (c_delay += delay_time));
}
