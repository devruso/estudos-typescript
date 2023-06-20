type Combinable = string | number;

// These are called function overloads
// which are used to specify the return type of a function
function add(a:number, b:number): number;
function add(a:string, b:string): string;
function add(a:Combinable, b:Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}

const fetchedUserData = {
    id: 'u1',
    name: 'Jamil',
    job: {title: 'senior engineer', description: 'Google'}
};

// optional chaining operator
// tells typescript to check if the property exists before accessing it
// it's used in react (i already used it)

console.log(fetchedUserData?.job?.title);

// nullish coalescing operator
// it's used to check if a value is null or undefined
// if it's null or undefined, it returns the value after the operator
// otherwise, it returns the value before the operator

const userInput = null;
const storedData = userInput ?? 'DEFAULT';