/* Linear Search: Sequential Search Algorithm that starts at one end and goes through each element of a list until the desired element is found; otherwise, the search continues till the end of the dataset
                  Doesn’t require any pre-processing like sorting, making it suitable for dynamic data structures
                  Preferred when the list or array is unsorted, or when the size of the input is relatively small

        Steps:
            Start: Begin at the first element of the collection of elements
            Compare: Compare the current element with the desired element
            Found: If the current element is equal to the desired element, return 'true' or index of the current element
            Move: Otherwise, move to the next element in the collection
            Repeat: Repeat steps 2-4 until we have reached the end of collection
            Not found: If the end of the collection is reached without finding the desired element, return that the desired element is not in the array

        Time Complexity: 
            Best Case   : O(1) - Key might be present at the first index 
            Worst Case  : O(N) - Key might be present at the last index (i.e.) opposite to the end from which the search has started in the list
            Average Case: O(N)
            
        Auxiliary Space: 
            Searches First Occurence: O(1) - Except for the variable to iterate through the list, no other variable is used
            Searches All Occurences : O(n) - Array to store indexes of all occurences

*/

import { numArray, repeatedNumsArray } from "./1_array.js";

let equalityCheckCount = 0;
function linearSearch(array, target) {
  //   // Polyfill of 'findIndex()'
  //   //   for (let i = 0; i < array.length; i++)
  //   // Polyfill of 'findLastIndex()'
  //   for (let i = array.length; i >= 0; i--)
  //     if (array[i] === target) return `Target ${target} found at Index ${i}`;
  //   return `Target ${target} not found in array [${array}]s`;

  //   // Search from End of Array
  //   for (let i = array.length - 1; i >= 0; i--) {
  // Search from Start of Array
  for (let i = 0; i < array.length; i++) {
    console.log(
      `Equality Check Count ${++equalityCheckCount} --- Element ${
        array[i]
      } at Index ${i}`
    );
    // Returns at the first occurence of the target
    if (array[i] === target) return `Target ${target} found at Index ${i}`;
  }
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
  return `Target ${target} not found in array [${array}]`;
}
const linearSearchResult = linearSearch(numArray, 2);
// const linearSearchResult = linearSearch(repeatedNumsArray, 3);
// const linearSearchResult = linearSearch(repeatedNumsArray, 8);
console.log("Total Equality Check Count:", equalityCheckCount);
console.log("Linear Search Result:", linearSearchResult);

// The value of the first element that passes a test
// console.log(
//   numArray.find((x) => x % 2 == 0),
//   "at Index",
//   numArray.findIndex((x) => x % 2 == 0)
// );
// console.log(
//   numArray.findLast((x) => x % 2 == 0),
//   "at Index",
//   numArray.findLastIndex((x) => x % 2 == 0)
// );

equalityCheckCount = 0;
function globalLinearSearch(array, target) {
  const targetIndexes = [];
  //   // Search from Start of Array
  //   for (let i = 0; i < array.length; i++) {
  // Search from End of Array
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(
      `Equality Check Count ${++equalityCheckCount} --- Element ${
        array[i]
      } at Index ${i}`
    );
    if (array[i] === target) {
      console.log(`Target ${target} found at Index ${i}`);
      targetIndexes.push(i);
    }
  }
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("Total Equality Check Count:", equalityCheckCount);
  // 'if' block not needed for finding only the first occurence of target
  if (targetIndexes.length > 0)
    return `Target ${target} found at Indexes ${targetIndexes}`;
  return `Target ${target} not found in array [${array}]`;
}
// const globalLinearSearchResult = globalLinearSearch(numArray, 3);
const globalLinearSearchResult = globalLinearSearch(repeatedNumsArray, 3);
// const globalLinearSearchResult = globalLinearSearch(repeatedNumsArray, 8);
console.log("Linear Search Result:", globalLinearSearchResult);
