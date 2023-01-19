let str = "Mayank Singh"; //to store text simple as that
let str1 = "Mayank Singh";
let str2 = `Mayank Singh`; //some extended functionality

console.log(str.length);
console.log(str[0]);

//uppercase and lowercase stuff
const mixedCase = "Hello How Are You";
const lowerCase = mixedCase.toLowerCase();
console.log(lowerCase);
const upperCase = mixedCase.toUpperCase();
console.log(upperCase);

//Searching for a substring within a string
const hobbies = "I love HTML, CSS and , HTML JAVASCRIPT";
const pos = hobbies.indexOf("HTML");
console.log(pos);
const lastPos = hobbies.lastIndexOf("HTML");
console.log(lastPos);
const present = hobbies.includes("HTML");
console.log(present);
//startsWith and endsWith methods are also there for our use
