type User = {
  name: string;
  age: number;
  position: string;
  address?: {
    street: string;
    city: string;
    country: string;
  };
  greet: (greeting: string) => string;
};

let user: User = {
  name: "Mohamed",
  age: 25,
  position: "Developer",
  address: {
    street: "6 street",
    city: "Cairo",
    country: "Egypt",
  },
  greet(greeting) {
    return `${greeting}, I'm ${this.name}.`;
  },
};

let user2: User = {
  name: "Mohamed",
  age: 25,
  position: "Developer",
  address: {
    street: "6 street",
    city: "Cairo",
    country: "Egypt",
  },
  greet(greeting) {
    return `${greeting}, I'm ${this.name}.`;
  },
};

type Greet = (name: string, greeting?: string) => string;
const greet: Greet = (name, greeting) => {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
};

type MixedArray = (number | string)[];
let mixedArray: MixedArray = [1, "2", 3, 4, 5];
