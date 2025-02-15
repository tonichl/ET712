/*

toni chen liang
Homework 2 - functions, loops, and conditional statement

*/

/*
Exercise 1) name_counting() function: create a function, 
name_counting() that will ask the user to define a function to read an array with names 
and return the number of names that has less than 5 characters. 
You can also test the function using the following array:

let names =["Ann","Peter","Patricia","Sam","Katerina"]

name_counting() function should:

Take the length of the array as the parameter of the function.
Return the number of names that has less than 5 characters. 
*/

console.log("-----------------excersize 1 -----------------------")
let names =["Ann","Peter","Patricia","Sam","Katerina"]

function name_counting(names){
    let counts = 0
    for (let i = 0; i < names.length; i++) {
        if (names[i].length < 5) {
            console.log(names[i])
            counts++;

        }
    }

    return counts;

}
console.log(name_counting(names))

/* 

Exercise 2) checkNum() function: Define a function checkNum(), 
with no parameters but return value, that will ask a user to enter a number 
and return a true if it is an even number and false if it is an odd number .
If the user enters a string, character, symbol, nothing at all, 
the function will display a dialog box again asking for a valid number. 
Once a valid number is entered, function checkNum() returns a true 
if a number is even and false if a number is odd. 
*/

console.log("-----------------excersize 2 -----------------------")


function checkNum(){
    let num;
    while(true){ // (or use for(;;) to ensure the input is valid
        num = prompt("please enter a number: ")

        if(num.trim() === "" || isNaN(num) || num === null){
            console.log("please enter a valid number: ")
            continue;
        } 
        //num = parseInt(num);

        // Check if the number is even or odd
        if (num % 2 === 0) {
            console.log(`${num} is even number`)
            return true; // Even number

        } else {
            console.log(`${num} is odd number`)
            return false; // Odd number
            
        }

    }

}

console.log(checkNum());

