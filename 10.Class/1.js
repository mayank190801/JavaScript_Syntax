class Person {
  constructor(name, age, working) {
    this.name = name;
    this.age = age;
    this.working = working;
  }
}

//Some how the same behaviour can be done using functions for freaking sake!!
//How fucking weird is that, please please look into it, it is giving me next level anxiety

const user = new Person("Mayank", 123, "Software Engineer");
console.log(user);

//So now you cna make
const createPerson = (name, age, working) => {
  const userSchema = {
    name: name,
    age: age,
    working: working,
  };

  return userSchema;
};

const user2 = createPerson("Sanvi", 18, "Studnet");
console.log(user2);
