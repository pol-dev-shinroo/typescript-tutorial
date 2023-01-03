// now the decorator will be executed only when instantiating the class
const WithTemplate = (template: string, hookId: string) => {
  return <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) => {
    // create new constructor
    return class extends originalConstructor {
      constructor(..._args: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        // const p = new originalConstructor();

        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
};

@WithTemplate(`<h1>Hello World</h1>`, "hello")
class Person {
  name = "Max";
  constructor() {
    console.log("creating person object");
  }
}

const pers = new Person();
