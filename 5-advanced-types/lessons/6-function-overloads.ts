type Combinable = string | number;

type Numeric = number | boolean;

type Universal = Combinable & Number;

function add(a: number, b: number, c: number): number;
function add(a: string, b: string): string; // overloads
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// const result = add("max", 4) as string; // type casting
const result = add("max", "d");
result.split(" ");
