//Object methods
//OBJECT being the class and all these being the static methods - hehehehehe

const employee = {
  boss: "Mauank",
  bos: "Singh",
  secretatry: "random",
  random: 123,
};

const pos = Object.keys(employee);
const values = Object.values(employee);
const entries = Object.entries(employee);

console.log(pos);
console.log(values);
console.log(entries);

//Object.freeze() no modifications could be done inside that object - simple
const user = {
  name: "mayuank",
  password: "123123",
};

Object.freeze(user); //does return a new objec tho, but modified the current one as well
user.name = "mayankksdjfls"; //this modification didn't happen because the object is freezed boi

console.log(user);

//Object.seal() no addition, but allows modifications
const user1 = {
  name: "random",
  password: 1,
};

const sadmin = Object.seal(user1); //does return a new objec tho, but modified the current one as well

sadmin.password = "ljaslkdfjlasjdflj";
sadmin.nfeature = 123;

console.log(sadmin);
