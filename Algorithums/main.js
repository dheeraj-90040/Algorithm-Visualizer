// User inputs
const in_size = document.getElementById("a_size");
let array_size = parseInt(in_size.value, 10);
const array_speed = document.getElementById("a_speed");

// Buttons
const reset = document.getElementById("reset");
const btn_algos = document.querySelectorAll("#btn_algo"); // Changed to class selector

// Initialize containers
let cont_sizes = [];
let bars = [];
const margin_percent = 0.1; // Margin size percentage
let cont = document.getElementById("array_container");
cont.style = "flex-direction: row;";

// Event listeners
reset.addEventListener("click", generate_array);
in_size.addEventListener("input", updateArray);

function generate_array() {
  cont.innerHTML = ""; // Clear existing bars
  cont_sizes = [];
  bars = [];

  const containerHeight = cont.clientHeight; // Get container's pixel height

  // Regenerate the bars
  for (let i = 0; i < array_size; i++) {
    // Generate random heights scaled to the container height
    cont_sizes[i] = Math.floor(Math.random() * containerHeight * 0.9); // Up to 90% of the container height

    bars[i] = document.createElement("div"); // Create a new bar element
    cont.append(bars[i]);
    // Styling bar elements
    bars[i].style = `
      margin: 0% ${margin_percent}%;
      background-color: blue;
      width: ${100 / array_size - 2 * margin_percent}%;
      height: ${
        (cont_sizes[i] / containerHeight) * 100
      }%; /* Convert to percentage */
      border-radius: 0 0 2px 2px;
    `;
    // bars[].push(bar); // Push the bar to the bars array
    // cont.appendChild(bar); // Add the bar to the container
  }
}

// Function to update array size
function updateArray() {
  const sizeInput = parseInt(in_size.value, 10);
  array_size = sizeInput > 0 ? sizeInput : 10; // Default to 10 if input is invalid
  generate_array();
}

// On window load
window.onload = generate_array;

// Function to disable all buttons
function disable_buttons() {
  btn_algos.forEach((btn) => {
    btn.classList.remove("butt_selected");
    btn.classList.add("butt_locked");
    btn.disabled = true;
  });

  in_size.disabled = true;
  reset.disabled = true;
  array_speed.disabled = true;
}

// Function to run algorithms
function runalgo() {
  disable_buttons();

  this.classList.add("butt_selected");
  // const algorithm = this.dataset.algo; // Use data attributes for cleaner handling
  console.log(this.innerHTML);
  switch (this.innerHTML) {
    case "Bubble":
      Bubble();
      break;
    case "Selection":
      Selection_sort();
      break;
    case "Insertion":
      Insertion();
      break;
    case "Merge":
      Merge();
      break;
    case "Quick":
      Quick();
      break;
    case "Heap":
      Heap();
      break;
    default:
      console.error("Algorithm not implemented!");
  }
}

// Add event listeners to all algorithm buttons
btn_algos.forEach((btn) => {
  btn.addEventListener("click", runalgo);
});
