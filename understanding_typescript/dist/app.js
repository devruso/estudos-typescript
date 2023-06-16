"use strict";
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.people = [];
        this.name = name;
    }
    describe() {
        console.log('Person: ' + this.name);
    }
    addPerson(person) {
        this.people.push(person);
    }
    printPeople() {
        console.log(this.people.length);
        console.log(this.people);
    }
}
class Student extends Person {
    get mostRecentClass() {
        if (this.classes) {
            return this.classes;
        }
        throw new Error('No classes found.');
    }
    set mostRecentClass(value) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addClasses(value);
    }
    constructor(id, admins) {
        super(id, 'Student');
        this.classes = '';
        this.admins = admins || [];
    }
    addAdmin(admin) {
        this.admins.push(admin);
    }
    addClasses(classes) {
        this.classes = classes;
    }
    printAdmins() {
        console.log(this.admins);
    }
}
const student = new Student('s1', ['Jamil', 'Milsin']);
const person = new Person('p1', 'Jamil');
const personCopy = { id: "p2", name: "God Milsin", describe: person.describe.bind(person) };
personCopy.describe();
//# sourceMappingURL=app.js.map