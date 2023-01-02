let userInput: unknown;
let userName: string;

userInput = 3;
userInput = "Max";

// variable initially set to type unknown accepts any value types
// however assigning unknown type to string, for example, is not possible because unknown is not string
// but with any is fine

if (typeof userInput === "string") {
  userName = userInput;
}

// unknown is better than any type

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError("Hello Error", 300);
console.log(result); // this will "never" returns anything (void is still the inferred type, if you dont explicitly say never is the type)
