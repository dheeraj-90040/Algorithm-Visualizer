function Insertion() {
  // Set time complexities
  document.getElementById("Time_Worst").innerText = "O(N^2)";
  document.getElementById("Time_Average").innerText = "Θ(N^2)";
  document.getElementById("Time_Best").innerText = "Ω(N)";

  // Set space complexity
  document.getElementById("Space_Worst").innerText = "O(1)";

  c_delay = 0;

  for (var j = 0; j < array_size; j++) {
    div_update(bars[j], cont_sizes[j], "#fbbf24"); // Highlight current element

    var key = cont_sizes[j];
    var i = j - 1;

    // Shift elements of cont_sizes[0..i] that are greater than key
    while (i >= 0 && cont_sizes[i] > key) {
      div_update(bars[i], cont_sizes[i], "#ef4444"); // Highlight bar i
      div_update(bars[i + 1], cont_sizes[i + 1], "#ef4444"); // Highlight bar i+1

      // Shift the element
      cont_sizes[i + 1] = cont_sizes[i];

      div_update(bars[i], cont_sizes[i], "#ef4444"); // Update height of bar i
      div_update(bars[i + 1], cont_sizes[i + 1], "#ef4444"); // Update height of bar i+1

      div_update(bars[i], cont_sizes[i], "#4338ca"); // Revert color of bar i
      if (i == j - 1) {
        div_update(bars[i + 1], cont_sizes[i + 1], "#fbbf24"); // Highlight final position of the key
      } else {
        div_update(bars[i + 1], cont_sizes[i + 1], "#4338ca"); // Revert color of bar i+1
      }
      i -= 1;
    }

    cont_sizes[i + 1] = key; // Place key in its correct position

    // Mark elements sorted so far as green
    for (var t = 0; t < j; t++) {
      div_update(bars[t], cont_sizes[t], "#047857"); // Highlight sorted elements
    }
  }
  div_update(bars[j - 1], cont_sizes[j - 1], "#047857"); // Mark the last sorted element

  enable_buttons();
}
