//Data types
// - Numbers 2, -3, 12.123
// - Strings 'Hi', "Hi", `Hi` (a lil special method)
// - Booleans true/false
// - Objects
// - Arrays (they are also objects bruh)
// - Null and undefined

//------------------------------------------------------------------------------------------------------------

console.log(`${userName} is the name of the guy who is writing the code`); //Template literal
console.log("An error \n" + "This should work no?"); //line break

//------------------------------------------------------------------------------------------------------------

let num = 123 + parseInt(value); //converting to int
let toString = number.toString(); //converting to string

//------------------------------------------------------------------------------------------------------------

// ARRAY - methods
array[index]; //returns a certain value from an array
array.indexOf("value"); //returns the index of the first occurance of that value
array.length; //returns the number of elements in the array
array.join(""); //returns a string of array values
array.push(value); //adds the value to the end of the array
array.pop(); //removes the value from the end of the array
array.unshift(value); //adds the value to the start of the array
array.shift(); //removes the value from the start of the array
array.splice(fromIndex, number_of_elements); //removes the number_of_elements, starting from fromIndex from the array
array.slice(fromIndex, toIndex); //copies a certain part of the array
array.reverse(); //reverse all the elements

//------------------------------------------------------------------------------------------------------------

//creating objects, which could use this ability inside functions
const logEntry = {
  name: "game",
  car: {
    brand: "Ferrari",
    price: 123123123,
  },
};

//making using arrow functions, you can make function using all three methods -- all threee below
const person = {
  greeter() {
    console.log("woah");
  },
  greet: () => {
    console.log(this.name);
  },
  bark: function () {
    //you have to use this format of function, rather than arrow one
    console.log(this.name, this.age);
  },
};

console.log(person.dog.name); //accessing using dot operator
console.log(person["name"]); //dynamic access bruh

//Object methods -- imp --
Object.keys(person); //returns an array of all keys
Object.values(person); //returns an array of all values
Object.entries(person); //returns an doubly array with key values pair
Object.freeze(user); //does return a new objec tho, but modified the current one as well
Object.seal(); //no addition, but allows modifications

//------------------------------------------------------------------------------------------------------------

//null, undefined, NAN -- some imp theory
//undefined - default value of uninitailised variables
//null - never assumed by default , you have to set it
//NAN - not a type, created because of invalid calculations - 3 * 'hi'
//array is just a special type of object
//null is a special type of object
//Nan is special type of number
//undefined is type of undefined
console.log(typeof num); //finding the typeof using this operator

//------------------------------------------------------------------------------------------------------------

// == , != , >= , <= , > , < , === , !
//== and === , is that the latter one should be exactly same!!
//PREFER === always please
// || && and let userName = num > 5 ? "Mayank" : "Singh";  //ternary operator

//------------------------------------------------------------------------------------------------------------

//Switch Statements
switch (val) {
  case 1:
    //code for somethingg
    break;
  default:
  //code for somthing
}

//------------------------------------------------------------------------------------------------------------

//LOOPS - 1st method
for (let i = 3; i < 5; i++) {
  console.log(i);
}

//LOOPS - 2nd method - built to work for arrays
let numero = [1, 23, 4, 5];
for (const el of numero) {
  console.log(el);
}

//LOOPS - 3rd method - built to work with objects
for (const key in logObj) {
  console.log(key);
  console.log(logObj[key]); //inside this [] it has to be string always, different syntx for accessing properties
}

//LOOPS - 4th method - while
let val = 5;
while (val-- > 0) {
  console.log(val);
}

//------------------------------------------------------------------------------------------------------------

//Error Handling
function doesSometing() {
  throw { message: "Doesn't do this bruhl" };
}
//simple logic for handling errors and stuff
try {
  doesSometing();
} catch (error) {
  console.log(error);
} finally {
  //will always happen no matter you had error or not
  console.log("Heyyy finally bruhhhh");
}

//------------------------------------------------------------------------------------------------------------

//Function - 1st method
function greetUser(name) {
  console.log(`${name} + is repeated`);
  return 1;
}

//Function - 2nd method
const start = function () {
  console.log("Start the game");
};

//Function - 3rd method
const arrowFunc = () => {
  console.log("I am an arrow functions");
};

//------------------------------------------------------------------------------------------------------------

//Rest Operator -- pretty dope usage
const sumUpWithFewStart = (a, b, ...numbers) => {
  for (const num of numbers) {
    //do something
  }
};

//------------------------------------------------------------------------------------------------------------

//You can pass function as an argument
const callbackFunc = (resultHandler, ...numbers) => {
  let sum = 213;
  resultHandler(sum);
};
const resultHandler = (sum) => {
  console.log(sum);
};
callbackFunc(resultHandler);

//------------------------------------------------------------------------------------------------------------

// STRING - methods
string[index]; //get a certain character of a string
string.length; //return the number of characters in a string
string.split(" "); //returns an array of words of a string
string.split(""); //returns an array of characters of a string
string.toLowerCase(); //returns a lowercased string
string.toUpperCase(); //returns an uppercased string
string.includes("subtring"); //checks whether a substring exists inside of a string [check the characther case]
string.indexOf("random"); //return the first index of the subtring in the string
string.lastIndexOf("hobbies"); //return the last index of the substring in the string
string.slice(0, 5); //returns the substring of a string
string.repeat(); //return the string repeated that many times
string.trim(); //removes extra space from the start and end

//------------------------------------------------------------------------------------------------------------

const names = ["Mayank", "Sanvi", "Diksha", "Random"]; //demo

//you can get the value and index in here!!
names.forEach((value, i) => {
  console.log(value, i);
});

//Array Map
///returns new array
const newNames = names.map((value, i) => {
  return value + " adding some stuff"; //return the actual updated value
});

//Array Filter
//returns new array
const startWithM = names.filter((value, i) => {
  return value.startsWith("M"); //returns boolean, whether we should take value or not?
});

//Array Find
//this returns only one element, the first found yet - if not then returns undefined
const state = states.find((value, i) => {
  return value.startsWith("z");
});

//Array sort
states.sort((a, b) => {
  return a - b;
});

//some => if atleast one element passes the test
//return boolean
array.some((element) => {
  return element > 3;
});

//every => if all elements passes the test
//return boolean
array.every((element) => {
  return element > 0;
});

//------------------------------------------------------------------------------------------------------------

//Cloning arrays
const numbers = [1, 2, 3, 4, 5];
const newNumber = [...numbers]; //spread operator - 1st method
const nnNumber = numbers.slice(); //slice method - 2nd method

//Cloning Objects (one level & all level)
const user2 = { ...user }; //spread operator - shallow cloning, only top top objects
const stringifyPerson = JSON.stringify(person); //these two below together used for deep cloning of objects inside objects
const newPerson = JSON.parse(stringifyPerson); //one liner - const newUsers = JSON.parse(JSON.stringify(users));

//------------------------------------------------------------------------------------------------------------

//Using new keyword
const person1 = new Object();
const arr2 = new Array(1, 2, 3);
const number1 = new Number(123.123);

//All objects, and all have some methods associated with them, do exploit them
console.log(Array);
console.log(Number);
console.log(Object);
console.log(Date);

//------------------------------------------------------------------------------------------------------------

//Async functions returns promises
//await always needs to be inside an async function
//This async function returns promises ---- IMPORTANT LINE
const fetchNumber = async () => {
  return 25; //this is returning a promise!!! because it is an async function
};

//1st method
//You call the functions and works with the promises
fetchNumber().then((num) => {
  console.log(num + 5);
});

//2nd method
//Or you can simply use await concept as well, with async
const consoleFetcher = async () => {
  const num = await fetchNumber();
  console.log(num);
};

consoleFetcher();

//------------------------------------------------------------------------------------------------------------

//Import and export
export default dogs; //export
import dogs from "./dogs"; //import

export const dogs = ["ran", "flu", "bro"]; //multiple
export const numer = 1231;
import { dogs, numberOfDogs } from "./dogs"; //multiple imports

//Object Destructuring - extremely powerful
const {
  firstName,
  lastName,
  car: { color, wheels },
  animals,
} = person;
