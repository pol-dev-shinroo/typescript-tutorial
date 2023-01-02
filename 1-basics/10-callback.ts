const myFunc = (n1: number, n2: number) => {
  return n1 + n2;
};
const myFunc2 = (n1: number) => {
  return n1;
};

// callback=> passing function as parameters

const addHandler = (
  n1: number,
  n2: number,
  cb: (num: number) => number
): number => {
  const result = n1 + n2;
  return cb(result);
};

// addHandler(1, 2, myFunc2);

addHandler(1, 3, (result) => {
  return result;
});
