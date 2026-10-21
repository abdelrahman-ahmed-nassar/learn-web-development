// interface User {
//   name: string;
//   age: number;
//   position: string;
//   address?: {
//     street: string;
//     city: string;
//     country: string;
//   };
//   greet: (greeting: string) => string;
// }

// let user: User = {
//   name: "Mohamed",
//   age: 25,
//   position: "Developer",
//   address: {
//     street: "6 street",
//     city: "Cairo",
//     country: "Egypt",
//   },
//   greet(greeting) {
//     return `${greeting}, I'm ${this.name}.`;
//   },
// };

// interface Greet {
//   (name: string, greeting?: string): string;
// }
// const greet: Greet = (name, greeting) => {
//   if (greeting) {
//     return `${greeting}, ${name}!`;
//   } else {
//     return `Hello, ${name}!`;
//   }
// };

// type MixedArray = (number | string)[];
// let mixedArray: MixedArray = [1, "2", 3, 4, 5];

// Single Interface Extension:
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

let myDog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever",
};

console.log(`My dog's name is ${myDog.name} and he is a ${myDog.breed}.`);
