// Arrays

let numbers : number[] = [1, 2, 3, 4, 5];

let fruits : string[] = ["apple", "banana", "orange"];

let mixedArray : (number | string)[] = [1, "apple", 2, "banana"];

// Tuples

let numbersTuple : [number, number] = [1, 2];

let personTuple : [string, number] = ["John", 30];

let mixedTuple : [string, number, boolean] = ["John", 30, true];

let restTuple : [string, ...number[]] = ["John", 30, 40, 50];

let arrayOfTuples : [string, number][] = [["John", 30], ["Jane", 25], ["Bob", 40]];

let optionalTuple : [string, number?] = ["John"];