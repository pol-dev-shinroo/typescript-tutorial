// const Logger = (logString: string) => {
//   return function (constructor: Function) {
//     console.log("logging");
//     console.log(constructor);
//     console.log(logString);
//   };
// };

const WithTemplate = (template: string, hookId: string) => {
  return (constructor: any) => {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    console.log(p.name);
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
};

@WithTemplate(`<h1>Hello World</h1>`, "hello")
class Person {
  name = "Max";
  constructor() {
    console.log("creating person object");
  }
}

// const pers = new Person();
