//setInterval
// const myInterval = setInterval(() => {
//     console.log("Wassup");
//   }, 1000);

//The above code keep on repeating again and again until clearInterval stops it

//Example of Asynchornous JS

const function1 = () => {
  console.log("line1");
  function2();
  console.log("line2");
};

const function2 = () => {
  setTimeout(() => {
    console.log("Wassup");
  }, 1000);
};

function1();

//This all happens because of event loop and shit
