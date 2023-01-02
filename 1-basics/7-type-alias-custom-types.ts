type Combine = number | string;
type ConversionType = "as-number" | "as-text";

function add(n1: Combine, n2: Combine, resultConvert: ConversionType) {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConvert === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const ans = add(30, 24, "as-number");
const ans2 = add(30, 24, "as-text");
const myName = add("paul", "kim", "as-text");
console.log(ans);
console.log(ans2);
console.log(myName);
