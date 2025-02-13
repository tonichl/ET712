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


console.log("--------------- example 7: built-in function -------------")
// built in function in JS is called as a grobal variable
// math obsject

let num_pi =  Math.PI
console.log(`JS PI value = ${num_pi}`)

// round() method returns the nearest integer
console.log(`rounded off pi = ${Math.round(num_pi)}`)

// ceil() method returns the round up of a number
console.log(`ceil method applied to pi = ${Math.ceil(num_pi)}`)

// pow method returns the value of base to the power of exponent
console.log(`2^3 = ${Math.pow(2,3)}`)

//square root method --> sqrt()
console.log(`square root of 9 = ${Math.sqrt(9)}`)

//random number generator, random() method returns a random number between 0 and 1
console.log(`random number = ${Math.random()}`)

// random number between 1 to 9
let n = 1 + Math.random()*8
console.log(`number between 1 and 9 = ${n}`)

let m = 1 + Math.round(Math.random()*8)
console.log(`number between 1 and 9 = ${m}`)

console.log("--------------- example 8: random number -------------")
//function to randomly generate a number between -5 and 5

function randnumber(){
    let p = -5 + Math.round(Math.random()*10)
    return p;
}


console.log("--------------- example 9: random number in a list (array) -------------")
// function to randomly pick a color from a list

let colors = ["red", "green", "blue", "magenta", "gray"]
function randcolor(pick_index){
    let list_size = colors.length   //fist find the length of the list
    let last_index = list_size -1   //find the last index of the list
    let random_index = (Math.round(Math.random()*last_index)) //randomly pick a number between 0 to the last index(in this case 4)
    return colors [random_index]    // return the random picked color
}

console.log(`color picked = ${randcolor()}`)

console.log("--------------- excersice 1 ---------------")
/*Exercise: define a function called checkName() that validates a name and console a greeting. 
Function checkName() handles situation that happens if the user:

clicks Cancel on the dialog box
does not enter text in the dialog box and press the 'Ok" button enters a number
if the user does one of action mentioned above, checkName()  
function will open a dialog box with a message:
You forgot to enter a name. Enter a name again: . This message appears 
if the user did not enter a name and click Cancel or OK.
___ is invalid! Enter a name again: 
This message appears if the user enters a number.
If the user keeps entering an invalid name, 
the dialog box will keep displaying the message requesting to enter a valid name. 
Otherwise, when the user enters a name, the console will print a message as Welcome _______ to the class! . 
The name in the message must be all uppercase. */



function checkname(){
    let name;
    for(;;){ // to ensure the input is valid, otherwise will continue (or use while(true) loop)
    name = (prompt("enter a name: "))
    
        if(name.trim() === "" || name === null ){   // to check if the input name is null or empty
            console.log(`You forgot to enter a name. Enter a name again: `)
            continue;
        }
        

        if(isNaN(name)===false){ //(or !isNaN(name) ) check if the name is number using isNaN method.(equal to false because the value is a valid number or can be converted into a valid number.)
            console.log(`${name} is invalid! Enter a name again: `)
            console.log(`${name}`)
            continue;
        }

        console.log(`Welcome ${name.toUpperCase()} to the class!`) //print this if the input is valid and break
        break;
    

    }
    //console.log(`Welcome ${name.toUpperCase()} to the class!`)
}




