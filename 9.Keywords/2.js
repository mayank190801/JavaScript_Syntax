//The "this" keyword

const person = {
  name: "Mayank",
  age: 123,
  greet() {
    //this function also works with this!! (only arrow function doesn't work in here)
    console.log(this.name, this.age);
    console.log(this);
  },
};

//from function also we can create new word and make something out of it!! (look into it when you have to)
//otherwise simple ignore it bruh - you want to learn React, so focus on that

person.greet();
//So basically in above this refers to the person object, the object it is present in
//Javascript is moving towards functional programming (amazing stuff)
