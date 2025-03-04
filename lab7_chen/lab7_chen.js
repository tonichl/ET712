console.log("toni chen liang")

//queryselector select only one
//queryselectAll select all

console.log("\n----------example 1 collect class and methods---------")


// select element by class name "description"

let desc = document.querySelector(".description") //. for class
console.log(desc)

//select elements by id name "title"

let titlenode = document.querySelector("#title") // # for id
console.log(titlenode)

//select element by tag name, "p"

let par = document.querySelectorAll("p")
console.log(par)

//select all elements with class name "method"

let methods = document.querySelectorAll(".methods")
console.log(methods)

// loop through each each elements in a node list
console.log("\n----------example 2 loop through each each elements in a node list---------")
for(let n=0; n<methods.length; n++){
    console.log(methods[n])
}


console.log("\n----------example 3 click events---------")

// select the button

let btn = document.querySelector(".btnclick")

// add an event (click) to btn

btn.addEventListener("click", function(){
    alert("BTN WAS CLICKED")
})

console.log("\n----------example 4 click events to change text content---------")

//select the elements, btnmsg and msg

let btnmsg = document.querySelector(".btnmsg")
let msg = document.querySelector(".msg")

//add an event to msg that changes the texxt  node to "toni chen"

console.log(msg)
btnmsg.addEventListener("click", function(){
    msg.textContent = "good afernoon toni chen"
    msg.innerHTML = "good afernoon <b> toni chen </b>" // this can modify the text letter size

})


console.log("\n----------example 5 changing shapes mini-app---------")

//select elements

let shape= document.querySelector(".shape")
let btncircle = document.querySelector(".btncircle")
let btnsquare = document.querySelector(".btnsquare")
let btnrectangle = document.querySelector(".btnrectangle")

// add an event to each button

btncircle.addEventListener("click", function(){
    shape.className = "circle"
})

btnsquare.addEventListener("click", function(){
    shape.className = "square"
})

btnrectangle.addEventListener("click", function(){
    shape.className = "rectangle"
})















