/*
    1) In this file we will understand arrays in JavaScript.
    2)  Different ways to declare arrays..
    3) Basic operations : push, pop, shift, unshift.
*/

// An array is a data structure that stores multiple values in a single variable.
// It is useful because we can group related data together and access them by index.

// Declaring arrays
let marks = [95, 82, 45]; // using square brackets
let fruits = new Array("Apple", "Banana", "Mango"); // using Array constructor
let voidArray = []; // empty array

console.log(marks);   // [95, 82, 45]
console.log(fruits);  // ["Apple", "Banana", "Mango"]
console.log(voidArray); // []

// Accessing elements
console.log(marks[0]); // 95
console.log(fruits[1]); // Banana

// Array length
console.log(marks.length); // 3

// Operations
marks.push(100); // adds element at the end
console.log(marks); // [95, 82, 45, 100]

marks.pop(); // removes last element
console.log(marks); // [95, 82, 45]

fruits.shift(); // removes first element
console.log(fruits); // ["Banana", "Mango"]

fruits.unshift("Orange"); // adds element at the beginning
console.log(fruits); // ["Orange", "Banana", "Mango"]

// Insert at specific position
marks[1] = 90; // update value at index 1
console.log(marks); // [95, 90, 45]

//Accessing last element
console.log(marks[marks.length - 1]);//45

/*
You can get the output of this file if you have installed node in your pc.
In the terminal enter this commands:
1) cd currentDirectory
2) node Arrays.js
*/
