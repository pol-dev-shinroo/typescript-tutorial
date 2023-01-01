const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "paul",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"], // tuple
};

let arr: { key: string }[];

arr = [{ key: "hio" }];

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleLowerCase());
}
