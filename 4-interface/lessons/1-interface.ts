interface Person {
  name: string;
  age: number;
  married: boolean;
  greet: (phrase: string) => void;
}

const user1: Person = {
  name: "John",
  age: 30,
  married: false,
  greet(phrase: string) {
    console.log(phrase, " ", this.name);
  },
};

user1.greet("Hello");

// interface vs type => same but
// 1) interface does not accept union types => they are therefore clearer
// 2) interface are used to describe class (multiple interfaces can be implemented on a Class)
// 3) when implemented on a class => interface set the miminum requirements for the class

// interface is a pure ts feature=> they will not be compiled
type NewPerson = {
  name: string;
};

let user2: NewPerson;

user2 = { name: "john" };
