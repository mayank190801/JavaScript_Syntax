//Function inside functions
const sumUp = (a = 1, b = 2, ...numbers) => {
  const validateNumber = (num) => {
    return 123;
  };

  //we can only use above function inside this function only
  const val = validateNumber(123);
  return val;
};

console.log(sumUp());

//Understanding callback functions bruh
//It's called for you, the main concept of callback function

//You can pass function inside a function as an argument
const callbackFunc = (resultHandler, ...numbers) => {
  let sum = 213;
  resultHandler(sum);
};

const resultHandler = (sum) => {
  console.log(sum);
};

callbackFunc(resultHandler);
