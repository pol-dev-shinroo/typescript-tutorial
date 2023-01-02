type A = {
  name: string;
  age: number;
};

type B = {
  name: string;
  arr: string[];
  date: Date;
};

type C = A & B;

const a: C = {
  name: "john",
  age: 12,
  arr: ["hello"],
  date: new Date(),
};

interface AI {
  name: string;
  age: number;
}

interface BI {
  name: string;
  arr: string[];
  date: Date;
}

interface CI extends AI, BI {}

const ai: CI = {
  name: "john",
  age: 12,
  arr: ["hello"],
  date: new Date(),
};

type NewA = string | number;
type NewB = number | boolean;

type NewC = NewA & NewB;
// type => number
