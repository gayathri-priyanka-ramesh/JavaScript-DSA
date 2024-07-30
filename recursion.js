/* Recursion: It is when a function calls itself, but it doesn't call itself exactly the same way each time
              The function makes the problem smaller by changing the input a bit

        Base Case -> The simple case that the function can solve without calling itself again
                     As long as it's not the base case, the function will call itself with the smaller problem

*/

function countDown(num) {
  if (num === 0) return `${num} - CountDown Stops`;
  console.log(num);
  return countDown(--num);
}
const count17 = countDown(17);
console.log("count17:", count17);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

function factorial(num) {
  //   return num === 0 ? 1 : num * factorial(num - 1);

  if (num === 0) {
    console.log("num:", num, "--- fact:", 1);
    return 1;
  }
  const fact = num * factorial(num - 1);
  console.log("num:", num, "--- fact:", fact);
  return fact;

  return num * factorial(num - 1);
}
// const factorial = (num) => (num === 0 ? 1 : num * factorial(num - 1));
const factorial5 = factorial(5);
console.log("factorial5:", factorial5);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
