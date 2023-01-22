//Value vs Reference -- I kinda know what this is gonna be all about for sure

//Cloning arrays
//spread operator - 1st method
//slice method - 2nd method

const numbers = [1, 2, 3, 4, 5];
const newNumber = [...numbers]; //completely copies all the elements into new array
const nnNumber = numbers.slice(); //completely copies all the elements into new array

numbers.push(1);

console.log(numbers);
console.log(newNumber);
console.log(nnNumber);

//Cloning Objects

//spread operator - 1st method
//Object assign - 2nd method - not much used, check it online if you want to
const user = {
  name: "mayank",
  age: 123,
};

const user2 = { ...user };
user.name = "sanvi";

console.log(user);
console.log(user2);
