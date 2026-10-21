let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  address: {
    street: string;
    city: string;
    country: string;
  };
  greet: (greeting: string) => void;
} = {
  name: "John",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
  greet: function (greeting: string) {
    console.log(`${greeting}, my name is ${this.name}`);
  },
};
