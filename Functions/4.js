//REST OPERATOR in Js

//Rest parameter should always be the last parameter
const sumUp = (...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};

console.log(sumUp(1, 2, 4, 5, 6));
console.log(sumUp(1, 2, 4, 5, 6, 7, 8));

//other parameters should always come before
const sumUpWithFewStart = (a, b, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};

//Function with function keyword have arguments keyword connected to them
//Just don't use that before the REST operator was introduced
