// Unkown type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
// userName = userInput; // Error: Type 'unknown' is not assignable to type 'string'.
if (typeof userInput === 'string') {
    userName = userInput;
}

// Never

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

generateError('An error occurred!', 500);