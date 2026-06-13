/*
    1) In this file we will understand about JavaScript data types.
    2) How to perform type conversion.
*/

// Primitive Data Types
let name = "MSD"; // String
let age = 43;         // Number
let isCricketer = true; // Boolean
let nothing = null;   // Null
let notDefined;       // Undefined
let bigNum = 1234567890123456789012345n; // BigInt
let id = Symbol("id"); // Symbol

// typeof is used to check the data type of a variable
console.log(typeof name);       // "string"
console.log(typeof age);        // "number"
console.log(typeof isCricketer);  // "boolean"
console.log(typeof nothing);    // "object" (quirk in JS)
/*
    Why it has returned object:
    In JavaScript, null is meant to represent “nothing” or an empty value.
    But just remember there is a bug between null and object reference 
    Because of that, typeof null mistakenly returns "object".
*/
console.log(typeof notDefined); // "undefined"
console.log(typeof  bigNum);  // "bigint"
console.log(typeof id);   // "symbol"

//We will discuss about non-primitive data type later.

// Type Conversion
// Converting string to number
let str = "123";
let num = Number(str);
console.log(num);        // 123
console.log(typeof num); // "number"

// Converting number to string
let marks = 95;
let marksStr = String(marks);
console.log(marksStr);        // "95"
console.log(typeof marksStr); // "string"

// Converting to boolean
console.log(Boolean(1));   // true
console.log(Boolean(0));   // false
console.log(Boolean(""));  // false
console.log(Boolean("MSD"));// true

// Implicit type conversion (type coercion)
//Javascript tries to convert any one of the datatype into the other one.
console.log("5" + 2);  // "52" (number converted to string)
console.log("5" - 2);  // 3   (string converted to number)
console.log("5" * "2");// 10  (both strings converted to numbers)


/*
You can get the output of this file if you have installed node in your pc.
In the terminal enter this commands:
1) cd currentDirectory
2) node DataTypes.js
*/
