let userInput: unknown;
let userName: string;

userInput = 3;
userInput = "Max";

userName = userInput;

// variable initially set to type unknown accepts any value types
// however assigning unknown type to string, for example, is not possible because unknown is not string
// but with any is fine

if (typeof userInput === "string") {
  userName = userInput;
}

// unknown is better than any type
