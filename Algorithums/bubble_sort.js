function Bubble() {
  // Set time complexities
  document.getElementById("Time_Worst").innerText = "O(N^2)";
  document.getElementById("Time_Average").innerText = "Θ(N^2)";
  document.getElementById("Time_Best").innerText = "Ω(N)";

  // Set space complexity
  document.getElementById("Space_Worst").innerText = "O(1)";

  // Initialize delay
  c_delay = 0;

  // Perform Bubble Sort
  for (let i = 0; i < array_size - 1; i++) {
    for (let j = 0; j < array_size - i - 1; j++) {
      // Highlight the elements being compared
      div_update(bars[j], cont_sizes[j], "#fbbf24");

      // Swap if elements are out of order
      if (cont_sizes[j] > cont_sizes[j + 1]) {
        div_update(bars[j], cont_sizes[j], "#ef4444"); // Highlight for swapping
        div_update(bars[j + 1], cont_sizes[j + 1], "#ef4444");

        // Swap the heights
        let temp = cont_sizes[j];
        cont_sizes[j] = cont_sizes[j + 1];
        cont_sizes[j + 1] = temp;

        // Update heights after swapping
        div_update(bars[j], cont_sizes[j], "#ef4444");
        div_update(bars[j + 1], cont_sizes[j + 1], "#ef4444");
      }

      // Revert the color to "blue" after comparison
      div_update(bars[j], cont_sizes[j], "#4338ca");
    }

    // Mark the last sorted element as "green"
    div_update(
      bars[array_size - i - 1],
      cont_sizes[array_size - i - 1],
      "#047857"
    );
  }

  // Mark the first element as sorted ("green")
  div_update(bars[0], cont_sizes[0], "#00b894");

  // Re-enable buttons after sorting is complete
  enable_buttons();
}
