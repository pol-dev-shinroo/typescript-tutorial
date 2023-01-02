// type Add = (a: number, b: number) => number;

// alternative to type is using an interface

interface Add {
  (a: number, b: number): number;
}

let add: Add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));
