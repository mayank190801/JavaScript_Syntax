//object is an unordered collection of data in form of key and value pairs

const person = {
  name: "Mayank",
  last: "Singh",
  age: 40,
  car: {
    brand: "Ferrari",
    price: 123123123,
  },
  greet: () => {
    console.log(this.name);
  },
};

console.log(person);

//DOT operator
console.log(person.name);
person.dog = { name: "tuffy", age: 123 };

console.log(person.dog.name);

//Square Bracket Notation -- helps in dynamic access bruh
console.log(person["name"]);
const property = "age";
console.log(person[property]);

//later figure this out
person.greet(); //somehow this bad boy is returning undefined for no freakin reasons! Figure this out
