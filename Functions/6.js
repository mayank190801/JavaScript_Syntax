//ALL TRICKY CONCEPTS

let age = null;
console.log(typeof age);

//freakin bug bruh!! JavaScript bug
//typeof null should be null!!! Always remember that

const date = new Date();
console.log(date);
console.log(typeof date);

//statically typed and dynamically typed
//if one declared int then, should always stay integer

//JS is dynamically typed

//closures is pretty cool concept
//I will write the code below for us
const outer = () => {
  const outerVal = "Hello";

  const inner = () => {
    const innerVal = "Hi";
    console.log(outerVal + " " + innerVal);
  };

  return inner;
};

const innerFn = outer();
innerFn();

//As you can see, even if outerVal should have given undefined, it still
//gave some decent output, that means those variables don't complete diminish aways
