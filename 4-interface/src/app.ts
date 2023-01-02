interface Greetable {
  name: string;

  greet: (phrase: string) => void;
}

interface IsHappy {
  happy: boolean;

  amHappy: () => void;
}

class Person implements Greetable, IsHappy {
  name: string;
  age = 3;
  happy: boolean;
  constructor(n: string, ishappy: boolean) {
    this.name = n;
    this.happy = ishappy;
  }

  greet(phrase: string) {
    console.log(`${phrase}, ${this.name}`);
  }

  amHappy() {
    console.log(`${this.name} is ${this.happy ? "happy" : "unhappy"}`);
  }
}

let user1 = new Person("Paul", false);
console.log(user1);
user1.amHappy();
