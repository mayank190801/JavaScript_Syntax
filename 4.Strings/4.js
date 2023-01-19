//Some exercise for us
const guessList = "Our guests are : mayank, diksha, sanvi, Avni";

const len = guessList.length;
const upper = guessList.toUpperCase();
const lower = guessList.toLowerCase();

//ETHAN is on the uppercase list, check that
const present = upper.includes("MAYANK");
console.log(present);

//create a substring that only contains names
const leftStr = upper.slice(upper.indexOf("MAYANK"));
console.log(leftStr);

//make an array of peopel names
const names = leftStr.split(", ");
console.log(names);
