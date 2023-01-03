// const merge<T, U> = (obj1: T, obj2: U) => {
//   return Object.assign(obj1, obj2);
// };
function merge<A extends object, U extends object>(obj1: A, obj2: U) {
  return Object.assign(obj1, obj2);
}

// console.log(merge({ name: "asdf" }, { age: 2 }));

const mergedObj = merge({ name: "asdf", new: 2 }, { age: 2 });

console.log(mergedObj.age);
