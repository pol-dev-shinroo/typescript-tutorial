const Logger = (logString: string) => {
  console.log("logger");
  return function (constructor: Function) {
    console.log("logger function");
    console.log(constructor);
    console.log(logString);
  };
};

const WithTemplate = (template: string, hookId: string) => {
  return (constructor: any) => {
    console.log("template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    console.log(p.name);
    if (hookEl) {
      console.log("template function");
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
};
// !!! in multiple decorators, the logger itself is executed top-bottom, however, the decorator function are executed bottom-up
@Logger("Hello")
@WithTemplate(`<h1>Hello World</h1>`, "hello")
class Person {
  name = "Max";
  constructor() {
    console.log("creating person object");
  }
}

// const pers = new Person();
