console.log("It works");

//DOM is tree of nested elements
//Not to be more focused on it, we don't need to learn this DOM
const el = document.getElementById("element-below-input");
//The above method return a single element

const el1 = document.getElementsByTagName("h1");
//The above returns an array!!

const el2 = document.getElementsByClassName("className");

console.log(el);
console.log(el1);
console.log(el2);

el.classList; //--- returns all the classes inside that element
el.id; //can access the id of the element
el.innerHTML; //can look at the inner text of that element

const button = document.querySelector("button");
console.log(button);

button.addEventListener("click", () => {
  //now we can tell what would happen once someone clicks the button
  console.log("Someone clicked me");
});

//So there are multiple things you could do
//Play with classes, make your own html element,
