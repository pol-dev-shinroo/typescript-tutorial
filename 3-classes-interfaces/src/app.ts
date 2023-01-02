class Department {
  // id: string;
  // name: string;
  private isListed: boolean;
  private employees: string[] = [];
  // if readonly => cannot change this through methods
  constructor(private readonly name: string, private id: string) {
    // this.name = n;
    // this.id = id;
    this.isListed = true;
  }
  describe(this: Department) {
    // makes sure this is the instance of Department
    console.log(this.name);
  }
  // private => only accessible within department
  addEmployee(employee: string) {
    this.employees.push(employee);
    // this.name = "2";
  }
  printEmployee() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting", "2");

accounting.addEmployee("df");

accounting.printEmployee();
