const person: {
  name: string;
  age: number;
  nickname: string;
} = {
  name: "paul",
  age: 30,
  nickname: "pol",
};

console.log(person.name);

person.name = "asdf";

console.log(person.name);

// nested object types
const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};
