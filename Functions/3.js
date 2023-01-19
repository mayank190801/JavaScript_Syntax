//BECOME A FAN OF THIS FUNCTIONNNNN

//ARROW FUNCTION - try always using this bruhhhh
const arrowFunc = () => {
  console.log("I am an arrow functions");
};

//some extra tricks are there with arrow function
const add = (a, b) => a + b;

//Default arguments
const defaultArgu = (a = "213", b = 123) => {
  console.log(a + " " + b);
};

//You can call a function in one way or another - simple
//Works only for undefined!!, but if you put any other value like null, or 0 would be counted
//Try not to have default arguments before normal arguments!!
defaultArgu();
defaultArgu(12312);
defaultArgu(1, 2);
