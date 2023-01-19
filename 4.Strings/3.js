//Reversing an array for you bois

//method 1
let str = "this should be reversed for us!!";
let demo = "";
for (let i = str.length - 1; i >= 0; i--) {
  demo += str[i];
}

console.log(demo);

//method 2
let rev = str.split("").reverse().join("");
console.log(rev);

//repeat();
const dogSays = "woof";
console.log(dogSays.repeat(5));

//trim();
const example = "  hellow   world  ";
console.log(example.trim()); //trims extra space from start and end for us
