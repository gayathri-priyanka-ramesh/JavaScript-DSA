/*  Binary Search: Searching the desired element in a sorted array by repeatedly dividing the search interval in half
                   The idea is to use the information that the array is sorted and reduce the time complexity 

        Conditions:
            The data structure must be sorted.
            Access to any element of the data structure should take constant time.

        Steps:
            Divide the search space into two halves by finding the middle index 
            Compare the middle element of the search space with the key
            If the key is found at middle element, the process is terminated
            If the key is not found at middle element, choose which half will be used as the next search space
                If the key is smaller than the middle element, then the left side is used for next search
                If the key is larger than the middle element, then the right side is used for next search
            This process is continued until the key is found or the total search space is exhausted
            The search interval is halved by comparing the target element with the middle value of the search space

            Iterative Binary Search: Uses a while loop to continue the process of comparing the key and splitting the search space in two halves.

            Recursive Binary Search Algorithm: Creates a recursive function and compare the middle of the search space with the key, and based on the result either return the index where the key is found or call the recursive function for the next search space.

        Time Complexity: 
            Best Case   : O(1)     - Middle value is the target
            Average Case: O(log N) - Size of the search interval is halved in each step
            Worst Case  : O(log N) - Size of the search interval is halved in each step
        Auxiliary Space:
            Iterative Binary Search: O(1)    - Except for the variable to store the middle index, no other variable is used
            Recursive Binary Search: O(logN) - Slightly higher overhead due to Recursive Call Stack Space or Function Calls

*/

import { sortedNumArray } from "./1_array.js";

function binarySearch(array, target) {
  //   let startIndex = 0;
  //   let endIndex = array.length - 1;
  //   while (startIndex <= endIndex) {
  //     let middleIndex = Math.floor((startIndex + endIndex) / 2);
  //     if (array[middleIndex] === target)
  //       return `Target ${target} found at Index ${middleIndex}`;
  //     array[middleIndex] < target
  //       ? (startIndex = middleIndex + 1)
  //       : (endIndex = middleIndex - 1);
  //   }
  //   return `Target ${target} not found in array [${array}]`;

  let startIndex = 0;
  let endIndex = array.length - 1;
  let equalityCheckCount = 0;
  while (startIndex <= endIndex) {
    // let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    // let middleIndex = startIndex + Math.ceil((endIndex - startIndex) / 2);
    // let middleIndex = Math.floor((startIndex + endIndex) / 2);
    let middleIndex = Math.ceil((startIndex + endIndex) / 2);
    console.log(
      "StartIndex:",
      startIndex,
      "--- MiddleIndex:",
      middleIndex,
      "--- EndIndex:",
      endIndex
    );
    console.log(
      `Equality Check Count ${++equalityCheckCount} --- Element ${
        array[middleIndex]
      } at Index ${middleIndex}`
    );
    if (array[middleIndex] === target)
      return `Target ${target} found at Index ${middleIndex} after ${equalityCheckCount} Equality Checks`;
    if (array[middleIndex] > target) {
      endIndex = middleIndex - 1;
      console.log(
        `Target ${target} may lie in the Left Half of the array ${array.slice(
          startIndex,
          endIndex + 1
        )} with from Index ${startIndex} to ${endIndex}`
      );
    } else {
      startIndex = middleIndex + 1;
      console.log(
        `Target ${target} may lie in the Right Half of the array ${array.slice(
          startIndex,
          endIndex + 1
        )} with from Index ${startIndex} to ${endIndex}`
      );
    }
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
  }
  console.log("Total Equality Check Count:", equalityCheckCount);
  return `Target ${target} not found in array [${array}]`;
}

const binarySearchResult = binarySearch(sortedNumArray, 3);
// const binarySearchResult = binarySearch(sortedNumArray, 8);
console.log("Linear Search Result:", binarySearchResult);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

let equalityCheckCount = 0;
function recursiveBinarySearch(array, target) {
  //   let startIndex = 0;
  //   let endIndex = array.length - 1;
  //   let middleIndex = Math.ceil((startIndex + endIndex) / 2);
  //   if (array[middleIndex] === target)
  //     return `Target ${target} found at Index ${middleIndex}`;
  //   array[middleIndex] > target
  //     ? (endIndex = middleIndex - 1)
  //     : (startIndex = middleIndex + 1);
  //   if (array.slice(startIndex, endIndex + 1).length > 0)
  //     return recursiveBinarySearch(array.slice(startIndex, endIndex + 1), target);
  //   return `Target ${target} not found in final half of array [${array}]`;

  let startIndex = 0;
  let endIndex = array.length - 1;
  let middleIndex = Math.ceil((startIndex + endIndex) / 2);
  console.log(
    "StartIndex:",
    startIndex,
    "--- MiddleIndex:",
    middleIndex,
    "--- EndIndex:",
    endIndex
  );
  console.log(
    `Equality Check Count ${++equalityCheckCount} --- Element ${
      array[middleIndex]
    } at Index ${middleIndex}`
  );

  // Base Case: Target Found
  if (array[middleIndex] === target)
    return `Target ${target} found at Index ${middleIndex} after ${equalityCheckCount} Equality Checks`;

  if (array[middleIndex] < target) {
    startIndex = middleIndex + 1;
    console.log(
      `Target ${target} may lie in the Right Half of the array ${array.slice(
        startIndex,
        endIndex + 1
      )} with from Index ${startIndex} to ${endIndex}`
    );
  } else {
    endIndex = middleIndex - 1;
    console.log(
      `Target ${target} may lie in the Left Half of the array ${array.slice(
        startIndex,
        endIndex + 1
      )} with from Index ${startIndex} to ${endIndex}`
    );
  }
  console.log("Recursive Call after", equalityCheckCount, "Equality Checks");
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

  // Base Case: Avoid Infinite recursion of empty array
  if (array.slice(startIndex, endIndex + 1).length > 0)
    return recursiveBinarySearch(array.slice(startIndex, endIndex + 1), target);
  console.log("Base Case Reached: Array of size 1 cannot be split");
  return `Target ${target} not found in final half of array [${array}]`;
}

// const recursiveBinarySearchResult = recursiveBinarySearch(sortedNumArray, 3);
// const recursiveBinarySearchResult = recursiveBinarySearch(sortedNumArray, 8);
const recursiveBinarySearchResult = recursiveBinarySearch(sortedNumArray, 0);
console.log("Total Equality Check Count:", equalityCheckCount);
console.log("Linear Search Result:", recursiveBinarySearchResult);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
