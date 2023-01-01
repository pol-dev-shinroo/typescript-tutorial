function add(a: number, b: number, showResult: boolean, phrase: string) {
  // if (typeof a !== "number" || typeof b !== "number") {
  //   // throw new Error("Incorrect input!");
  // }

  const result = a + b;
  if (showResult) {
    console.log(phrase + "" + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 3;
const number2 = 2.8;
const printResult = true;
let resultPhrase: number | string = "Result is";
resultPhrase = 3;
resultPhrase = "33";

add(number1, number2, printResult, resultPhrase);
