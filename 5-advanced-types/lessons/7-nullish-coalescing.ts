const userInput = "";

const storedData = userInput ?? "Default"; // as opposed to "||"" => will return default if "" or undefined or null
// ?? returns default if null or undefined ("" is fine)

console.log(storedData);
