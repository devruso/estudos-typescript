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