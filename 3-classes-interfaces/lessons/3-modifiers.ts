class Department {
  name: string;
  private employees: string[] = [];
  constructor(n: string) {
    this.name = n;
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
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee("df");

accounting.printEmployee();
