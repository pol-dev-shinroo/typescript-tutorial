class Department {
  // id: string;
  // name: string;
  private isListed: boolean;
  // protected allows accessing from inherited class (instances), whereas not possible using private
  protected employees: string[] = [];
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

class ITDepartment extends Department {
  private test: string;

  // able to access private property
  get getTest() {
    return this.test;
  }
  set setTest(value: string) {
    this.test = value;
    this.changeTest("change");
  }
  constructor(name: string, id: string, public admins: string[]) {
    super(name, id);
    this.admins = admins;
    this.test = "asdf";
  }
  readEmployees() {
    return this.employees;
  }
  // other way to access private property is using methods
  readTest() {
    return this.test;
  }
  changeTest(value: string) {
    this.test = value;
  }
}

const IT = new ITDepartment("it", "2", ["asdf", "asdfasdf"]);
console.log(IT.getTest);
console.log(IT.readTest());
IT.setTest = "asdf";
console.log(IT.getTest);
