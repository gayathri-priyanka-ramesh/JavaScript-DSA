/* Sorting Algorithm: Rearrange a given array or list of elements according to a comparison operator on the elements
                      The comparison operator is used to decide the new order of elements either in ascending or in descending order in the respective data structure

        In-place Sorting -> Uses constant space for producing the output (modifies the given array only)
                            It sorts the list only by modifying the order of the elements within the list
                            Examples: Selection Sort, Bubble Sort Insertion Sort, Heap Sort
        Internal Sorting -> All the data is placed in the main memory or internal memory
                            Problem cannot take input beyond its size
                            Example: Heap Sort, Bubble Sort, Selection Sort, Quick Sort, Shell Sort, Insertion Sort
        External Sorting -> All the data that needs to be sorted cannot be placed in memory at a time
                            Used for the massive amount of data
                            Examples: Merge Sort, Tag Sort, Polyphase Sort, Four tape Sort, External radix Sort, etc.
        Stable sorting   -> Two same data appear in the same order in sorted data without changing their position
                            Examples: Merge Sort, Insertion Sort, Bubble Sort
        Unstable sorting -> Two same data appear in the different order in sorted data
                            Examples: Quick Sort, Heap Sort, Shell Sort
                  Input  : 4A 5 3  2 4B 1
                  Output :  1 2 3 4B 4A 5 (Unstable)
                  Output :  1 2 3 4A 4B 5 (Stable)

*/

export const numArray = [4, 2, 6, 5, 7, 1, 3];
export const partiallySortedArray = [1, 2, 4, 3, 7, 5, 6];
export const repeatedNumsArray = [3, 5, 4, 2, 3, 1, 3];

// Modifies the original array
export function swap(array, xIndex, yIndex) {
  const temp = array[xIndex];
  array[xIndex] = array[yIndex];
  array[yIndex] = temp;
}
