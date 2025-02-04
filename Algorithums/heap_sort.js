function Heap() {
  // Set time complexities
  document.getElementById("Time_Worst").innerText = "O(N log N)";
  document.getElementById("Time_Average").innerText = "Θ(N log N)";
  document.getElementById("Time_Best").innerText = "Ω(N log N)";

  // Set space complexity
  document.getElementById("Space_Worst").innerText = "O(1)";

  c_delay = 0;

  heap_sort();

  enable_buttons();
}

function swap(i, j) {
  div_update(bars[i], cont_sizes[i], "#ef4444"); // Highlight bars[i]
  div_update(bars[j], cont_sizes[j], "#ef4444"); // Highlight bars[j]

  // Swap the heights
  var temp = cont_sizes[i];
  cont_sizes[i] = cont_sizes[j];
  cont_sizes[j] = temp;

  // Update heights after swap
  div_update(bars[i], cont_sizes[i], "#ef4444");
  div_update(bars[j], cont_sizes[j], "#ef4444");

  // Revert the colors to "blue"
  div_update(bars[i], cont_sizes[i], "#4338ca");
  div_update(bars[j], cont_sizes[j], "#4338ca");
}

function max_heapify(n, i) {
  var largest = i;
  var l = 2 * i + 1;
  var r = 2 * i + 2;

  // Compare left child with largest
  if (l < n && cont_sizes[l] > cont_sizes[largest]) {
    if (largest !== i) {
      div_update(bars[largest], cont_sizes[largest], "#4338ca"); // Revert previous largest
    }

    largest = l;
    div_update(bars[largest], cont_sizes[largest], "#ef4444"); // Highlight new largest
  }

  // Compare right child with largest
  if (r < n && cont_sizes[r] > cont_sizes[largest]) {
    if (largest !== i) {
      div_update(bars[largest], cont_sizes[largest], "#4338ca"); // Revert previous largest
    }

    largest = r;
    div_update(bars[largest], cont_sizes[largest], "#ef4444"); // Highlight new largest
  }

  // If largest is not the root, swap and heapify
  if (largest !== i) {
    swap(i, largest);
    max_heapify(n, largest);
  }
}

function heap_sort() {
  // Build the max heap
  for (var i = Math.floor(array_size / 2) - 1; i >= 0; i--) {
    max_heapify(array_size, i);
  }

  // Extract elements from heap
  for (var i = array_size - 1; i > 0; i--) {
    swap(0, i);
    div_update(bars[i], cont_sizes[i], "#047857"); // Mark the element as sorted
    div_update(bars[i], cont_sizes[i], "#fbbf24"); // Temporary color for sorted element

    max_heapify(i, 0); // Heapify the reduced heap

    div_update(bars[i], cont_sizes[i], "#4338ca"); // Revert sorted element color
    div_update(bars[i], cont_sizes[i], "#047857"); // Mark the element as sorted
  }

  // Final element marked as sorted
  div_update(bars[0], cont_sizes[0], "#047857");
}
