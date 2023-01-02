// type Add = (a: number, b: number) => number;

// alternative to type is using an interface

interface Add {
  (a?: number, b?: number): void;
}

let add: Add = (a, b) => {
  if (a && b) {
    return a + b;
  }
};

interface Person {
  name?: string;
}

class Me implements Person {
  name?: string;

  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }
}

const paul = new Me("d");

console.log(add(1, 2));
