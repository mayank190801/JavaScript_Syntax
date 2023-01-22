//Best way would be to use Async and Await for sure
//Let's look at it once

//Async functions returns promises
//await always needs to be inside an async function

//This async function returns promises ---- IMPORTANT LINE
const fetchNumber = async () => {
  return 25; //this is returning a promise!!! because it is an async function
};

//1st method
//You call the functions and works with the promises
fetchNumber().then((num) => {
  console.log(num + 5);
});

//2nd method
//Or you can simply use await concept as well, with async
const consoleFetcher = async () => {
  const num = await fetchNumber();
  console.log(num);
};

consoleFetcher();

//Work more with how asynchronous code works in here
