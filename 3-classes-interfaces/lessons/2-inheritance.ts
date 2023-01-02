class Department {
  // id: string;
  // name: string;
  private isListed: boolean;
  private employees: string[] = [];
  // if readonly => cannot change this through methods
  constructor(private readonly name: string, public id: string) {
    // this.name = n;
    // this.id = id;
    this.isListed = true;
    this.id = id;
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
// instantiating
class ITDepartment extends Department {
  constructor(name: string, id: string, public admins: string[]) {
    super(name, id);
    this.admins = admins;
  }
}

const IT = new ITDepartment("it", "2", ["asdf", "asdfasdf"]);
console.log(IT);

IT.describe();
console.log(IT.admins);
