const Logger = (logString: string) => {
  return function (constructor: Function) {
    console.log("logging");
    console.log(constructor);
    console.log(logString);
  };
};

@Logger("Logging-Person")
class Person {
  name = "Max";
  constructor() {
    console.log("creating person object");
  }
}

// const pers = new Person();
