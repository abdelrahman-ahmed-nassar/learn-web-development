let someValue: unknown = "Hello, TypeScript!";

// if (typeof someValue === "string") {
//   let strLength: number = someValue.length;
// }

// using type assertion
let strLength: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length;
