// Interfaces describes the structure of an object
// They are useful for forcing a class to implement a certain structure
interface Named {
    readonly name: string;
    outputName?: string; // optional property
}
// Custom function type
interface addFn {
     (a:number, b:number):number;
}

// interfaces can be extended multiple times, different from classes that can only be extended once
interface Greetable extends Named {
    // readonly is for making a property assigned only once
    greet(phrase :string) :void; // method
}

class Person implements Greetable {
        name:string;
        age:number = 25;
        constructor (n:string) {
           this.name = n;
        }

        greet(phrase: string): void {
            console.log(phrase + ' ' + this.name);
        }
}

// Custom types, similar to data structures in C

let user1: Person; // user1 is of type Greetable

user1 = {
    name: 'Jamil',
    age: 25,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}
