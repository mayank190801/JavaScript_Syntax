///clearing some of my doubts
const arr = [{ name: "mayank" }, { name: "random" }];

const narr = [...arr];
arr[0].name = "shaam";

console.log(arr);
console.log(narr);

//hence deep cloning not achieved simple as that! - so you should use those previous methods
//with proper logic to achieve deep cloning inside this bruh
