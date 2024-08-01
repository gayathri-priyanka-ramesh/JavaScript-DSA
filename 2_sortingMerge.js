/*  Merge Sort: Follows the "Divide-and-Conquer" approach
                Not an In-place, but a Stable Sorting Algorithm
                Works by recursively dividing the input array into smaller subarrays and sorting those subarrays then merging them back together to obtain the sorted array

        Recursive Steps:
            Divide: Divide the list or array recursively into two halves until it can no more be divided
            Conquer: Each subarray is sorted individually using the merge sort algorithm
            Merge: The sorted subarrays are merged back together in sorted order 
            The process continues until all elements from both subarrays have been merged
            Uses Function Call Stack to store intermediate values of l and h.

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

function recursiveMerge(leftArray, rightArray, passCount = null) {
  // let leftIndex = 0;
  // let rightIndex = 0;
  // const mergedArray = [];
  // while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
  //   if (leftArray[leftIndex] < rightArray[rightIndex]) {
  //     mergedArray.push(leftArray[leftIndex]);
  //     leftIndex++;
  //   } else {
  //     mergedArray.push(rightArray[rightIndex]);
  //     rightIndex++;
  //   }
  // }
  // if (leftIndex < leftArray.length)
  //   mergedArray.push(...leftArray.slice(leftIndex));
  // if (rightIndex < rightArray.length)
  //   mergedArray.push(...rightArray.slice(rightIndex));
  // return mergedArray;

  console.log("Merge Count:", ++mergeCount, "--- Pass Count:", passCount);
  console.log("Left Array:", leftArray);
  let leftIndex = 0;
  console.log("Right Array:", rightArray);
  let rightIndex = 0;
  let mergedArrayLength = leftArray.length + rightArray.length;
  console.log("Merged Array Length:", mergedArrayLength);
  const mergedArray = new Array(mergedArrayLength);
  let mergedIndex = 0;
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

// const mergedArrayOfSortedSubArrays = recursiveMerge(
//   [3, 27, 38, 43],
//   [1, 9, 10, 17, 82]
// );
// console.log("Merged Array of Sorted Sub Arrays:", mergedArrayOfSortedSubArrays);
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
  console.log("Middle Index:", middleIndex);

  // const leftArray = array.slice(0, middleIndex);
  const leftArray = new Array(middleIndex);
  for (let i = 0; i < leftArray.length; i++) leftArray[i] = array[i];
  console.log("Left Array:", leftArray);

  // const rightArray = array.slice(middleIndex);
  const rightArray = new Array(array.length - middleIndex);
  for (let i = 0; i < rightArray.length; i++)
    rightArray[i] = array[middleIndex + i];
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
  return recursiveMerge(leftParts, rightParts, callCount - 1);
}

// const recursiveMergeSortedArray = recursiveMergeSort(numArray);
// // const recursiveMergeSortedArray = recursiveMergeSort(partiallySortedArray);
// console.log("Total Pass Count:", passCount);
// console.log("Total Merge Count:", mergeCount);
// console.log("Total Comparison Count:", comparisonCount);
// console.log("RecursiveMerge Sorted Array:", recursiveMergeSortedArray);
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

mergeCount = 0;
comparisonCount = 0;
// Usage of function that returns merged version of left and right arrays is not applicable as 'iterativeMergeSort 'requires sorting in the original array as the exact division of array is not known in Bottom-Up Approach, yet this merge function can also be used in 'recursiveMergeSort'
function iterativeMerge(array, left, middle, right, passCount = null) {
  // const leftArray = array.slice(left, middle + 1);
  // const rightArray = array.slice(middle + 1, right + 1);
  // let leftIndex = 0;
  // let rightIndex = 0;
  // let mergedIndex = left;
  // while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
  //   if (leftArray[leftIndex] <= rightArray[rightIndex]) {
  //     array[mergedIndex] = leftArray[leftIndex];
  //     leftIndex++;
  //   } else {
  //     array[mergedIndex] = rightArray[rightIndex];
  //     rightIndex++;
  //   }
  //   mergedIndex++;
  // }
  // while (leftIndex < leftArray.length) {
  //   array[mergedIndex] = leftArray[leftIndex];
  //   leftIndex++;
  //   mergedIndex++;
  // }
  // while (rightIndex < rightArray.length) {
  //   array[mergedIndex] = rightArray[rightIndex];
  //   rightIndex++;
  //   mergedIndex++;
  // }
  // return array;

  console.log("Merge Count:", ++mergeCount, "--- Pass Count:", passCount);
  console.log("Left:", left, "--- Middle:", middle, "--- Right:", right);

  let leftArrayLength = middle - left + 1;
  let leftArray = Array(leftArrayLength).fill(0);
  for (let i = 0; i < leftArrayLength; i++) leftArray[i] = array[left + i];
  console.log("Left Array:", leftArray, "- Length:", leftArrayLength);

  let rightArrayLength = right - middle;
  let rightArray = Array(rightArrayLength).fill(0);
  for (let i = 0; i < rightArrayLength; i++)
    rightArray[i] = array[middle + 1 + i];
  console.log("Right Array:", rightArray, "- Length:", rightArrayLength);

  let currentComparisonCount = 0;
  let leftIndex = 0;
  let rightIndex = 0;
  let mergedIndex = left;

  while (leftIndex < leftArrayLength && rightIndex < rightArrayLength) {
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
    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      console.log(
        `Placing ${leftArray[leftIndex]} from Left Array Index ${leftIndex} in the Merged Array at Index ${mergedIndex}`
      );
      array[mergedIndex] = leftArray[leftIndex];
      leftIndex++;
    } else {
      console.log(
        `Placing ${rightArray[rightIndex]} from Right Array Index ${rightIndex} in the Merged Array at Index ${mergedIndex}`
      );
      array[mergedIndex] = rightArray[rightIndex];
      rightIndex++;
    }
    mergedIndex++;
  }
  if (leftIndex < leftArray.length) {
    console.log(
      `Placing remaining elements of Left Array from Index ${leftIndex} to ${
        leftArrayLength - 1
      }`
    );
  }
  while (leftIndex < leftArrayLength) {
    console.log(
      `Placing ${leftArray[leftIndex]} from Left Array Index ${leftIndex} in the Merged Array at Index ${mergedIndex}`
    );
    array[mergedIndex] = leftArray[leftIndex];
    leftIndex++;
    mergedIndex++;
  }
  if (rightIndex < rightArray.length) {
    console.log(
      `Placing remaining elements of Right Array from Index ${rightIndex} to ${
        rightArrayLength - 1
      }`
    );
  }
  while (rightIndex < rightArrayLength) {
    console.log(
      `Placing ${rightArray[rightIndex]} from Right Array Index ${rightIndex} in the Merged Array at Index ${mergedIndex}`
    );
    array[mergedIndex] = rightArray[rightIndex];
    rightIndex++;
    mergedIndex++;
  }

  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
  comparisonCount += currentComparisonCount;
  console.log("Merged Array as the end of Merge", mergeCount, "-", array);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  return array;
}

// const mergedArraySortedByLeftMiddleRight = iterativeMerge(
//   [3, 27, 38, 43, 1, 9, 10, 17, 82],
//   0,
//   3,
//   8
// );
// console.log(
//   "Merged Array Sorted By Left-Middle-Right:",
//   mergedArraySortedByLeftMiddleRight
// );
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

function iterativeMergeSort(array) {
  // for (
  //   let currentSubArraySize = 1;
  //   currentSubArraySize < array.length;
  //   currentSubArraySize = 2 * currentSubArraySize
  // ) {
  //   for (
  //     let leftStart = 0;
  //     leftStart < array.length - 1;
  //     leftStart += 2 * currentSubArraySize
  //   ) {
  //     let middle = Math.min(
  //       leftStart + currentSubArraySize - 1,
  //       array.length - 1
  //     );
  //     let rightEnd = Math.min(
  //       leftStart + 2 * currentSubArraySize - 1,
  //       array.length - 1
  //     );
  //     iterativeMerge(array, leftStart, middle, rightEnd);
  //   }
  // }
  // return array;

  let passCount = 0;
  let splitCount = 0;

  // For current size of subarrays to be merged currentSubArraySize varies from 1 to n/2
  let subArrayMaxSize = Math.ceil(array.length / 2);
  // Merge subarrays in bottom up manner. First merge subarrays of size 1 to create sorted subarrays of size 2, then merge subarrays of size 2 to create sorted subarrays of size 4, and so on.
  for (
    let currentSubArraySize = 1;
    currentSubArraySize <= subArrayMaxSize;
    currentSubArraySize = 2 * currentSubArraySize
  ) {
    console.log(
      "Pass Count:",
      ++passCount,
      "--- Current Subarray Size:",
      currentSubArraySize
    );
    let currentSplitCount = 0;
    // For picking starting index of left subarray to be merged
    // Pick starting point of different subarrays of current size
    for (
      let leftStart = 0;
      leftStart < array.length - 1;
      leftStart += 2 * currentSubArraySize
    ) {
      console.log(
        `Split ${++currentSplitCount} of Pass ${passCount} with Current Subarray Size ${currentSubArraySize}`
      );
      console.log("Left Start:", leftStart);
      let middle = Math.min(
        leftStart + currentSubArraySize - 1,
        array.length - 1
      );
      console.log(
        `Min(${leftStart + currentSubArraySize - 1},${
          array.length - 1
        }) is the Middle Value ${middle} - End point of Left Subarray`
      );
      console.log("Right Start:", middle + 1);
      let rightEnd = Math.min(
        leftStart + 2 * currentSubArraySize - 1,
        array.length - 1
      );
      console.log(
        `Min(${leftStart + 2 * currentSubArraySize - 1},${
          array.length - 1
        }) is the End point of Right Subarray ${rightEnd}`
      );

      // Merge Subarrays arr[leftStart...middle] & arr[middle+1...rightEnd]
      console.log("Subarrays at the end of Split", currentSplitCount);
      console.log("Left Array:", array.slice(leftStart, middle + 1));
      console.log("Right Array:", array.slice(middle + 1, rightEnd + 1));
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
      iterativeMerge(array, leftStart, middle, rightEnd, passCount);
    }

    console.log(`Array end of Pass ${passCount} - ${array}`);
    splitCount += currentSplitCount;
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
  }
  console.log("Total Split Count:", splitCount);
  return array;
}

// const iterativeMergeSortedArray = iterativeMergeSort(numArray);
// // const iterativeMergeSortedArray = iterativeMergeSort(partiallySortedArray);
// console.log("Total Merge Count:", mergeCount);
// console.log("Iterative Merge Sorted Array:", iterativeMergeSortedArray);
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );
