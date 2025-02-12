/* 
toni chen liang
feb 11, function
 */

console.log("toni chen liang")
console.log("--------------- example 1: function -------------")
//create function to prompt hello world

function msg(){
    console.log(`hello world`)
}

console.log("--------------- example 2: function to print 3,2,1 -------------")
// function to print 3,2,1

function printcount(){
    for( let n=3; n>0; n--)
        console.log(n)
}

console.log("--------------- example 3: function with parameters -------------")
//pass a name into a function. the function will prompt the name in all application

function greeting(passname){
    passname = passname.toUpperCase()
    console.log(passname)
    console.log(`welcome to function ${passname}`)
}

//function that take two numbers and prompt the sum of them
function sum(x,y){
    console.log(`${x} + ${y} = ${x+y}`)
}

console.log("--------------- example 4: function snake eyes -------------")
// function to print snake eyes if a 1 and 1 is passed to the function

function snake_eyes(x,y){
    if(x===1 && y===1){
        console.log("SNAKE EYES")
    }
    else{
        console.log("not a snake eyes")
    }
}

// call snake_eyes function
snake_eyes(3,2)
snake_eyes(1,1)

console.log("--------------- example 5: function that return value -------------")
// function that returns the double of the number. the number is passed to the function

function doublenumber(n){
    n *= 2 // or n = n*2
    return n
}

//call function 
let number = 5
let dbnum = doublenumber(number)
console.log(`the double of the number ${number} is ${dbnum}`)

console.log("--------------- example 6: function that return value -------------")
// function that returns 'true' if a temperature is greater than75, otherwise
// it return 'false' if the temperature is less than or equal to 75

function checktemp(temperature){
    if(temperature>75){
        console.log(`${temperature} is greater than 75`)
        return true
        
    }
    else {
        console.log(`${temperature} is not greater than 75`)
        return false
       
    }
}

// call function
let t = 100
let temp_result = checktemp(t)
console.log(`is the temperature greater than 75? ${temp_result}`)


