/*  Data Structure: Specific way of organizing, storing and accessing data
    
    Algorithm: Set of instructions that tells a computer how to do something (Step by step solution of a problem)

    Big O: Determines the Time Complexity and Space Complexity of the code (Quality of code)
           "How Long" an algorithms with take to run or "How Much Memory" it will need as the amount of data it handles grows (Good / Bad Code)
        
            O(n)      -> Signifies that the execution time of an algorithm grows "Linearly" in proportion to the size of the input data 'n'
                        As the number of items in the input data increases, the time it takes for the algorithm to run increases correspondingly
                        Search time of an array with 5 items < Search time of an array with 500 items < Search time of an array with 50000 items
            O(1)     -> Signifies that the execution time of an algorithm remains "Constant" regardless of the size of the input data 'n'
                        Accessing an element with its index takes Constant Time with any array size (array[i]=17)
            O(n^2)   -> Signifies that the execution time of an algorithm grows quadratically with the size of the input data 'n' (Expensive)
                        Compare each item of an array to every other other item -> No. of items 'n' icreases, No. of comparisons 'n^2' increases much faster
            O(log n) -> Signifies the runtime of an algorithm that grows "Logarithmically" with the size of the input data 'n'
                        If input size increases, time taken by the algorithm to run increases slowly
                        log 'n' to the base '2' ('2' to the '?' power equals to 'n') -> '?' denotes the no. of operations involved
                        Divide & Conquer -> Searching or sorting of an array
*/

// Data Structure
const arr1 = ["element1", "element2", "element3", "element4", "element5"];
const arr2 = [
  "element1",
  "element2",
  "element3",
  "element4",
  "element5",
  "element6",
  "element7",
  "element8",
  "element9",
  "element7",
];
// Algorithm
function findElement(array, target) {
  // Complexity: O(n)
  array.forEach((element, index) => {
    if (target === element) console.log(element, "is present at index", index);
    // else console.log("Element Not Found");
  });
}
// findElement(arr1, "element5");
// findElement(arr2, "element7");
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

function findElement2Loops(array, target) {
  // Complexity: O(n+n) -> O(2n) [Drop the constants in Complexity] -> O(n)

  for (let i = 0; i < array.length; i++) {
    // Complexity: O(n)
    if (target === array[i]) console.log(array[i], "is present at index", i);
  }
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
  for (let j in array) {
    // Complexity: O(n)
    if (target === array[j]) console.log(array[j], "is present at index", j);
  }
}
// findElement2Loops(arr2, "element7");
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

function editElement(array, index, newValue) {
  // Complexity: O(1)
  array[index] = newValue;
  console.log(array);
}
// editElement(arr1, 2, "element317");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// editElement(arr2, 1, "element111222");
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );

function findPairs(array) {
  // Complexity: O((n^2) + (n^2) + n) -> O(2(n^2) + n) [Drop the constants in Complexity] -> O((n^2) + n) [Removing Non-dominant Term] -> O(n^2)

  // Complexity: O(n*n) -> O(n^2) [Dominant Term - High Predence]
  const n = array.length;
  for (let i = 0; i < n; i++) {
    // Complexity: O(n)
    for (let j = 0; j < n; j++) {
      // Complexity: O(n)
      if (i % 2 === 0 && j % 2 === 0) console.log([array[i], array[j]]);
    }
  }
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

  // Complexity: O(n*n) -> O(n^2) [Dominant Term - High Predence]
  for (let i = 0; i < n; i++) {
    // Complexity: O(n)
    for (let j = i + 1; j < n; j++) {
      // Complexity: O(n)
      console.log([array[i], array[j]]);
    }
  }
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

  // Complexity: O(n) [Non-dominant Term - Low Predence]
  array.forEach((element) => console.log(element));
}
// findPairs(arr1);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// findPairs(arr2);
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );
