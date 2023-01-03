// property decorator
const Logger = (target: any, propertyName: string | Symbol) => {
  console.log(target, propertyName);
};

// accessor decorator
const Logger2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
  console.log("logger2");
  console.log(target);
  console.log(name);
  console.log(descriptor);
};

// method decorator
const Logger3 = (
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) => {
  console.log(target);
  console.log(name);
  console.log(descriptor);
};

// param decorator
const Logger4 = (target: any, name: string, position: number) => {
  console.log(target);
  console.log(name);
  console.log(position);
};

class Product {
  @Logger
  title: string;
  private _price: number;

  @Logger2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Logger3
  getPriceWithTax(@Logger4 tax: number) {
    return this._price * (1 + tax);
  }
}
