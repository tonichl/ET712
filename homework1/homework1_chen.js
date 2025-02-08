/*

Homework 1: control flow and loops

Student’s name: toni chen liang

*/
console.log("toni chen liang")
console.log("homework 1")

/*Program 1: conditional statement  

Write JavaScript program that will check the type of data that the user enters 
in a popup dialog window, using the prompt function. 
The program starts with asking the user to enter something in the popup dialog window. 
Depending on the entered data, the program will display in the console:

Think positively! if the user entered a positive number.
Never have negative balance! If the user entered a negative number.
Yin and Yang! if the user entered zero.
Your answer was blank! if the user didn’t type anything and click the Ok button in the dialog window.
 Null and void! if the user click the Cancel button in the dialog window.*/

console.log("--------------- Program 1: conditional statement -----------------")

let userinput = prompt("Please enter a number:");
let num = parseInt(userinput); // Parse the input as an integer

if(userinput === null){
    console.log("Null and Void")
}
else if(userinput === ""){
    console.log("Your answer was blank!")
}

else if(num>0){
        console.log(`${num} Think positively!`)
}

else if(num<0){
        console.log(`${num} Never have negative balance!`)
}

else if(num===0){
        console.log(`${num} Yin and Yang!`)
}

/*else if (isNaN(num)) {
    // Input is not a valid number
    console.log("Invalid input. Please enter a number.");
}

else {
    if(num>0){
        console.log(`${num} Think positively!`)
    }

    if(num<0){
        console.log(`${num} Never have negative balance!`)
    }

    if(num===0){
        console.log(`${num} Yin and Yang!`)
    }
}*/

console.log("--------------- Program 2: for loop and nested conditional statement -----------------")
/*Program 2: for loop and nested conditional statement

Write a JS program that collects ten numbers through the popup dialog window, 
using the prompt function. The program starts by declaring an empty array.
After it, the program will use a for loop to collect each number,
using the popup dialog window, and save the numbers to the empty array. 
Once the ten numbers are collected, the program will use a conditional statement 
to count how many of the ten numbers are multiples of 3, 5, and 7, 
and display the result in the console as:
____ numbers are multiple of 3

____ numbers are multiple of 5

____ numbers are multiple of 7
*/

let numbers = []; //empty array

// Use a for loop to collect ten numbers
for (let index = 0; index < 10; index++) {
let input = prompt(`Enter number ${index + 1}: `); // Get user input
let num = parseInt(input); //convert into integer
numbers[index] = num    //save integer to array
}

let mul3 = []   //array to save number divisible by 3
let mul5 = []   //array to save number divisible by 5
let mul7 = []   //array to save number divisible by 7

let count3 = 0; //count the number divisible by 3
let count5 = 0; //count the number divisible by 5
let count7 = 0; //count the number divisible by 7

for(let index=0; index<numbers.length; index++){ //index as position
    console.log(`${numbers[index]}`)

    if(numbers[index]%3===0){
        count3++
        mul3[count3] = numbers[index] //numbers that divisible by 3(count3) are saved into mul3
    }

    if(numbers[index]%5===0){
        count5++
        mul5[count5] = numbers[index] //numbers that divisible by 5(count5) are saved into mul5
    }

    if(numbers[index]%7===0){
        count7++
        mul7[count7] = numbers[index] //numbers that divisible by 7(count7) are saved into mul7
    }
}

console.log(`Numbers multiple by 3: ${mul3}`);
console.log(`${count3} numbers are multiples of 3\n`);

console.log(`Numbers multiple by 5: ${mul5}`);
console.log(`${count5} numbers are multiples of 5\n`);

console.log(`Numbers multiple by 7: ${mul7}`);
console.log(`${count7} numbers are multiples of 7\n`);

