/*  Merge Sort: Follows the "Divide-and-Conquer" approach
                Not an In-place, but a Stable Sorting Algorithm
                Works by recursively dividing the input array into smaller subarrays and sorting those subarrays then merging them back together to obtain the sorted array

        Recursive Steps:
            Divide: Divide the list or array recursively into two halves until it can no more be divided
            Conquer: Each subarray is sorted individually using the merge sort algorithm
            Merge: The sorted subarrays are merged back together in sorted order 
            The process continues until all elements from both subarrays have been merged

        Iterative Steps:
            Bottom up approach (i.e.) Start from 2 element sized array as 1 element sized array is already sorted
            In top down approach, where the 2 element sized array may be of size sequence 2,1,2,2,1
            In bottom up approach, as how to divide the array exactly is not known, it is assumed that the array was divided exactly by powers of 2 (n/2,n/4….etc) for an array size of powers of 2, ex: n=2,4,8,16
            The unmerged sublist element count that will be isolated until final merge call can be found out using the remainder (n % width)
            The final merge (when lists are uneven) can be identified by (width>n/2), as width grows by powers of 2
            When width == n/2 then it means the input was already of size in powers of 2
            If width < n/2 then final merge is not yet reached
            When width > n/2, pending unmerged uneven lists are present, hence reset mid only in such case

    Time complexity: O(n log n)
    Auxiliary Space: O(n)

*/

import { numArray, partiallySortedArray } from "./2_sorting.js";

let mergeCount = 0;
let comparisonCount = 0;

function merge(leftArray, rightArray, passCount) {
  let leftIndex = 0;
  let rightIndex = 0;
  const mergedArray = [];
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      mergedArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }
  if (leftIndex < leftArray.length)
    mergedArray.push(...leftArray.slice(leftIndex));
  if (rightIndex < rightArray.length)
    mergedArray.push(...rightArray.slice(rightIndex));
  return mergedArray;

  let mergedArrayLength = leftArray.length + rightArray.length;
  // const mergedArray = new Array(mergedArrayLength);
  // let mergedIndex = 0;
  // let leftIndex = 0;
  // let rightIndex = 0;
  console.log("Merge Count:", ++mergeCount, "--- Pass Count:", passCount);
  console.log("Left Array:", leftArray);
  console.log("Right Array:", rightArray);
  console.log("Merged Array Length:", mergedArrayLength);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

  let currentComparisonCount = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    console.log(
      "Merged Index:",
      mergedIndex,
      "--- Right Index:",
      rightIndex,
      "--- Left Index:",
      leftIndex
    );
    console.log(
      `Min(${leftArray[leftIndex]},${
        rightArray[rightIndex]
      }) - Comparison ${++currentComparisonCount} of Merge ${mergeCount}`
    );
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      console.log(
        `Placing ${leftArray[leftIndex]} from Left Array Index ${leftIndex} in the Merged Array at Index ${mergedIndex}`
      );
      // mergedArray.push(leftArray[leftIndex]);
      mergedArray[mergedIndex] = leftArray[leftIndex];
      mergedIndex++;
      leftIndex++;
    } else {
      console.log(
        `Placing ${rightArray[rightIndex]} from Right Array Index ${rightIndex} in the Merged Array at Index ${mergedIndex}`
      );
      // mergedArray.push(rightArray[rightIndex]);
      mergedArray[mergedIndex] = rightArray[rightIndex];
      mergedIndex++;
      rightIndex++;
    }
  }

  if (leftIndex < leftArray.length) {
    console.log(
      `Placing remaining elements of Left Array from Index ${leftIndex} to ${
        leftArray.length - 1
      }`
    );
    // mergedArray.push(...leftArray.slice(leftIndex));
  }
  while (leftIndex < leftArray.length) {
    console.log(
      `Placing ${leftArray[leftIndex]} from Left Array Index ${leftIndex} in the Merged Array at Index ${mergedIndex}`
    );
    mergedArray[mergedIndex] = leftArray[leftIndex];
    mergedIndex++;
    leftIndex++;
  }
  if (rightIndex < rightArray.length) {
    console.log(
      `Placing remaining elements of Right Array from Index ${rightIndex} to ${
        rightArray.length - 1
      }`
    );
    // mergedArray.push(...rightArray.slice(rightIndex));
  }
  while (rightIndex < rightArray.length) {
    console.log(
      `Placing ${rightArray[rightIndex]} from Right Array Index ${rightIndex} in the Merged Array at Index ${mergedIndex}`
    );
    mergedArray[mergedIndex] = rightArray[rightIndex];
    mergedIndex++;
    rightIndex++;
  }

  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
  comparisonCount += currentComparisonCount;
  console.log("Merged Array as the end of Merge", mergeCount, "-", mergedArray);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  return mergedArray;
}

// const mergedArrays = merge([3, 27, 38, 43], [9, 10, 17, 82]);
// console.log("Merged Arrays:", mergedArrays);
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

let passCount = 0;
function recursiveMergeSort(array, side = "Initial", callCount = ++passCount) {
  // if (array.length === 1) return array;
  // const middleIndex = Math.floor(array.length / 2);
  // const leftArray = array.slice(0, middleIndex);
  // const rightArray = array.slice(middleIndex);
  // return merge(recursiveMergeSort(leftArray), recursiveMergeSort(rightArray));

  passCount = callCount;
  console.log("Pass Count:", callCount++, "--- Side:", side);

  // Base Case
  if (array.length <= 1) {
    console.log(
      `Array when Base Case reached with length ${array.length} - ${array}`
    );
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  // const leftArray = array.slice(0, middleIndex);
  const leftArray = new Array(middleIndex);
  for (let i = 0; i < leftArray.length; i++) leftArray[i] = array[i];
  // const rightArray = array.slice(middleIndex);
  const rightArray = new Array(array.length - middleIndex);
  for (let i = 0; i < rightArray.length; i++)
    rightArray[i] = array[middleIndex + i];
  console.log("Middle Index:", middleIndex);
  console.log("Left Array:", leftArray);
  console.log("Right Array:", rightArray);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

  console.log("Recursive call for Left Array");
  const leftParts = recursiveMergeSort(leftArray, "Left", callCount);
  console.log("Left Parts:", leftParts);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("Recursive call for Right Array");
  const rightParts = recursiveMergeSort(rightArray, "Right", callCount);
  console.log("Right Parts:", rightParts);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("Merging arrays split by Pass:", callCount - 1);
  return merge(leftParts, rightParts, callCount - 1);
}

const mergeSortedArray = recursiveMergeSort(numArray);
// const mergeSortedArray = recursiveMergeSort(partiallySortedArray);
console.log("Total Pass Count:", passCount);
console.log("Total Merge Count:", mergeCount);
console.log("Total Comparison Count:", comparisonCount);
console.log("Merge Sorted Array:", mergeSortedArray);
console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
