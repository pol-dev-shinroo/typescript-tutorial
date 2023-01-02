const myFunc = (n1: number, n2: number) => {
  return n1 + n2;
};
const myFunc2 = (n1: string[]) => {
  return n1;
};

// let clone;

// clone = myFunc;
// clone = 3;

// // this passes compilation but will throw run time error
// console.log(clone(1, 2));

// let clone: Function;
let clone: (a: number, b: number) => number; // compatibility check

// clone = myFunc;
clone = myFunc2;
// clone = 3;

console.log(clone(1, 2));
