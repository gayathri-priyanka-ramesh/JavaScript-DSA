/*  Linear Search: 
    Traditional Linear Search: Sequential Search Algorithm that starts at one end and goes through each element of a list until the desired element is found; otherwise, the search continues till the end of the dataset
                  Doesn’t require any pre-processing like sorting, making it suitable for dynamic data structures
                  Preferred when the list or array is unsorted, or when the size of the input is relatively small

    Global Linear Search: Finds all occurences of the desired element in the array

    Sentinel Linear Search: Element to be searched is placed in the last position as a sentinel (guard, a lookout, a person keeping watch)
                            All the indices are checked for the presence of the element without checking for the index out of bound case
                            Number of comparisons is reduced as compared to a traditional linear search
                            Sentinel value is used to avoid any out-of-bounds comparisons
                            There is no additional comparison made specifically for the index of the element being searched
                            It eliminates the need for a separate check for the end of the array, which can improve the average case performance.
                            It does not improve the worst-case performance, which is still O(n), as we may need to scan the entire array to find the sentinel value.

        Traditions Steps:
            Start: Begin at the first element of the collection of elements
            Compare: Compare the current element with the desired element
            Found: If the current element is equal to the desired element, return 'true' or index of the current element
            Move: Otherwise, move to the next element in the collection
            Repeat: Repeat steps 2-4 until we have reached the end of collection
            Not found: If the end of the collection is reached without finding the desired element, return that the desired element is not in the array

        Global Steps:
            Same as tradional linear search, but the all indexes of the desired element if found is stored in an array
            Array of indexes of all occurence of the desired element is returned
            If array is empty, it falls into Not Found condition

        Sentinel Steps:
            Initialize the searchIndex variable to 0
            Set the last element of the array to the search key
            While the search key is not equal to the current element of the array (i.e.) array[searchIndex], increment the searchIndex
            If searchIndex is less than the size of the array or array[searchIndex] is equal to the search key, return the value of searchIndex (i.e.) the index of the search key in the array
            Otherwise, the search key is not present in the array, so return -1 (or any other appropriate value to indicate that the key is not found)

        Differences between Traditional and Sentinel Linear Search
            Traditional:
                When a linear search is performed on an array of size N then in the worst case
                    Search: A total of 'N' comparisons are made when the element to be searched is compared to all the elements of the array (equality check of elements)
                    Index : (N+1) comparisons are made for the searchIndex of the element to be compared so that the searchIndex is not out of bounds of the array (comparison inside 'for' loop -> searchIndex<array.length)
                    Total Comparisons in the worst case can be 2*(N+1)
                Two 'N' comparisons are needed to check if the element matches the target item or not, and to check if searchIndex goed out of the list
            
            Sentinel: 
                The last element of the array is replaced with the element to be searched
                Then the linear search is performed on the array without checking whether the current index is inside the index range of the array or not
                The element to be searched will definitely be found inside the array even if it was not present in the original array (as target placed as lastElement in sentinal array) and the loop will be terminated for sure without any additional comparison to prevent infinite looping
                So, the index to be checked will never be out of the bounds of the array
                The number of comparisons in the worst case
                    Search: A total of 'N' comparisons are made when the element to be searched is compared to all the elements of the array (non-equality check of elements inside 'while' loop)
                            1 comparison for Sentinal Value Check with original lastElement (array[lastIndex] === target) after the end of the loop
                    Index : 1 comparison to check if searchIndex < lastIndex
                    Total Comparisons in the worst case can be (N+2)
                Only one 'N' comparisons are needed to check if the element matches the target item or not, and don’t need to check if we go out of the list 

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
  for (let searchIndex = 0; searchIndex < array.length; searchIndex++) {
    console.log(
      `Equality Check Count ${++equalityCheckCount} --- Element ${
        array[searchIndex]
      } at Index ${searchIndex}`
    );
    // Returns at the first occurence of the target
    if (array[searchIndex] === target)
      return `Target ${target} found at Index ${searchIndex}`;
  }
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
  return `Target ${target} not found in array [${array}]`;
}
const linearSearchResult = linearSearch(numArray, 2);
// const linearSearchResult = linearSearch(repeatedNumsArray, 3);
// const linearSearchResult = linearSearch(repeatedNumsArray, 8);
console.log("Total Equality Check Count:", equalityCheckCount);
console.log("Linear Search Result:", linearSearchResult);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

// The value of the first element that passes a test from start of array
// console.log(
//   numArray.find((x) => x % 2 == 0),
//   "at Index",
//   numArray.findIndex((x) => x % 2 == 0)
// );
// The value of the first element that passes a test from end of array
// console.log(
//   numArray.findLast((x) => x % 2 == 0),
//   "at Index",
//   numArray.findLastIndex((x) => x % 2 == 0)
// );

equalityCheckCount = 0;
function globalLinearSearch(array, target) {
  // const targetIndexes = [];
  // // for (let i = array.length - 1; i >= 0; i--) {
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] === target) targetIndexes.push(i);
  // }
  // if (targetIndexes.length > 0)
  //   return `Target ${target} found at Indexes ${targetIndexes}`;
  // return `Target ${target} not found in array [${array}]`;

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
// const globalLinearSearchResult = globalLinearSearch(numArray, 2);
const globalLinearSearchResult = globalLinearSearch(repeatedNumsArray, 3);
// const globalLinearSearchResult = globalLinearSearch(repeatedNumsArray, 8);
console.log("Global Linear Search Result:", globalLinearSearchResult);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

let nonEqualityCheckCount = 0;
function sentinelLinearSearch(array, target) {
  // let lastIndex = array.length - 1;
  // let lastElement = array[lastIndex];
  // let searchIndex = 0;
  // array[lastIndex] = target;
  // while (array[searchIndex] != target) searchIndex++;
  // array[lastIndex] = lastElement;
  // return searchIndex < lastIndex || array[lastIndex] === target
  //   ? `Target ${target} found at Index ${searchIndex}`
  //   : `Target ${target} not found in array [${array}]`;

  let lastIndex = array.length - 1;
  let lastElement = array[lastIndex];
  // Element to be searched is placed at the last index
  array[lastIndex] = target;
  let searchIndex = 0;
  console.log("Sentinel Array:", array);
  while (array[searchIndex] != target) {
    console.log(
      `Non Equality Check Count ${++nonEqualityCheckCount} --- Element ${
        array[searchIndex]
      } at Index ${searchIndex}`
    );
    searchIndex++;
  }
  // Replacing the last element back
  array[lastIndex] = lastElement;
  console.log(
    "Search Index:",
    searchIndex,
    "at the end of Total Non Equality Check Count:",
    nonEqualityCheckCount
  );
  if (searchIndex < lastIndex || array[lastIndex] === target)
    return `Target ${target} found at Index ${searchIndex}`;
  return `Target ${target} not found in array [${array}]`;
}
// const sentinelLinearSearchResult = sentinelLinearSearch(numArray, 2);
// const sentinelLinearSearchResult = sentinelLinearSearch(repeatedNumsArray, 3);
const sentinelLinearSearchResult = sentinelLinearSearch(repeatedNumsArray, 8);
console.log("Sentinel Linear Search Result:", sentinelLinearSearchResult);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
