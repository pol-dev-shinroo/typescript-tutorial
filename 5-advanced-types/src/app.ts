const button = document.querySelector("button");

// const userInput = <HTMLInputElement>document.getElementById("user-Input")!;
// const userInput = document.getElementById("user-Input")! as HTMLInputElement;
const userInput = document.getElementById("user-Input");

if (userInput) {
  (userInput as HTMLInputElement).value = "Hi there";
}

// userInput.value = "Hi there";
