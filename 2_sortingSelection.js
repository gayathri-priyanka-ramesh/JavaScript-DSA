/*  Selection Sort: Works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list
                    In-place Sorting Algorithm and unstable by default
                    Can be made Stable if instead of swapping, the minimum element is placed in its position without swapping i.e. by placing the number in its position by pushing every element one step forward(shift all elements to right by 1)

        Steps:
            Whole array is traversed from index 0 to length-1 sequentially.
            After traversing whole array, the lowest value is stored in the first position
            This process is then continued to find the second smallest and place it in the second position and so on until the data is sorted

        Total no. of passes: n-1
        Total no. of comparisons: n*(n-1)/2
        Never makes more than O(N) swaps and can be useful when memory writing is costly
        
        Time Complexity: 
            O(N^2) - One loop to select an element of Array one by one, Another loop to compare that element with every other Array element
            
        Auxiliary Space: 
            Iterative Selection Sort: O(1) - Only extra memory used is for temporary variables while swapping two values in Array (no extra array is used)
            Recursive Selection Sort: O(n)
        
*/

import {
  numArray,
  repeatedNumsArray,
  partiallySortedArray,
} from "./1_array.js";
import { swap } from "./2_sorting.js";

function selectionSort(array) {
  //   for (let i = 0; i < array.length - 1; i++) {
  //     let minimumValueIndex = i;
  //     for (let j = i; j < array.length; j++) {
  //       if (array[j] < array[minimumValueIndex]) minimumValueIndex = j;
  //     }
  //     if (i !== minimumValueIndex) swap(array, i, minimumValueIndex);
  //   }
  //   return array;

  let passCount = 0;
  let comparisonCount = 0;
  let swapCount = 0;

  // Need not run for the last element as it will be sorted automatically at the end of each pass
  for (let i = 0; i < array.length - 1; i++) {
    console.log("Pass Count:", ++passCount);
    let currentComparisonCount = 0;
    let minimumValueIndex = i;
    console.log(`Minimum Value: ${array[minimumValueIndex]}`);

    // Enough to check for the subarray starting from index i as the elements before it will be sorted automatically at the end of each pass
    for (let j = i + 1; j < array.length; j++) {
      console.log(
        `Min(${array[minimumValueIndex]},${
          array[j]
        }) - Comparison ${++currentComparisonCount} of Pass ${passCount}`
      );
      if (array[j] < array[minimumValueIndex]) {
        console.log(`Current Minimum: ${array[j]}`);
        minimumValueIndex = j;
      }
    }

    // Swap only if the current index and the index of minimum value is different
    if (i !== minimumValueIndex) {
      console.log(
        `Swap Count: ${++swapCount} --- Indexes: ${i} and ${minimumValueIndex}`
      );
      swap(array, i, minimumValueIndex);
    }

    console.log(`Array end of Pass ${passCount} - ${array}`);
    comparisonCount += currentComparisonCount;
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
  }

  console.log("Total Comparison Count:", comparisonCount);
  console.log("Total Swap Count:", swapCount);
  return array;
}

const selectionSortedArray = selectionSort(numArray);
// const selectionSortedArray = selectionSort(repeatedNumsArray);
// const selectionSortedArray = selectionSort(partiallySortedArray);
console.log("Selection Sorted Array:", selectionSortedArray);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

function stableSelectionSort(array) {
  //   for (let i = 0; i < array.length - 1; i++) {
  //     let minimumValueIndex = i;
  //     for (let j = i; j < array.length; j++) {
  //       if (array[j] < array[minimumValueIndex]) minimumValueIndex = j;
  //     }
  //     if (i !== minimumValueIndex) {
  //       let minimumValue = array[minimumValueIndex];
  //       while (minimumValueIndex > i) {
  //         array[minimumValueIndex] = array[minimumValueIndex - 1];
  //         minimumValueIndex--;
  //       }
  //       array[i] = minimumValue;
  //     }
  //   }
  //   return array;

  let passCount = 0;
  let comparisonCount = 0;
  let swapCount = 0;

  // Need not run for the last element as it will be sorted automatically at the end of each pass
  for (let i = 0; i < array.length - 1; i++) {
    console.log("Pass Count:", ++passCount);
    let currentComparisonCount = 0;
    let minimumValueIndex = i;
    console.log(`Minimum Value: ${array[minimumValueIndex]}`);

    // Enough to check for the subarray starting from index i as the elements before it will be sorted automatically at the end of each pass
    for (let j = i + 1; j < array.length; j++) {
      console.log(
        `Min(${array[minimumValueIndex]},${
          array[j]
        }) - Comparison ${++currentComparisonCount} of Pass ${passCount}`
      );
      if (array[j] < array[minimumValueIndex]) {
        console.log(`Current Minimum: ${array[j]}`);
        minimumValueIndex = j;
      }
    }

    // Swap only if the current index and the index of minimum value is different
    if (i !== minimumValueIndex) {
      // Move minimum element at current i and shift all elements one step right
      let minimumValue = array[minimumValueIndex];
      while (minimumValueIndex > i) {
        console.log(`Shifting ${array[minimumValueIndex - 1]}`);
        array[minimumValueIndex] = array[minimumValueIndex - 1];
        minimumValueIndex--;
      }
      console.log(`Placing ${minimumValue}`);
      array[i] = minimumValue;
    }

    console.log(`Array end of Pass ${passCount} - ${array}`);
    comparisonCount += currentComparisonCount;
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
  }

  console.log("Total Comparison Count:", comparisonCount);
  console.log("Total Swap Count:", swapCount);
  return array;
}

// const stableSelectionSortedArray = stableSelectionSort(numArray);
const stableSelectionSortedArray = stableSelectionSort(repeatedNumsArray);
// const stableSelectionSortedArray = stableSelectionSort(partiallySortedArray);
console.log("Stable Selection Sorted Array:", stableSelectionSortedArray);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

let passCount = 0;
let comparisonCount = 0;
let swapCount = 0;
function recursiveSelectionSort(array, startIndex = 0) {
  //     if (startIndex === array.length - 1) return array;
  //     let minimumValueIndex = startIndex;
  //     for (let i = startIndex; i < array.length; i++) {
  //       if (array[i] < array[minimumValueIndex]) minimumValueIndex = i;
  //     }
  //     if (startIndex !== minimumValueIndex)
  //       swap(array, startIndex, minimumValueIndex);
  //     return recursiveSelectionSort(array, ++startIndex);

  // Base Case
  if (startIndex === array.length - 1) {
    console.log(
      `Array when Base Case reached at Start Index ${startIndex} - ${array}`
    );
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
    return array;
  }

  let currentComparisonCount = 0;

  // Smallest element is moved to the start of array at the end of each pass
  console.log("Pass Count:", ++passCount);
  let minimumValueIndex = startIndex;
  console.log(`Minimum Value: ${array[minimumValueIndex]}`);

  for (let i = startIndex + 1; i < array.length; i++) {
    console.log(
      `Min(${array[minimumValueIndex]},${
        array[i]
      }) - Comparison ${++currentComparisonCount} of Pass ${passCount}`
    );
    if (array[i] < array[minimumValueIndex]) {
      console.log(`Current Minimum: ${array[i]}`);
      minimumValueIndex = i;
    }
  }

  if (startIndex !== minimumValueIndex) {
    console.log(
      `Swap Count: ${++swapCount} --- Indexes: ${startIndex} and ${minimumValueIndex}`
    );
    swap(array, startIndex, minimumValueIndex);
  }

  console.log(`Array end of Pass ${passCount} - ${array}`);
  comparisonCount += currentComparisonCount;
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

  // Enough to check for the subarray with startIndex+1 as the smallest element is moved to the start
  return recursiveSelectionSort(array, ++startIndex);
}

// const recursiveSelectionSortedArray = recursiveSelectionSort(numArray);
// const recursiveSelectionSortedArray = recursiveSelectionSort(repeatedNumsArray);
const recursiveSelectionSortedArray =
  recursiveSelectionSort(partiallySortedArray);
console.log("Total Comparison Count:", comparisonCount);
console.log("Total Swap Count:", swapCount);
console.log("Recursive Selection Sorted Array:", recursiveSelectionSortedArray);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
