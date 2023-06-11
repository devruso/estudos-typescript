// const person: {
//     name: string;
//     age: number;
// }
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // Tuple, type of an array with a fixed length and fixed type of elements
// } = {
//     name: "Jamilson",
//     age: 25,
//     hobbies: ["Acoustic Guitar", "Running", "Video Games"],
//     role: [1, "admin"],
// };
enum Role {ADMIN, READ_ONLY, AUTHOR}; // Enum, a custom type

const person = {
  name: "Jamilson",
  age: 25,
  hobbies: ["Acoustic Guitar", "Running", "Video Games"],
  role: Role.ADMIN,
};

console.log(person);
