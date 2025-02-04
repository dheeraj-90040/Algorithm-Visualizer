function Merge() {
  // Set time complexities
  document.getElementById("Time_Worst").innerText = "O(N log N)";
  document.getElementById("Time_Average").innerText = "Θ(N log N)";
  document.getElementById("Time_Best").innerText = "Ω(N log N)";

  // Set space complexity
  document.getElementById("Space_Worst").innerText = "O(N)";

  c_delay = 0;

  // Start the merge partition process
  merge_partition(0, array_size - 1);

  enable_buttons();
}

function merge_sort(start, mid, end) {
  var p = start,
    q = mid + 1;

  var Arr = [],
    k = 0;

  // Merge the two subarrays
  for (var i = start; i <= end; i++) {
    // If both pointers are within bounds, highlight them as "comparing" (yellow)
    if (p <= mid && q <= end) {
      div_update(bars[p], cont_sizes[p], "#fbbf24"); // comparing left element
      div_update(bars[q], cont_sizes[q], "#fbbf24"); // comparing right element
    }

    if (p > mid) {
      Arr[k++] = cont_sizes[q++];
      // Mark the chosen element as "selecting" (red)
      div_update(bars[q - 1], cont_sizes[q - 1], "#ef4444");
    } else if (q > end) {
      Arr[k++] = cont_sizes[p++];
      div_update(bars[p - 1], cont_sizes[p - 1], "#ef4444");
    } else if (cont_sizes[p] < cont_sizes[q]) {
      Arr[k++] = cont_sizes[p++];
      div_update(bars[p - 1], cont_sizes[p - 1], "#ef4444");
    } else {
      Arr[k++] = cont_sizes[q++];
      div_update(bars[q - 1], cont_sizes[q - 1], "#ef4444");
    }
  }

  // Write the sorted merged subarray back and mark them as "sorted" (green)
  for (var t = 0; t < k; t++) {
    cont_sizes[start++] = Arr[t];
    div_update(bars[start - 1], cont_sizes[start - 1], "#047857");
  }
}

function merge_partition(start, end) {
  if (start < end) {
    var mid = Math.floor((start + end) / 2);
    // You can view the midpoint highlight as a "comparing" step (yellow)
    div_update(bars[mid], cont_sizes[mid], "#fbbf24");

    // Recursively partition the array
    merge_partition(start, mid);
    merge_partition(mid + 1, end);

    // Merge the two sorted subarrays
    merge_sort(start, mid, end);
  }
}
