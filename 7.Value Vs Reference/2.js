//Shallow and deep cloning

//deep cloninng required for objects inside objects - important

const person = {
  name: "Mayank",
  age: 123,
  car: {
    model: "buggati",
    price: 123123,
    color: "red",
  },
};

const stringifyPerson = JSON.stringify(person);
const newPerson = JSON.parse(stringifyPerson);

person.car.model = "auto";

//hence deep cloning for objects achieved bruh!!
console.log(stringifyPerson);
console.log(newPerson);
