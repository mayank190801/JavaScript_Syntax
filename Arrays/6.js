//Arrays sort

//this changes the original array!! - simple
const states = ["india", "mumbai", "nilgeria", "mayank", "sanvi", 1, 2, 3];

//we can have our own shit in here - you know this shit
states.sort((a, b) => {
  return a - b;
});
console.log(states);
