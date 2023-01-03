// first example

type Combinable = string | number;

type Numeric = number | boolean;

type Universal = Combinable & Number;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

add(1, 2);

// second example

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name" + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges" + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("StartDate" + emp.startDate);
  }
}

const el: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

printEmployeeInformation({ name: "hello", privileges: [""] });

// third example

class Car {
  drive() {
    console.log("Driving");
  }
}
class Truck {
  drive() {
    console.log("Driving a Truck");
  }
  loadCargo(amount: number) {
    console.log("loading cargo" + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle) {
  //   vehicle.loadCargo(1000);
  // }

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
