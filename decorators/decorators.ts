// decorators usually start with a capital letter
// decorators are just functions
function Logger(constructor: Function) {
    console.log("Logging...");
    console.log(constructor);
}

function withTemplate(template: string, hookId: string) {
    return function (_: Function) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    }
}

class Person{
    name = "Jamil";

    constructor(){
        console.log("Creating person object...");
    }
}

const person = new Person();

console.log(person.name);


function Log(target: any, propertyName:string | Symbol){
    console.log("Property decorator!");
    console.log(target, propertyName);
}
// decorators can also be used on accessors and methods
// propertyDescriptor is a built-in type that allows us to access the property descriptor of a property
// property descriptor is an object that allows us to configure a property
// we can use it to make a property read-only, for example
function Log2(target: any, name: string, descriptor: PropertyDescriptor){
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor){
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number){
    console.log("Parameter decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title:string;
    private _price: number;

    set price(val:number){
        if(val > 0){
            this._price = val;
        }else{
            throw new Error("Invalid price - should be positive!");
        }
    }

    constructor(t: string, p:number) {
        this.title = t;
        this._price = p;
}

    getPriceWithTax(tax: number) {
        return this.price * (1 + tax);
    }

}