// variableName: data type = value

let score: number = 90;

score = 10;

/**
  TYPES
  
  number
  string
  boolean

  null
  undefined
 */

// Union Types

// give more than a type to the variable
let id: number | undefined;
id = 1;

// you can hover over the variable to see the type (don't use it as you can)

// any Type : take any type

let randomValue: any = 10; // can make potential errors because No type checking

// unknown type : similar to any but you can't do anything with it
let myValue: unknown;
// should check the type before using it (better than any)
