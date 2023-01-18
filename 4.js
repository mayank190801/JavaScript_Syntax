//Using arrays baby

let logEntries = [];

logEntries.push(23);
logEntries.push(3);
logEntries.push(2);

console.log(logEntries[1]); //indexing in arrays in javaScript

//using objects and stuff
const logEntry = {
  name: "game",
  age: 213,
  greet() {
    console.log("woah");
  },
};

logEntries.push(logEntry);
console.log(logEntries);

let age = logEntry.age;
logEntry.greet();
