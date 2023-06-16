const hobbies = ['Running', 'Guitar'];
const activeHobbies = ['Training'];

activeHobbies.push(...hobbies);

const person = {
  name: 'Jamil',
  age: 25
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(51, 20, 12, 3.7);
console.log(addedNumbers);