// classes usually start with a capital letter
abstract class Person {
    // private id: string;
    // private name: string;
    // Private properties can only be accessed inside the class that defines them
    // Protected properties can be accessed by classes that inherit, or "extends", from the class that defines them
    protected people: string[] = [];
    // Readonly properties can only be set in the constructor
    constructor(protected readonly id:string, protected name:string) {
        this.name = name;
    }
    // Static methods can be called without instantiating the class
    static createPerson(id: string, name: string){
        return {id: id, name: name};
    }

    // "this" is a special keyword in typescript, it refers to the object that is executing the method
    abstract describe(this: Person): void;

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
    private static instance: Student;

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
    // Singleton pattern
    // Private constructors can only be called inside the class
    // It's a good practice to make the constructor private when using the singleton pattern
    private constructor(id:string, admins: string[]){
        // Super calls the constructor of the base class
        super(id, 'Student');
        this.admins = admins || [];
    }

    static getInstance(){
        if(this.instance){
            return this.instance;
        }
        this.instance = new Student('s1',['Jamil','Milsin']);
        return this.instance;
    }

    describe(){
        console.log('Student: ' + this.id + ' ' + this.name);
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

const person1 = Person.createPerson('p1','Jamil');

const student = Student.getInstance();

student.addPerson('Jamil');

// the method is defined in the Person class, so "this" refers to the Person class, not
// to the personCopy object
const personCopy = {id:"p2" ,name: "God Milsin", describe: Person.prototype.describe };

