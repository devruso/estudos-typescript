type Admin = {
    name:string,
    privileges:string[]
}

type Employee = {
    name:string,
    startDate: Date
}
// similar to interface inheritance
type advancedEmployee = Admin & Employee; // intersection type

let e1: advancedEmployee = {
    name : 'Jamil',
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // intersection type

// Type guards are used to check the type of a variable before using it in a function
function add(a:Combinable, b:Combinable){
    // this if statement is a type guard
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}

type unknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: unknownEmployee){
    console.log('Name: ' + emp.name);
    // type guard
    // in keyword checks if a property exists in an object
    if('privileges' in emp){
        console.log('Privileges: ' + emp.privileges);
    }
    if('startDate' in emp){
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInformation(e1);

class Car {
    drive(){
        console.log('Driving...');
    }
}

class Truck {
    drive(){
        console.log('Driving a truck...');
    }
    loadCargo(amount: number){
        console.log('Loading cargo...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();

const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    // type guard
    // instanceof checks if an object is an instance of a class
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}