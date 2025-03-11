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


//example 6
console.log("\n----------example 6 event handler---------")
//march, traditional events

//onmouseout event
//collect the element

let event6 = document.querySelector(".event6")

//add a mouseout event to open an alert dialog box

event6.onmouseout = function(){
    alert("mouse out! - example 6")
}

//example 7
console.log("\n----------example 7 event handler---------")
//inline event
function openalert(){
    alert("click event - example 7")
}

//example 8
console.log("\n----------example 8 mouseover event---------")

//change the background color of a div when the mouse hover the element
//collect the element

let divexample8 = document.querySelector(".divexample8")
divexample8.onmouseout = function(){
    //let randcolor = Math.floor(Math.random()*255)
    let randred = Math.floor(Math.random()*255)
    let randgreen = Math.floor(Math.random()*255)
    let randblue = Math.floor(Math.random()*255)
    //divexample8.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
    divexample8.style.backgroundColor = `rgb(${randred},${randgreen},${randblue})`

}


//example 9: keyboard event
console.log("\n----------example 9 keyboard event---------")

//collect the element
let inputex9 = document.querySelector(".inputex9")
let ex9paragraph = document.querySelector(".ex9paragraph")

inputex9.onkeydown = function(event){
    ex9paragraph.innerHTML = ` key = ${event.key} was pressed`
}


/* lab exercize */
// EXERCISE
// note: use querySelector() or querySelectorAll()
// collect elements: search for the first p with class ps1
//let s1 = document.querySelector(".s1")

let ps1 = document.querySelector(".ps1")

// add a mouseout event to change the text content to "STUDENT'S FULL NAME"
ps1.onmouseout = function(){
    ps1.innerHTML="toni chen liang"
}
// search for the second p with class ps2
let ps2 = document.querySelector(".ps2")

// add a click event to the ps2 to change the font-size to 25px  and color to olive when is clicked
ps2.addEventListener ("click", function(){
    ps2.className = "font";
    //ps2.style.fontSize = "25px";
    //ps2.style.color= `olive`;
})

// search for the first div with class divs2
let s2 = document.querySelector(".s2")

let divs2 = document.querySelector(".divs2")

// add a click event to change the background color to indigo
divs2.addEventListener ("click", function(){
    divs2.style.backgroundColor= `indigo`;
})

// search for the second div with class divs2
let divs3 = document.querySelector(".divs3")

// add a keydown event to change the width of divs2 to 300px
divs3.addEventListener ("keydown", function(){
    divs3.style.width = "300px"
})









