class Department {
  // access without instantiating
  static year = 2020;
  private isListed: boolean;
  protected employees: string[] = [];
  // if readonly => cannot change this through methods
  constructor(private readonly name: string, public id: string) {
    this.isListed = true;
    this.id = id;
  }
  // to enable using methods without instantiating
  static createEmployee(name: string) {
    return { name: name };
  }

  describe(this: Department) {
    // makes sure this is the instance of Department
    console.log(this.name);
  }
  // private => only accessible within department
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployee() {
    console.log(this.employees.length);
    console.log(this.employees);
    // console.log(this.year); // this is not possible
    console.log(Department.year);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(Department.year);

console.log(employee1);
