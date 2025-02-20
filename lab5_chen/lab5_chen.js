console.log("toni chen liang")

console.log("--------------- example 1: function in a variable ----------------")

const sum = function (num1, num2){
return num1 + num2
}

//calling function
console.log(sum(5,2))


console.log("--------------- example 2: function in a variable ----------------")
//function to return the square root of a number

let squarenumber = function(n){
    return Math.pow(n,2)
}

// call the function
console.log(squarenumber(6))


console.log("--------------- example 3:arrow function ----------------")

/*let greet = function(username){
    console.log(`welcome to JS ${username}`)
}*/

let greet = (username) => {
    console.log(`welcome to JS ${username}`)
}

//call the function
greet("peter pan")

console.log("--------------- example 4:function with default parameters ----------------")
function cubenumber(n){
    return Math.pow(n,3)
}

//call the function
console.log(`2^3 = ${cubenumber(2)}`)
console.log(`empty^3 = ${cubenumber()}`)

console.log("--------------- example 5: spread syntax----------------")
nums =[-2, 5, 9, 3, -8]
let maxnum = Math.max(...nums)
console.log(maxnum)


console.log("--------------- example 6: objects----------------")

const car = {
    type: "fiat",
    model: 500,
    color: "white",
    price: 23000,


    //methods
    description:function(){
        return `${this.color} ${this.type} ${this.price}` //*this mean *car
    }
}

//calling car objects

console.log(car.model)

// calling car description

console.log(car.description())


console.log("--------------- example 7 objects----------------")
const hen = {
    //properties
    name : "helen",
    year: 2025,
    eggcount: 0,

    //method
    layanegg: function(){
        this.eggcount++
        return "EGG"
    }
}

//call the method

console.log(`${hen.name} has ${hen.eggcount} eggs`)
console.log(hen.layanegg())
console.log(hen.layanegg())
console.log(`${hen.name} has ${hen.eggcount} eggs`)
console.log(hen.layanegg())
console.log(`${hen.name} has ${hen.eggcount} eggs`)

console.log("--------------- example 8: try-except----------------")

function yell(msg){
    try{
    console.log(msg.toUpperCase().repeat(3))
    }
    catch (e){
        console.log(`ERROR! type of error ${e}`)
    }
    finally{
        console.log("end of the function yell ")
    }
}


//call the function
yell("help")
yell(8)
console.log("end of example 8")


console.log("--------------- exercise 1 ----------------")

/*create an object named mycalculator with two properties and two methods.

The properties name are message and side. 
The 'message' property is a string, 
and the 'side' property is an integer with the value of 2.
The methods name is area_square and volume_cube.
 Each method uses the side property to calculate 
 the area of a square and the volume of a cube. The formulas are:
area of a square = side^2, use the Math.pow() 
volume of a cube = side^3, use the Math.pow() 
Each method returns the calculated value. */

const mycalculator = {
    //properties
    message : "area and volume calculator",
    side: 2,


    //method
    area_square: function(){
        return `${Math.pow(this.side,2)}`
    },

    area_volume: function(){
        return `${Math.pow(this.side,3)}`
    }
}

console.log(`${mycalculator.message} with side length ${mycalculator.side}`);
console.log(`Area of the square: ${mycalculator.area_square()}`);
console.log(`Area of the volume: ${mycalculator.area_volume()}`);


console.log("--------------- exercise 2 ----------------")
/*Lab exercise 2 description (JS exception handling): 
Define a JavaScript function named 'divideNumbers' that takes two parameters, 
'a' and 'b'. The function should attempt to divide 'a' and 'b' 
and return the result. If the division is undefined,
 return a message that says 'Error performing the division'

The program must use try-catch inside the function. */


function divideNumbers(a,b){
    try{
        if (b === 0) {
           return error;
        }
     return a/b;
    }
    catch (e){
        return "Error performing the division";
    }
    /*finally{
        console.log("end of the function divideNumbers ")
    }*/
}

console.log(`12 / 4 = ${divideNumbers(12, 4)}`); // Output: 3
console.log(`12 / 0 = ${divideNumbers(12, 0)}`); // Output: Error performing the division
console.log(`0 / 5 = ${divideNumbers(0, 5)}`); // Output: 0
console.log(`-12 / -4 = ${divideNumbers(-12, -4)}`); // Output: 3








