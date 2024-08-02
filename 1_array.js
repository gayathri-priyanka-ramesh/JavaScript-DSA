/* Array -> Ordered collection of elements that can be accessed using a numerical index */
export const numArray = [4, 2, 6, 5, 7, 1, 3];
export const partiallySortedArray = [1, 2, 4, 3, 7, 5, 6];
export const repeatedNumsArray = [3, 5, 4, 2, 3, 1, 3];
export const sortedNumArray = [1, 2, 3, 4, 5, 6, 7];
const stringArr = ["string2", "string2", "string3"];
const booleanArr = [true, false];
const mixedArr = [
  "string4",
  "string5",
  false,
  3,
  { a: 1 },
  booleanArr,
  [11, 12],
];

// Building Own Custom Array
export class CustomArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  arrayFormat = () => {
    let arrFormat = "[";
    let i = 0;
    do {
      if (this.data[i]) {
        if (i === this.length - 1) arrFormat += `${this.data[i]}`;
        else arrFormat += `${this.data[i]}, `;
      } else arrFormat += "]";
    } while (i++ < this.length);
    return arrFormat;
  };

  pushMethod = (element) => {
    this.data[this.length] = element;
    this.length++;
    // console.log(element, "pushed and new length is", this.length);
    return element + " pushed and new length is " + this.length;

    const res = this.addAtIndex(this.length, element);
    return res;
  };

  pop = () => {
    const popElement = this.data[--this.length];
    if (!popElement) return "Empty Array";
    // this.data[this.length] = undefined;
    delete this.data[this.length];
    return `${popElement} is popped and new length is ${this.length}`;

    const res = this.deleteByIndex(this.length - 1);
    return res;
  };

  unshift(element) {
    // Re-indexing;
    for (let i = this.length; i > 0; i--) this.data[i] = this.data[i - 1];
    this.data[0] = element;
    return element + " unshifted and new length is " + ++this.length;

    const res = this.addAtIndex(0, element);
    return res;
  }

  shift() {
    const shiftElement = this.data[0];
    if (!shiftElement) return "Empty Array";
    // Need not be deleted as it is Re-indexed;
    // delete this.data[0];
    for (let i = 0; i < this.length - 1; i++) this.data[i] = this.data[i + 1];
    // Last element has to be deleted as it contains previous value
    delete this.data[--this.length];
    return `${shiftElement} is shifted and new length is ${this.length}`;

    const res = this.deleteByIndex(0);
    return res;
  }

  addAtIndex(index, element) {
    if (index > this.length) {
      return "Index " + index + " out of bound";
    } else {
      for (let i = this.length; i > index; i--) this.data[i] = this.data[i - 1];
      this.data[index] = element;
    }
    return (
      element +
      " added at index " +
      index +
      " and new length is " +
      ++this.length
    );
  }

  deleteByIndex(index) {
    const deleteElement = this.data[index];
    if (this.length === 0) return "Empty Array";
    if (!deleteElement) return "Index " + index + " out of bound";
    for (let i = index; i < this.length - 1; i++)
      this.data[i] = this.data[i + 1];
    delete this.data[--this.length];
    return `${deleteElement} is deleted from index ${index} and new length is ${this.length}`;
  }

  getElementAt(index) {
    if (this.data[index]) return `Index ${index} contains ${this.data[index]}`;
    // return this.data[index];
    return "Index " + index + " out of bound";
  }

  indexOf(element) {
    for (let i in this.data) {
      if (this.data[i] === element)
        return `${this.data[i]} is present at index ${i}`;
    }
    return "Element not found";
  }

  slice(start = 0, end = this.length) {
    // const slicedArray = [];
    const slicedArray = new CustomArray();
    for (let i = start; i < end; i++) {
      // slicedArray.push(this.data[i]);
      slicedArray.pushMethod(this.data[i]);
    }
    return slicedArray;
    return slicedArray.arrayFormat();
  }

  splice(start, deleteCount = 0, ...elements) {
    while (deleteCount-- > 0) {
      console.log(this.data[start], "Deleted");
      this.deleteByIndex(start);
    }
    // elements.forEach((element) => this.addAtIndex(start, element));
    for (let i = elements.length - 1; i >= 0; i--) {
      console.log(elements[i], "Added");
      this.addAtIndex(start, elements[i]);
    }
    return "End of Splice";
  }

  reverse() {
    const reversedArray = new CustomArray();
    for (let i = this.length - 1; i >= 0; i--)
      reversedArray.pushMethod(this.data[i]);
    return reversedArray.arrayFormat();
    return reversedArray;
  }
}
const customArr = new CustomArray();
// console.log("customArr:", customArr);
// console.log("customArr:", customArr.arrayFormat());
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// console.log(customArr.pushMethod("Element1"));
// console.log(customArr.pushMethod("Element2"));
// customArr.pushMethod("Element3");
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log("customArr after Push:", customArr);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// console.log(customArr.pop());
// console.log(customArr.pop());
// // console.log(customArr.pop());
// // console.log(customArr.pop());
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log("customArr after Pop:", customArr);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// console.log(customArr.unshift("Element0"));
// console.log(customArr.unshift("Element-1"));
// console.log(customArr.unshift("Element-2"));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log("customArr after Unshift:", customArr);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// console.log(customArr.shift());
// console.log(customArr.shift());
// // console.log(customArr.shift());
// // console.log(customArr.shift());
// // console.log(customArr.shift());
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log("customArr after Shift:", customArr);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// console.log(customArr.addAtIndex(2, "Element2"));
// console.log(customArr.addAtIndex(3, "Element3"));
// console.log(customArr.addAtIndex(4, "Element4"));
// console.log(customArr.addAtIndex(5, "Element5"));
// console.log(customArr.addAtIndex(9, "Element9"));
// console.log(customArr.addAtIndex(6, "Element6"));
// console.log(customArr.addAtIndex(1, "Element3"));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log("customArr after Add:", customArr);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// console.log(customArr.deleteByIndex(1));
// // console.log(customArr.deleteByIndex(2));
// // console.log(customArr.deleteByIndex(1));
// // console.log(customArr.deleteByIndex(0));
// // console.log(customArr.deleteByIndex(2));
// console.log(customArr.deleteByIndex(17));
// // console.log(customArr.deleteByIndex(2));
// // console.log(customArr.deleteByIndex(0));
// // console.log(customArr.deleteByIndex(0));
// console.log(customArr.deleteByIndex(0));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log("customArr after Delete:", customArr);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// console.log(customArr.getElementAt(1));
// console.log(customArr.getElementAt(12));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

// console.log(customArr.indexOf("Element3"));
// console.log(customArr.indexOf("Element12"));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// console.log(customArr.slice(1, 3));
// console.log(customArr.slice());
// console.log(customArr.slice(1));
// // console.log(customArr.slice(,3));
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// console.log(
//   customArr.splice(
//     1,
//     2,
//     "Element11",
//     "Element12",
//     "Element13",
//     "Element14",
//     "Element15"
//   )
// );
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// console.log("customArr after Splice:", customArr);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// console.log("Final customArr:", customArr.arrayFormat());
// console.log("Reverse customArr:", customArr.reverse());
// console.log(
//   "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
// );
