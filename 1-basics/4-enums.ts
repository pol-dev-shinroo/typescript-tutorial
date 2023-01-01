// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN, // 0
  READ_ONLY, // 1
  AUTHOR = 100, // 100
}

const person = {
  name: "paul",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"], // tuple
  test: Role.ADMIN,
};

let arr: { key: string }[];

arr = [{ key: "hio" }];

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleLowerCase());
}

if (person.test === Role.ADMIN) {
  console.log("hi");
}

console.log(Role.AUTHOR);
