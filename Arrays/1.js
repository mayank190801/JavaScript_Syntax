//now working with arrays boss
const months = ["jan", "feb", "march"];
console.log(months);

//arrays are indeed objects --
console.log(months[0]);
months[1] = "mayank"; //changing the array element

months[6] = "random";
console.log(months);
console.log(months[5]); //this gives undefined remember that

const len = months.length; //knowing the len

for (let i = 0; i < months.length; i++) {
  console.log(months[i]);
}
