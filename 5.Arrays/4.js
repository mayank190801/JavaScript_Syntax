const names = ["Mayank", "Sanvi", "Diksha", "Random"];

//Array Map
///returns new array
const newNames = names.map((value, i) => {
  return value + " adding some stuff"; //return the actual updated value
});

console.log(names);
console.log(newNames);

//Array Filter
//returns new array
const startWithM = names.filter((value, i) => {
  return value.startsWith("M"); //returns boolean, whether we should take value or not?
});

console.log(names);
console.log(startWithM);
