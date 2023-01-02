function add(
  n1: number | string,
  n2: number | string,
  resultConvert: "number" | "string"
) {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConvert === "number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const ans = add(30, 24, "number");
const ans2 = add(30, 24, "string");
const myName = add("paul", "kim", "string");
console.log(ans);
console.log(ans2);
console.log(myName);
