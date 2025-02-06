/*
toni chen liang
feb 4, loops
*/ 
console.log("toni chen liang")
console.log("\n-------------- example 1: for loops ------------")
// use a for loop to print from 0 to 4, ---> 0 1 2 3 4
for(let n =0; n<=4; n++){
    console.log(`counting = ${n}`)
}

console.log("\n-------------- example 2: for loops with conditional statement ------------")
// collect the initial value from the user
// print all even number between the initial value to 20

let initialvalue= parseInt(prompt("enter a number: "))
for(initialvalue; initialvalue<=20; initialvalue++){
    if(initialvalue%2==0) {  //a number divisible by 2 with 0 remainders
      console.log(initialvalue)  
    }

}

console.log("\n-------------- example 3: for loops as decrement counter ------------")
// for loop to print from 9 to 0 ---> 9 8 7 6 5 4 3 2 1 0
for (let n =9; n>=0; n--){
    console.log(n)
}

for (let n =9; n>=0; n-=3){ // ---> 9 6 3 0
    console.log(n)
}

for (let n =9; n>=0; n-=5){ // ---> 9 4 0
    console.log(n)
}


console.log("\n-------------- example 4: for loops in arrays(list) ------------")

// set up a list of animals
let animals = ["fish", "turtle", "dog"]
for(let index=0; index<animals.length; index++){
    console.log(animals[index])
}

//set a list of numbers
let numbers =[5, -3, 10, -9,2]
let counternegativenumber = 0
for(let index =0; index<numbers.length; index++){
    console.log(numbers[index])
}

//count how many negative numbers are in the list
for(let index =0; index<numbers.length; index++){
    if(numbers[index]<0){
        counternegativenumber++
    }
}
console.log(`there is ${counternegativenumber} in list numbers`)



console.log("\n-------------- example 5: for loops in a string ------------")
let username= "peter pan"
let counter_e=0
for( let index = 0; index<username.length; index++){
    console.log(username[index])

    if(username[index]==='e'){
        counter_e++
    }
}
console.log(`there is/are ${counter_e} letter e in 'username`)


console.log("\n----- EXERCISE FOR LOOP ---------")
let num=[-3, 10, 0, 8, -9, 5, -2, 8, 6, -1]
let negativenum =0;
let positivenum =0;

let sumpositive =0;
let sumnegative =0;
console.log(`${num}`)

//use for loop to check and add that all negative numbers and positive number

for(index = 0; index<num.length; index++){
    if(num[index]<0){ //find a number at position index=0, if the number in position 0 is less than 0 (in this case -3), increase the number.
        negativenum++
        sumnegative+= num[index];
        console.log(`there is a negative number are located at ${index}`)
        console.log(`this is negative number: ${num[index]}` )
        console.log("\n")
    }
    else if(num[index]>=0){
        positivenum++
        sumpositive += num[index]
        console.log(`there is a positive number are located at ${index}`)
        console.log(`this is positive number: ${num[index]}`)
        console.log("\n")
    }  
}


console.log(`there are ${negativenum} negative numbers and the sum is ${sumnegative}`)
console.log(`there are ${positivenum} positive numbers and the sum is ${sumpositive}`)


console.log("\n-------------- example 6: while loop as a counter ------------")
// use a while loop to display number from 0 to 4 ---> 0 1 2 3 4

let y=0;
while(y<=4){
    console.log(y);
    y++
}


console.log("\n-------------- example 7: while loop application ------------")
// using while loop to check if the user number guess the secret number

const SECRECT = 8
// collect a number from user

let usernumber = parseInt(prompt("enter a secret number: "))
let guesscounter = 0; 
// run a while loop to recollect the user number if the number doesnt match the secret number

while(usernumber !== SECRECT){
    guesscounter++
    usernumber = parseInt(prompt("wrong guess, enter another number: "))
    console.log(`${usernumber} is wrong, please enter another number.`)
}

console.log(`${usernumber} is correct!`)
console.log(`total attempts ${guesscounter}`)


console.log("\n-------------- example 8: break in a while loop ------------")
//create an app to sum all even numbers. the app continuously collect a positive number and stop if a negative number is entered

let sumevennum = 0;
let collectnum;
while(true){
    collectnum = parseInt(prompt("enter a positive number: "))
    if(collectnum<0){
        break
    }
    else{
        if(collectnum >=0 && collectnum%2===0 ){
            sumevennum += collectnum
            // or sumevennum = sunevennum + collectnum
        }
        
    }
}
console.log(`the sum of all even number is ${sumevennum}`)


console.log("\n-------------- example 9: continue in a while loop ------------")
// print number from -5 to 5

let n = -5;
index = 0;
for(index = n; n<=5; n++){ //or for(let n = -5; n<=5; n++)
    if(n%2===0){
        continue
    }
    console.log(n)
}


console.log("\n-------------- exercise 2  ------------")

const PIN =9871;
let userpin = parseInt(prompt("enter a 4 digit pin number: "))
let pinattempts =0;

while(userpin !== PIN){
    pinattempts ++
    console.log(`attempt${pinattempts}`)
    //userpin = parseInt(prompt("invalid pin, please enter another 4 digit pin: "))

    if(pinattempts ===3){
        console.log(`account locked`)
        break;
    }
    userpin = parseInt(prompt("invalid pin, please enter another 4 digit pin: "))
    
}

if(userpin === PIN){
    console.log(`correct pin!`)
}


