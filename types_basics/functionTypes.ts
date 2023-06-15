function add(n1: number, n2: number){
    return n1 + n2;
}

// This function doesn't return anything, so it's type is void.
function printResult(num: number): void{
    console.log('Result: ' + num);
}

// This is a function type, it's a type that describes a function.
// The function type is a combination of the parameters and the return type.
let combineValues: (a: number, b: number) => number;

combineValues = add;
combineValues(8, 8);

// callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.
function addAndHandle(n1: number, n2: number, cb:(num: number) => void){
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => {
    console.log(result);
}); 