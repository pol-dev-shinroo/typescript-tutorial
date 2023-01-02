// typescript is also able to infer the return type // or specify the return type as so
const add = (n1: number, n2: number): number => {
  return n1;
};

// if a function does not return => it is void type
const printResult = (n: number) => {
  console.log("result" + n);
};

// if you deliberatly set no return
const test = (n: number): void => {};

// this is not the same as undefined.
// const hi = (n: number): undefined => {};

// for this to work you need to return undefined
const fix = (n: number): undefined => {
  return undefined;
};

// returns undefined => printResult is void
printResult(add(1, 2));
// console.log(printResult(add(1, 2)));

let someValue: undefined;
