interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}
// discriminated union type - type of union that has one common property in each type that can be used to determine the type of the union
type Animal = Bird | Horse;


function moveAnimal(animal: Animal) {
    let speed: number;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed
            break;
    }
    console.log('Moving with speed: ' + speed);
}
// Type Casting - tell typescript that a certain value is of a specific type
// in this case we are telling typescript that the element is an HTMLInputElement
const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;

userInputElement.value = 'Hello my folks!';

// Alternative syntax
const userInputElement2 = document.getElementById('user-input')! as HTMLInputElement;

// Index Properties - allows us to create objects with properties that are not known in advance
interface ErrorContainer {
    [prop: string]: string;
}

// Gives an extra layer of protection because it will throw an error if we try to access a property that doesn't exist
const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must start with a capital character!'
}
