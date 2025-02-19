// ************** string method

let theName = "  Ahmed  ";

console.log(theName);
console.log(theName[1]); // count the spaces
console.log(theName[100]); // give undefined

console.log(theName.charAt(1)); // count the spaces
console.log(theName.charAt(100)); // give ""

console.log(theName.length); // count the spaces
console.log(theName.trim()); // delete the spaces

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(2).toUpperCase()); //chain method
/*
- indexOf(value [Mandatory], start [optional ] ==> 0)
- lastIndexOf(value [mandatory], start [opt] length)
- slice(start [Mandatory], End [optional] Not include the end)
- repeat(times)
- split(separator [opt], limit [opt])
*/

let s = "Elzero web school";

console.log(n.indexOf("web")); // give you ==> 7
console.log(n.indexOf("web"), 8); // give you ==> -1

//? search from the last
console.log(n.lastIndexOf("o")); //  give you => 15

//! not including the end
console.log(n.slice(2, 8)); // "zero w"

//? count from the last
console.log(n.slice(-5)); // "chool"
console.log(n.slice(-5, -3)); // "ch"

console.log(n.repeat(5));

//? Turning the string into a array
console.log(n.split()); // => ["Elzero web school"]

console.log(n.split("")); // make every character as an element in the array

console.log(n.split(" ")); // ["elzero", "web", "school"]

console.log(n.split(" ", 2)); // ["elzero", "web"]

console.log(n.split("", 6)); // ["e" , "l", "z", "e", "r", "o"]

/*
  String Methods

  - substring(Start [Mandatory], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  
  - substr(Start [Mandatory], Length Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mandatory], Start [Opt] Default 0) [ES6] ==> give boolean 
  - startsWith(Value [Mandatory], Start [Opt] Default 0) [ES6] ==> give boolean
  - endsWith(Value [Mandatory], Length [Opt] Default Full Length) [ES6] ==> give boolean
*/
n = "Elzero web school";
// ! not including the end
console.log(n.substring(2, 6)); // zero
console.log(n.substring(6, 2)); //zero
console.log(n.substring(-10, 6)); // Elzero

console.log(n.length); // 17
console.log(n.substring(16)); //  "l"
console.log(n.substring(n.length - 1)); //  "l"

console.log(n.substring(n.length - 5, n.length - 3)); //  "ch"

//! the end dealing with character not index  mean count not go to index
console.log(n.substr(0)); // the whole string
console.log(n.substr(0, 6)); // "Elzero"

console.log(n.substr(100)); // ""

console.log(n.substr(-3)); // "ool"

console.log(n.substr(-5, 2)); // "ch"

console.log(n.includes("web")); // ==> true
console.log(n.includes("web", 8)); // ==> false
//! include the start point
console.log(n.startsWith("E")); // ==> true
console.log(n.startsWith("E", 2)); // ==> false
console.log(n.startsWith("z", 2)); // ==> true
console.log(n.startsWith("zero", 2)); // ==> true
//! take the length not the index
console.log(n.endsWith("l")); // ==> true
console.log(n.endsWith("l", 6)); // ==> false
console.log(n.endsWith("ro", 6)); // ==> true

// ********* challenge

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let n = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(); // Zero
console.log(n.charAt(2).toUpperCase() + n.slice(3, 6));

// 8 H
console.log(n.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(n.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${n.substr(0, 6)} ${n.substr(10, 16)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
  `${n.slice(0, 2).toLocaleLowerCase()}${n.slice(2, n.length).toUpperCase()}`
); // eLZERO WEB SCHOOl
