function Quick() {
  // Setting time complexities
  document.getElementById("Time_Worst").innerText = "O(N^2)";
  document.getElementById("Time_Average").innerText = "Θ(N log N)";
  document.getElementById("Time_Best").innerText = "Ω(N log N)";

  // Setting space complexity
  document.getElementById("Space_Worst").innerText = "O(log N)";

  c_delay = 0;

  // Start the quick sort process
  quick_sort(0, array_size - 1);

  enable_buttons();
}

function quick_partition(start, end) {
  var i = start + 1;
  var pivot = cont_sizes[start]; // Choose the first element as the pivot
  div_update(bars[start], cont_sizes[start], "#fbbf24"); // Color update to indicate pivot

  // Re-arrange the array by putting elements smaller than pivot on one side, and larger on the other side
  for (var j = start + 1; j <= end; j++) {
    if (cont_sizes[j] < pivot) {
      div_update(bars[j], cont_sizes[j], "#fbbf24"); // Highlight current element

      div_update(bars[i], cont_sizes[i], "#ef4444"); // Highlight element at i
      div_update(bars[j], cont_sizes[j], "#ef4444"); // Highlight current element at j

      // Swap elements
      var temp = cont_sizes[i];
      cont_sizes[i] = cont_sizes[j];
      cont_sizes[j] = temp;

      // Update bar heights after swap
      div_update(bars[i], cont_sizes[i], "#ef4444");
      div_update(bars[j], cont_sizes[j], "#ef4444");

      div_update(bars[i], cont_sizes[i], "#4338ca"); // Reset color after processing
      div_update(bars[j], cont_sizes[j], "#4338ca");

      i += 1;
    }
  }

  // Put pivot in its correct position
  div_update(bars[start], cont_sizes[start], "#ef4444"); // Color update to indicate pivot placement
  div_update(bars[i - 1], cont_sizes[i - 1], "#ef4444"); // Highlight the element to be swapped with pivot

  var temp = cont_sizes[start];
  cont_sizes[start] = cont_sizes[i - 1];
  cont_sizes[i - 1] = temp;

  div_update(bars[start], cont_sizes[start], "#ef4444"); // Update height of pivot
  div_update(bars[i - 1], cont_sizes[i - 1], "#ef4444"); // Update height of swapped element

  // Mark the elements as sorted (green)
  for (var t = start; t <= i - 1; t++) {
    div_update(bars[t], cont_sizes[t], "#047857");
  }

  return i - 1; // Return the pivot position
}

function quick_sort(start, end) {
  if (start < end) {
    // Store the position of pivot element
    var pivot_pos = quick_partition(start, end);

    // Recursively sort the left and right subarrays
    quick_sort(start, pivot_pos - 1); // Sort the left side of the pivot
    quick_sort(pivot_pos + 1, end); // Sort the right side of the pivot
  }
}
