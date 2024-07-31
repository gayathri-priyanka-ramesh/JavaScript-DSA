/*  Insertion Sort: Iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list
                    Follows an incremental approach building a sorted array one element at a time
                    In-place and Stable Sorting Algorithm

        Steps:
            Split the array into two groups: the sorted array and the unsorted array
            Then, pick an element from the unsorted group and put it in the right place in the sorted group
            Start with second element of the array, as first element in the array is assumed to be sorted
            Compare second element with the first element and check if the second element is smaller, then swap them.
            Move to the third element and compare it with the second element, then the first element and swap as necessary to put it in the correct position among the first three elements.
            Continue this process, comparing each element with the ones before it and swapping as needed to place it in the correct position among the sorted elements.
            Repeat until the entire array is sorted.

    Time Complexity: O(N^2)
    Auxiliary Space: O(1)

*/

import { numArray, partiallySortedArray } from "./2_sorting.js";

function insertionSort(array) {
  // for (let i = 1; i < array.length; i++) {
  //   let sortedArrayEndIndex = i - 1;
  //   let currentElement = array[i];
  //   while (
  //     sortedArrayEndIndex >= 0 &&
  //     array[sortedArrayEndIndex] > currentElement
  //   ) {
  //     array[sortedArrayEndIndex + 1] = array[sortedArrayEndIndex];
  //     sortedArrayEndIndex--;
  //   }
  //   array[sortedArrayEndIndex + 1] = currentElement;
  // }
  // return array;

  let passCount = 0;
  let comparisonCount = 0;
  let shiftCount = 0;
  let insertionCount = 0;

  // Assume that the array with first element is already sorted
  for (let i = 1; i < array.length; i++) {
    console.log("Pass Count:", ++passCount);
    let currentComparisonCount = 0;
    let sortedArrayEndIndex = i - 1;
    let currentElement = array[i];
    console.log("Sorted Part", array.slice(0, i));
    console.log(
      "Sorted Array End Index:",
      sortedArrayEndIndex,
      "- Current Element:",
      currentElement
    );

    // // Run over the entire sorted part from end
    // while (sortedArrayEndIndex >= 0) {
    //   console.log(
    //     `Max(${
    //       array[sortedArrayEndIndex]
    //     },${currentElement}) - Comparison ${++currentComparisonCount} of Pass ${passCount}`
    //   );
    //   // The no. of insertions is as many as no. of shifts which make unwanted insertions
    //   if (array[sortedArrayEndIndex] > currentElement) {
    //     console.log(
    //       `Shift Count: ${++shiftCount} --- ${
    //         array[sortedArrayEndIndex]
    //       } from Index ${sortedArrayEndIndex} to ${sortedArrayEndIndex + 1}`
    //     );
    //     array[sortedArrayEndIndex + 1] = array[sortedArrayEndIndex];
    //     console.log(
    //       `Insertion Count ${++insertionCount} --- ${currentElement} from Index ${i} to ${sortedArrayEndIndex}`
    //     );
    //     array[sortedArrayEndIndex] = currentElement;
    //   }
    //   sortedArrayEndIndex--;
    // }

    // Run over the entire sorted part from end only when elements in sorted part is greater than currentElement (Optimized by combining 'while' and 'if')
    while (
      sortedArrayEndIndex >= 0 &&
      array[sortedArrayEndIndex] > currentElement
    ) {
      console.log(
        `Max(${
          array[sortedArrayEndIndex]
        },${currentElement}) - Comparison ${++currentComparisonCount} of Pass ${passCount}`
      );
      console.log(
        `Shift Count: ${++shiftCount} --- ${
          array[sortedArrayEndIndex]
        } from Index ${sortedArrayEndIndex} to ${sortedArrayEndIndex + 1}`
      );
      array[sortedArrayEndIndex + 1] = array[sortedArrayEndIndex];
      sortedArrayEndIndex--;
    }
    // Inserts only once after all necessary shifts in one pass
    if (i !== sortedArrayEndIndex + 1) {
      console.log(
        `Insertion Count ${++insertionCount} --- ${currentElement} from Index ${i} to ${
          sortedArrayEndIndex + 1
        }`
      );
      array[sortedArrayEndIndex + 1] = currentElement;
    }

    console.log(`Array end of Pass ${passCount} - ${array}`);
    comparisonCount += currentComparisonCount;
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
  }

  console.log("Total Comparison Count:", comparisonCount);
  console.log("Total Shift Count:", shiftCount);
  console.log("Total Insertion Count:", insertionCount);
  return array;
}

const insertionSortedArray = insertionSort(numArray);
// const insertionSortedArray = insertionSort(partiallySortedArray);
console.log("Insertion Sorted Array:", insertionSortedArray);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

let passCount = 0;
let comparisonCount = 0;
let shiftCount = 0;
let insertionCount = 0;
function recursiveInsertionSort(
  array,
  length = array.length,
  callCount = ++passCount
) {
  // if (length === 1) return;
  // recursiveInsertionSort(array, length - 1);
  // let lastElement = array[length - 1];
  // let sortedArrayEndIndex = length - 2;
  // while (sortedArrayEndIndex >= 0 && array[sortedArrayEndIndex] > lastElement) {
  //   array[sortedArrayEndIndex + 1] = array[sortedArrayEndIndex];
  //   sortedArrayEndIndex--;
  // }
  // if (length - 1 !== sortedArrayEndIndex + 1)
  //   array[sortedArrayEndIndex + 1] = lastElement;
  // return array;

  console.log("Pass Count:", passCount);

  // Base Case
  if (length === 1) {
    console.log(
      `Sorted Array part when Base Case reached at length ${length} - ${array.slice(
        0,
        length
      )}`
    );
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
    return array.slice(0, length);
  }

  console.log(
    `Unsorted Array part of Recursive Call ${passCount} with length ${length} - ${array.slice(
      0,
      length
    )}`
  );

  // Sort first n-1 elements and then include the nth element
  const returnedSortedArrayPart = recursiveInsertionSort(
    array,
    length - 1,
    ++passCount
  );
  console.log("Pass Count:", callCount, "- Current Length", length);
  console.log("Sub Array to be sorted", array.slice(0, length));

  let currentComparisonCount = 0;
  let lastElement = array[length - 1];
  let sortedArrayEndIndex = length - 2;

  console.log("Sorted Part", returnedSortedArrayPart);
  console.log(
    "Sorted Array End Index:",
    sortedArrayEndIndex,
    "- Last Element:",
    lastElement
  );

  // Shift elements of Sorted Array Part that are greater than last, to one position ahead of their current position
  while (sortedArrayEndIndex >= 0 && array[sortedArrayEndIndex] > lastElement) {
    console.log(
      `Max(${
        array[sortedArrayEndIndex]
      },${lastElement}) - Comparison ${++currentComparisonCount} of Pass ${passCount}`
    );
    console.log(
      `Shift Count: ${++shiftCount} --- ${
        array[sortedArrayEndIndex]
      } from Index ${sortedArrayEndIndex} to ${sortedArrayEndIndex + 1}`
    );
    array[sortedArrayEndIndex + 1] = array[sortedArrayEndIndex];
    sortedArrayEndIndex--;
  }

  // Insert last element at its correct position in Sorted Array part
  if (length - 1 !== sortedArrayEndIndex + 1) {
    console.log(
      `Insertion Count ${++insertionCount} --- ${lastElement} from Index ${
        length - 1
      } to ${sortedArrayEndIndex + 1}`
    );
    array[sortedArrayEndIndex + 1] = lastElement;
  }

  console.log(`Array end of Pass ${passCount} - ${array}`);
  comparisonCount += currentComparisonCount;
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

  return array.slice(0, length);
}

// const recursiveInsertionSortedArray = recursiveInsertionSort(numArray);
const recursiveInsertionSortedArray =
  recursiveInsertionSort(partiallySortedArray);
// const recursiveInsertionSortedArray = recursiveInsertionSort([2, 3, 1]);
console.log("Total Comparison Count:", comparisonCount);
console.log("Total Shift Count:", shiftCount);
console.log("Total Insertion Count:", insertionCount);
console.log("Recursive Insertion Sorted Array:", recursiveInsertionSortedArray);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
