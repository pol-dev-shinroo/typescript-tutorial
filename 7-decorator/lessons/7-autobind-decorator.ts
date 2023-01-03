function AutoBind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "this works";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
p.showMessage();

const button = document.querySelector("button")!;

// this returns undefined
// button.addEventListener("click", p.showMessage);

// you need to do this to work...
// button.addEventListener("click", p.showMessage.bind(p));

// with autobind decorator this now works
button.addEventListener("click", p.showMessage);
