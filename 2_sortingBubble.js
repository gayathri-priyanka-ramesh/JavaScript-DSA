/*  Bubble Sort: Works by repeatedly swapping the adjacent elements if they are in the wrong order
                 In-place and Stable Sorting Algorithm
        
        Steps:
            Traverse from left and compare adjacent elements and the higher one is placed at right side
            In this way, the largest element is moved to the rightmost end at first
            This process is then continued to find the second largest and place it and so on until the data is sorted
    
    Total no. of passes: n-1
    Total no. of comparisons: n*(n-1)/2
    Time Complexity: O(N^2)
    Auxiliary Space: O(1) -> Iterative Bubble Sort
                     O(n) -> Recursive Bubble Sort

*/

import { numArray, partiallySortedArray, swap } from "./2_sorting.js";

function bubbleSort(array) {
  //   for (let i = 0; i < array.length - 1; i++) {
  //     let swapCnt = 0;
  //     for (let j = 0; j < array.length - 1 - i; j++) {
  //       if (array[j] > array[j + 1]) {
  //         swap(array, j, j + 1);
  //         swapCnt++;
  //       }
  //     }
  //     if (swapCnt === 0) break;
  //   }
  //   return array;

  let passCount = 0;
  let comparisonCount = 0;
  let swapCount = 0;

  //   // Need not run for the last element as it will be sorted automatically at the end of each pass
  //   for (let i = 0; i < array.length - 1; i++) {

  //   Need not run for element at index 0 as it will be sorted automatically at the end of each pass
  for (let i = array.length - 1; i > 0; i--) {
    console.log("Pass Count:", ++passCount);
    let currentComparisonCount = 0;
    let currentSwapCount = 0;

    // // Enough to check for the subarray of length excluding the last i elements as it will be sorted automatically at the end of each pass
    // for (let j = 0; j < array.length - 1 - i; j++) {

    // Enough to check for the subarray of length 'i'
    for (let j = 0; j < i; j++) {
      console.log(
        `Max(${array[j]},${
          array[j + 1]
        }) - Comparison ${++currentComparisonCount} of Pass ${passCount}`
      );
      if (array[j] > array[j + 1]) {
        ++currentSwapCount;
        console.log("Swap Count:", ++swapCount);
        swap(array, j, j + 1);
      }
    }

    // Optimizing for partially sorted arrays (Reducing the no. of unwanted comparisons)
    console.log("Current Swap Count:", currentSwapCount);
    // If no swap in current pass, then no need of further outer loop, hence break, else, runs the loop even is array is sorted
    if (currentSwapCount === 0) {
      console.log(
        `Array when no swaps took place at pass ${passCount} - ${array}`
      );
      comparisonCount += currentComparisonCount;
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
      break;
    }

    console.log(`Array end of Pass ${passCount} - ${array}`);
    comparisonCount += currentComparisonCount;
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
  }

  console.log("Total Comparison Count:", comparisonCount);
  console.log("Total Swap Count:", swapCount);
  return array;
}

const bubbleSortedArray = bubbleSort(numArray);
// const bubbleSortedArray = bubbleSort(partiallySortedArray);
console.log("Bubble Sorted Array:", bubbleSortedArray);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

let passCount = 0;
let comparisonCount = 0;
let swapCount = 0;
function recursiveBubbleSort(array, length = array.length) {
  //   if (length === 1) return array;
  //   let swapCnt = 0;
  //   for (let i = 0; i < length - 1; i++) {
  //     if (array[i] > array[i + 1]) {
  //       swap(array, i, i + 1);
  //       swapCnt++;
  //     }
  //   }
  //   if (swapCnt === 0) return array;
  //   return recursiveBubbleSort(array, length - 1);

  // Base case
  if (length == 1) {
    console.log(`Array when Base Case reached at length ${length} - ${array}`);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
    return array;
  }

  let currentComparisonCount = 0;
  let currentSwapCount = 0;

  // Largest element is moved (or bubbled) to end at the end of each pass
  console.log("Pass Count:", ++passCount);

  for (var i = 0; i < length - 1; i++) {
    console.log(
      `Max(${array[i]},${
        array[i + 1]
      }) - Comparison ${++currentComparisonCount} of Pass ${passCount}`
    );
    if (array[i] > array[i + 1]) {
      ++currentSwapCount;
      console.log("Swap Count:", ++swapCount);
      swap(array, i, i + 1);
    }
  }

  // Optimizing for partially sorted arrays (Reducing the no. of unwanted comparisons)
  console.log("Current Swap Count:", currentSwapCount);
  // If no swap in current pass, then no need of recursion, hence return, else, calls recursively until length is 1 even is array is sorted
  if (currentSwapCount === 0) {
    console.log(
      `Array when no swaps took place at pass ${passCount} and length ${length} - ${array}`
    );
    comparisonCount += currentComparisonCount;
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
    return array;
  }

  console.log(`Array end of Pass ${passCount} - ${array}`);
  comparisonCount += currentComparisonCount;
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

  // Enough to check for the subarray of length-1 as the largest element is moved to the end
  return recursiveBubbleSort(array, length - 1);
}

// const recursiveBubbleSortedArray = recursiveBubbleSort(numArray);
const recursiveBubbleSortedArray = recursiveBubbleSort(partiallySortedArray);
// const recursiveBubbleSortedArray = recursiveBubbleSort([0, 1, 2], 1);
// const recursiveBubbleSortedArray = recursiveBubbleSort([0], 1);
// const recursiveBubbleSortedArray = recursiveBubbleSort([0], 3);
console.log("Total Comparison Count:", comparisonCount);
console.log("Total Swap Count:", swapCount);
console.log("Recursive Bubble Sorted Array:", recursiveBubbleSortedArray);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
