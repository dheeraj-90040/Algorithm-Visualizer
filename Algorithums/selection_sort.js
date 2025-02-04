function Selection_sort() {
  // Set time complexities
  document.getElementById("Time_Worst").innerText = "O(N^2)";
  document.getElementById("Time_Average").innerText = "Θ(N^2)";
  document.getElementById("Time_Best").innerText = "Ω(N^2)";

  // Set space complexity
  document.getElementById("Space_Worst").innerText = "O(1)";

  // Initialize delay
  c_delay = 0;

  // Perform Selection Sort
  for (let i = 0; i < array_size - 1; i++) {
    div_update(bars[i], cont_sizes[i], "#ef4444"); // Highlight current element

    let index_min = i;

    for (let j = i + 1; j < array_size; j++) {
      div_update(bars[j], cont_sizes[j], "#fbbf24"); // Highlight element being compared

      if (cont_sizes[j] < cont_sizes[index_min]) {
        if (index_min !== i) {
          div_update(bars[index_min], cont_sizes[index_min], "#4338ca"); // Revert color of previous min
        }
        index_min = j;
        div_update(bars[index_min], cont_sizes[index_min], "#ef4444"); // Highlight new min
      } else {
        div_update(bars[j], cont_sizes[j], "#4338ca"); // Revert color of compared element
      }
    }

    if (index_min !== i) {
      // Swap the elements
      let temp = cont_sizes[index_min];
      cont_sizes[index_min] = cont_sizes[i];
      cont_sizes[i] = temp;

      // Update the heights and colors after swap
      div_update(bars[index_min], cont_sizes[index_min], "#ef4444");
      div_update(bars[i], cont_sizes[i], "#ef4444");
      div_update(bars[index_min], cont_sizes[index_min], "#4338ca");
    }

    div_update(bars[i], cont_sizes[i], "#047857"); // Mark the sorted element
  }

  // Mark the last element as sorted ("green")
  div_update(bars[array_size - 1], cont_sizes[array_size - 1], "#047857");

  // Re-enable buttons after sorting is complete
  enable_buttons();
}
