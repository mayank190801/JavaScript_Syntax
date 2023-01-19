//Arrays find!!

const states = ["india", "mumbai", "nilgeria"];

//this returns only one element, the first found yet - if not then returns undefined
const state = states.find((value, i) => {
  return value.startsWith("z");
});

console.log(state);

//Array includes
const array1 = [1, 2, 3, 4];
console.log(array1.includes(3));
console.log(states.includes("indiaa"));
