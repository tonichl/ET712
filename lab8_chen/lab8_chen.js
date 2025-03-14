console.log("toni chen liang")

//example 1

//collect the element
let btnpressme = document.querySelector(".btnpressme")

//add a click event to change the button text and background color when is clicked

btnpressme.addEventListener("click", function(e){ //"e" equal to the btnpressme
    if(e.target.textContent === "PRESS ME"){
        e.target.textContent = "Button was pressed!";
        //e.target.classList.add("btnactive");
       
        
    }
    else {
        e.target.textContent = "PRESS ME";
        //e.target.classList.remove("btnactive");
        
    }
    // toggle between class "btnactive" and "btnpressme"
        e.target.classList.toggle("btnactive");
})

//example 2

//remove the <li> if its clicked
//collect the element
let fruitlist = document.querySelector("#fruitlist")

//click event to temove the <li> when its clicked
fruitlist.addEventListener("click", function(event){
    //check if the clicked element is a list
    if(event.target.tagName.toLowerCase() === 'li'){
        // remove the 'li' that was clicked
        event.target.remove()
    }
    else{
        console.log(event.target)
    }

})


//EXAMPLE 3 prevent default
//collect the element

let linkqcc = document.querySelector(".linkqcc")

//create event
linkqcc.addEventListener("click", function(event){
    event.preventDefault()
    alert("website is on maintainance")
})

//example 4
//collect the element
let modalwindow = document.querySelector(".modalwindow")
let linkreadmore = document.querySelector(".linkreadmore")
let closex = document.querySelector(".closex")

linkreadmore.addEventListener("click", function(){
    modalwindow.style.display = "block"
})

closex.addEventListener("click", function(){
    modalwindow.style.display = "none"
})


let circle = document.querySelector(".circle")
let reset = document.querySelector(".reset")
let touchcount = 0;


circle.addEventListener('click', function(e){
  touchcount++;
  e.target.textContent = touchcount;
})

reset.addEventListener("click", function(){
    touchcount = 0;
    circle.textContent = touchcount;
})



/*  btnpressme.addEventListener("click", function(e){ //"e" equal to the btnpressme
    if(e.target.textContent === "PRESS ME"){
        e.target.textContent = "Button was pressed!";
        //e.target.classList.add("btnactive");
       
        
    }
    else {
        e.target.textContent = "PRESS ME";
        //e.target.classList.remove("btnactive");
        
    }*/







