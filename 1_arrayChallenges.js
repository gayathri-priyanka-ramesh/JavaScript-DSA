import { CustomArray } from "./1_array.js";

// Reverse a String - Palindrome
function stringToArray(string) {
  const array = new CustomArray();
  for (let i = 0; i < string.length; i++) array.pushMethod(string[i]);

  // const array = [];
  // for (let i = 0; i < string.length; i++) array.push(string[i]);

  return array;
}
function arrayToString(array) {
  let string = "";

  let arrayValues = array
    .replaceAll(",", "")
    .replaceAll(" ", "")
    .replace("[", "")
    .replace("]", "");
  for (let i = 0; i < arrayValues.length; i++) string += arrayValues[i];

  // for (let i = 0; i < array.length; i++)
  //   if (
  //     array[i] !== "[" &&
  //     array[i] !== "]" &&
  //     array[i] !== "," &&
  //     array[i] !== " "
  //   )
  //     string += array[i];

  // for (let i = 0; i < array.length; i++) string += array[i];

  return string;
}

function reverseString(string) {
  const strToArr = stringToArray(string);
  const revArr = strToArr.reverse();
  const revStr = arrayToString(revArr);

  // const strToArr = string.split("");
  // const revArr = strToArr.reverse();
  // const revStr = revArr.join("");

  // let revStr = "";
  // for (let i = string.length - 1; i >= 0; i--) revStr += string[i];

  return revStr;
}

// const str = "Apple";
const str = "Abcba";
const revString = reverseString(str);
// console.log("String:", str, "Reverse String:", revString);
// console.log("Palindrome:", str.toLowerCase() === revString.toLowerCase());
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");

const num = 12321;
// const num = 111222
// const revNum = reverseString(String(num));
// const revNum = reverseString(num.toString());
const revNum = parseInt(reverseString(String(num)));
// console.log("Number:", num, "Reverse Number:", revNum);
// // console.log("Palindrome:", num === +revNum);
// console.log("Palindrome:", num == revNum);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// Sentence Capitalization
function sentenceCapitalization(sentence) {
  // const words = sentence.split(" ");
  const words = [];
  let word = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") word += sentence[i];
    else {
      words.push(word);
      word = "";
    }
    if (i == sentence.length - 1) words.push(word);
  }

  for (let i = 0; i < words.length; i++) {
    // words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    let word = words[i][0].toUpperCase();
    for (let j = 1; j < words[i].length; j++) {
      word += words[i][j].toLowerCase();
    }
    words[i] = word;
  }
  return words.join(" ");

  const capitalizedWords = words.map(
    (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
  );
  console.log(capitalizedWords);
  return capitalizedWords.join(" ");
}
const sentence = "helLo WoRld";
const capitalizedSentence = sentenceCapitalization(sentence);
// console.log(
//   "Sentence:",
//   sentence,
//   "\nCapitalized Sentence:",
//   capitalizedSentence
// );
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// FizzBuzz
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}
// fizzBuzz(17);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

/* Max Profit: Given a list of stock prices each day, find the biggest profit that could be made by buying low and selling high only once (i.e.) Difference between the cheapest price you could have bought the stock and the most expensive price you colud have sold it later on */
function maxProfit(prices) {
  let maximumProfit = 0;
  let buyingPrice = prices[0];
  let sellingPrice = 0;

  for (let i = 0; i < prices.length; i++) {
    let currentBuyingPrice = prices[i];
    let currentMaximumProfit = 0;
    for (let j = i + 1; j < prices.length; j++) {
      let currentSellingPrice = prices[j];
      let currentProfit = currentSellingPrice - currentBuyingPrice;
      console.log("currentProfit:", currentProfit);
      if (currentProfit > currentMaximumProfit) {
        currentMaximumProfit = currentProfit;
        sellingPrice = currentSellingPrice;
      }
    }
    console.log("currentMaximumProfit:", currentMaximumProfit);
    if (currentMaximumProfit > maximumProfit) {
      maximumProfit = currentMaximumProfit;
      buyingPrice = currentBuyingPrice;
    }
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
  }

  // for (let i = 1; i < prices.length; i++) {
  //   const currentPrice = prices[i];
  //   buyingPrice = Math.min(buyingPrice, currentPrice);
  //   const currentProfit = currentPrice - buyingPrice;
  //   console.log(
  //     "currentPrice:",
  //     currentPrice,
  //     "buyingPrice:",
  //     buyingPrice,
  //     "currentProfit:",
  //     currentProfit
  //   );
  //   if (currentProfit > maximumProfit) {
  //     maximumProfit = currentProfit;
  //     sellingPrice = currentPrice;
  //     console.log(
  //       "sellingPrice:",
  //       sellingPrice,
  //       "maximumProfit:",
  //       maximumProfit
  //     );
  //   }
  // }

  console.log(
    "buyingPrice:",
    buyingPrice,
    "sellingPrice:",
    sellingPrice,
    "maximumProfit:",
    maximumProfit
  );
}
const stockPrices = [7, 1, 5, 3, 6, 4];
// const stockPrices = [7, 5, 6, 3, 1, 2];
// const stockPrices = [7, 6, 5, 3, 2, 2];
// const maximumProfit = maxProfit(stockPrices);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// Array Chunks
function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);

    // if (chunk.length === size)
    chunks.push(chunk);
  }
  console.log(chunks);
}
// chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
// chunkArray([1, 2, 3, 4, 5], 2);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

/* Two Sum: Given a list of numbers and a target sum, find the two numbers in that list that add up to the target number, also find the index of those two numbers */
function twoSum(arr, target) {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log(
          `Num1: ${arr[i]}, Index1: ${i} \nNum2: ${arr[j]}, Index2: ${j}`
        );
        pairs.push([arr[i], arr[j]]);
        // Terminates with first found pair
        // return true;
      }
    }
  }
  console.log(pairs);
  if (pairs.length === 0) console.log("No Pairs Found");
}

// twoSum([2, 21, 7, 11, 15], 9);
// twoSum([2, 4, 7, 11, 5, 15], 9);
// twoSum([2, 21, 11, 15], 9);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
