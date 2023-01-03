const Logger = (constructor: Function) => {
  console.log("logging");
  console.log(constructor);
};

@Logger
class Person {
  name = "Max";
  constructor() {
    console.log("creating person object");
  }
}

const pers = new Person();
