// classes usually start with a capital letter
class Person {
    // private id: string;
    // private name: string;
    // Private properties can only be accessed inside the class that defines them
    // Protected properties can be accessed by classes that inherit, or "extends", from the class that defines them
    protected people: string[] = [];
    // Readonly properties can only be set in the constructor
    constructor(private readonly id:string, private name:string) {
        this.name = name;
    }

    // "this" is a special keyword in typescript, it refers to the object that is executing the method
    describe(this: Person) {
        console.log('Person: ' + this.name);
    }

    addPerson(person: string){
        this.people.push(person);
    }

    printPeople(){
        console.log(this.people.length);
        console.log(this.people);
    }

}

// Inheritance in typescript is done with the "extends" keyword
// The derived class inherits all the properties and methods of the base class
// The derived class can also have its own properties and methods that we can add
class Student extends Person {
    public admins: string[]; // admins is a property of the Student class
    public classes: string = '';

    get mostRecentClass(){
        if(this.classes){
            return this.classes;
        }
        throw new Error('No classes found.');
    }

    set mostRecentClass(value: string){
        if(!value){
            throw new Error('Please pass in a valid value!');
        }
        this.addClasses(value);   
    }

    constructor(id:string, admins: string[]){
        // Super calls the constructor of the base class
        super(id, 'Student');
        this.admins = admins || [];
    }

    addAdmin(admin: string){
        this.admins.push(admin);
    }
    
    addClasses(classes: string){
        this.classes = classes;
    }

    printAdmins(){
        console.log(this.admins);
    }
}

const student = new Student('s1',['Jamil','Milsin']);

const person = new Person('p1','Jamil');

//  No compilation errors, but  the object personCopy is created with an object literal
//  Not based on the "Person" class, so it doesn't have the describe method yet, because 
//  it points to the describe method of the Person class

// "this" tipically refers to the object that is executing the method, but in this case
// it's not the case, because the object that is executing the method is personCopy, but
// the method is defined in the Person class, so "this" refers to the Person class, not
// to the personCopy object
const personCopy = {id:"p2" ,name: "God Milsin", describe: person.describe.bind(person) };

personCopy.describe();
