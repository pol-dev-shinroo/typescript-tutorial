interface IsPerson {
  name: string; // readonly modifier is also possible in type
  age: number;
}

interface IsHappy extends IsPerson {
  happy: boolean;
}

// private + public is not possible on interface + type

class Person implements IsHappy {
  name: string;
  age: number;
  happy: boolean;

  constructor(name: string, age: number, happy: boolean) {
    this.name = name;
    this.age = age;
    this.happy = happy;
  }
  changeName(name: string) {
    this.name = name;
  }
}

const user1 = new Person("john", 11, false);

console.log(user1.age);
console.log(user1.name);
user1.changeName("paul");
console.log(user1.name);

user1.age = 22;
user1.name = "asdf";
