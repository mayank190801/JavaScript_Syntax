//Foreach method!!!
const names = ["Mayank", "Sanvi", "Diksha", "Random"];

//normal
for (let i = 0; i < names.length; i++) {
  console.log(i, names[i]);
}

names.forEach((value, i) => {
  //you can get the value and index in here!!
  console.log(value, i);
});

//it return undefined!!! Important!!! Always returns undefined
