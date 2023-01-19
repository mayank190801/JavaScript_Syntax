const names = ["mayank", "sanvi", "david", "mark", "random"];

//ARRAY METHODS

//array push
const len = names.push("avni"); //returns lenght after push
console.log(names);

//array pop
const lastElement = names.pop(); //returns the removed value
console.log(names);

//array shift
names.shift(); //removes the first element & returns the first element
console.log(names);

names.unshift("mayank"); //return new length of the array and adds to the first position
console.log(names);

//array splice
names.splice(2, 0, "aslfjasldfjasf", 12312, 11231); //quite useful for adding elements at specific index
console.log(names);

//array slice
const namesSlice = names.slice(1, 3); //slicing the array simple as that
console.log(namesSlice);
