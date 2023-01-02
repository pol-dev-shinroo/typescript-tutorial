class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department) {
    // makes sure this is the instance of Department
    console.log(this.name);
  }
}

const accounting = new Department("Accounting");
// console.log(accounting);
accounting.describe();

console.log(accounting.describe);

// this is not possible without describe(this: Department)
const copy = { name: "copy", describe: accounting.describe };
copy.describe();
