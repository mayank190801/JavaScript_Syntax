//Loops for sure now hehehehe
//let's go through them asap bruh

//for loop
for (let i = 3; i < 5; i++) {
  console.log(i);
}

//for of loop  //built to work for arrays
let num = [1, 23, 4, 5];
for (const el of num) {
  console.log(el);
}

//for in loop  //built to work for objects
const logObj = {
  name: "Mayank",
  age: 12,
  game: "Volleyball",
};

console.log(logObj.name); //outside it working but inside it is giving undefined
for (const key in logObj) {
  console.log(key);
  console.log(logObj[key]); //inside this [] it has to be string always, different syntx for accessing properties
}

//while loop
let val = 5;
while (val-- > 0) {
  console.log(val);
}

//do while loop
val = 6;
do {
  console.log(val);
} while (val-- > 5);
