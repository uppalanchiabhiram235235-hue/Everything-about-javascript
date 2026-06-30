/*
    In this file we will understand about control statements in JavaScript.
*/

//We use conditional statements while using control statements

// Break Statement: exits the loop completely
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}
// Output: 1, 2

// Continue Statement: skips the current iteration
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
// Output: 1, 2, 4, 5

// While Loop with break
let count = 1;
while (count <= 5) {
    if (count === 4) {
        break;
    }
    console.log(count);
    count++;
}
// Output: 1, 2, 3

// Do...While Loop with continue
let num = 1;
do {
    if (num === 2) {
        num++;
        continue;
    }
    console.log(num);
    num++;
} while (num <= 4);
// Output: 1, 3, 4

/*
You can get the output of this file if you have installed node in your pc.
In the terminal enter this commands:
1) cd currentDirectory
2) node ControlStatements.js
*/
