/*
    1) In this file we will understand about loops in JavaScript.
    2) Difference between while and do...while.
    3) How to use for...of loop.
*/

// For Loop Syntax: for(initialization; condition; increment/decrement)
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0, 1, 2, 3, 4


// For Loop with different increment
for (let i = 0; i < 10; i += 2) {
    console.log(i);
}
// Output: 0, 2, 4, 6, 8


// For Loop with multiplication
for (let i = 1; i < 20; i *= 2) {
    console.log(i);
}
// Output: 1, 2, 4, 8, 16


// While Loop (decrementing)
let count = 5;
while (count > 0) {
    console.log(count);
    count--;
}
// Output: 5, 4, 3, 2, 1


// Do...While Loop (iterating over a string)
let str = "JS";
let index = 0;
do {
    console.log(str[index]);
    index++;
} while (index < str.length);
// Output: J, S

/*  
    Difference:
    while → checks condition first, may not run at all.
    do...while → runs once first, then checks condition.
*/


// For...of Loop → used with strings or arrays
let word = "Hello";
for (let ch of word) {
    console.log(ch);   //the for...of loop is mainly used for iteration, not for directly modifying values
}
// Output: H, e, l, l, o

/*
You can get the output of this file if you have installed node in your pc.
In the terminal enter this commands:
1) cd currentDirectory
2) node Loops.js
*/
