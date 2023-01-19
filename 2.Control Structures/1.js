// == , != , >= , <= , > , < , === , !
//== and === , is that the latter one should be exactly same!!
//PREFER === always please
let num = 3;

if (num > 5) {
  console.log("I am greater than 5");
} else if (num < 3) {
  console.log("I am lesser than 3");
} else {
  console.log("I am somewhere in between");
}

//AND OR  , && , ||
let name = "Mayank";
if (name === "Mayank" || name === "Sanvi") {
  console.log("in love");
}

//Ternary operator
let userName = num > 5 ? "Mayank" : "Singh";
console.log(userName);
