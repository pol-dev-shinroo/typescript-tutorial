// abstract class => a class that can't be instantiated, but has to be extended
abstract class Department {
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

  // enforce that this method should be created in the instances
  abstract myFunc(this: Department): void;

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
  myFunc() {
    console.log("hello");
    return "hello";
  }
}

const IT = new ITDepartment("it", "2", ["asdf", "asdfasdf"]);
console.log(IT);

IT.describe();
console.log(IT.admins);
