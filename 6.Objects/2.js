//Object Methods

//so basically if you want to use this inside the object
const myObj = {
  name: "Mayank",
  age: 123,
  bark: function () {
    //you have to use this format of function, rather than arrow one
    console.log(this.name, this.age);
  },
};

const myObj1 = {
  name: "Mayank",
  age: 123,
  bark: () => {
    //you have to use this format of function, rather than arrow one
    console.log(this.name, this.age);
  },
};

myObj.bark();
myObj1.bark();
