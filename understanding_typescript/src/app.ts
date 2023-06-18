// Interfaces describes the structure of an object
interface Person {
    name: string;
    age: number;

    greet(phrase :string) :void; // method
}

// Custom types, similar to data structures in C

let user1:Person; // user1 is of type Person

user1 = {
    name: 'Jamil',
    age: 25,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}
