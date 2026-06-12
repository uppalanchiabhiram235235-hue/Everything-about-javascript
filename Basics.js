/*
    1) In this file we will understand how to display something in JavaScript.
    2) How to use let, const and var(Different ways to declare variables in js).
*/

// Displays Hello, world! in the console
console.log("Hello, world!");
console.log("JavaScript is interesting!"); // console.log() is used to display anything you need.
console.log("I'm 19 years old");//I'm 19 years old.

/*
    We use let, const, and var to declare variables:
    1) let and const are block scoped (only accessible where they are declared).
    2) var is function scoped (it can be accessed anywhere in the function).
*/

// let example
let a = 10; // The value of 'a' can be reassigned
console.log(a); // 10
a = 20;
console.log(a); // 20

// const example
const b = 20; // The value of 'b' cannot be changed again; it will remain constant
console.log(b); // 20
// Re-assignment not allowed

// var example
var c = "MSD"; // It can be re-declared again
console.log(c);//MSD
c = "Ruturaj";
console.log(c);//Ruturaj

//var is function scoped.
if (true) {
    var x = 100;
    let y = 200;
}
console.log(x); // 100 (var is function-scoped, accessible here)
//console.log(y); Error (let is block-scoped)



/*
You can get the output of this file if you have installed node in your pc.
In the terminal enter this command:
1)cd currentDirectory
2)node Basics.js
*/