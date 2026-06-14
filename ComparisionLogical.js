/*
    1) In this file we will understand about comparison operators in JavaScript.
    2) How to use logical operators.
    3) How to use template literals.
*/

// Comparison Operators
let a = 20;
let b = "20";

console.log(a == b);   // true (checks only value, not type) This is called as loose equality
console.log(a === b);  // false (checks value + type) This is called as strict equality
console.log(a != b);   // false
console.log(a !== b);  // true
console.log(a > 10);   // true
console.log(a >= 20);  // true
console.log(b <= 20);  // true  

// Logical Operators
let x = true;
let y = false;

console.log(x && y); // false (AND → both must be true)
console.log(x || y); // true  (OR → at least one true)
console.log(!x);     // false (NOT → reverses the value)

// Template Literals
//They allow us to use formatted strings
let name = "MSD";
let score = 91;
console.log(`Hello, my name is ${name} and my score is ${score}.`);
// Output: Hello, my name is MSD and my score is 91.

// Template literals also allow expressions inside ${}
console.log(`Next year my age will be ${43 + 1}.`);
// Output: Next year my age will be 44.

/*
You can get the output of this file if you have installed node in your pc.
In the terminal enter this commands:
1) cd currentDirectory
2) node ComparisionLogical.js
*/
