class Department {
  // id: string;
  // name: string;
  private employees: string[] = [];
  constructor(private name: string, private id: string) {
    // this.name = n;
    // this.id = id;
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

const accounting = new Department("Accounting", "2");

accounting.addEmployee("df");

accounting.printEmployee();
