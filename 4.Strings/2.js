//how to get a substring of a string
//slice() pretty good
const str = "HotDog";

const sliced = str.slice(0, 5);
console.log(sliced);

//Split a string
const exampleStr = "Dog";
console.log(exampleStr.split("")); //this returns an array!! always remember that

const estr = "Quick brown fox jumps from a dog";
console.log(estr.split(" ")); //array of different words
