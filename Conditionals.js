/*
    1) In this file we will understand about conditional statements in JavaScript.
    2) How to use switch statement.
*/

// Conditional Statements (if, else if, else)
let score = 91;

if (score >= 90) {
    console.log("Excellent!"); 
} else if (score >= 50) {
    console.log("Good job!"); 
} else {
    console.log("Keep practicing!"); 
}
// Output: Excellent!

//Example-2
let age = 19;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
// Output: You are eligible to vote.

//One-line if/else (only when there is a single statement)
//Don't use it if you have multiple lines in you if or else block

let number = 10;
if (number % 2 === 0) console.log("Even number");
else console.log("Odd number");
// Output: Even number

// Nested if/else (There can be if,else blocks within a if or else block).
let marks = 91;
if (marks >= 50) {
    console.log("You passed.");
    if (marks >= 90) {
        console.log("Grade: A+");
    } else if (marks >= 75) {
        console.log("Grade: A");
    } else {
        console.log("Grade: B");
    }
} else {
    console.log("You failed.");
}
// Output: You passed. Grade: A+


// Switch Statement
// Switch is used when we have multiple conditions to check for the same variable.
let day = 7;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
// Output: Sunday

/*
You can get the output of this file if you have installed node in your pc.
In the terminal enter this commands:
1) cd currentDirectory
2) node Conditionals.js
*/
