
//------------------------ button -------------------------

//get the element of each button and add function to each button

const btntransportation = document.querySelector(".btntransportation")
const btnshapes = document.querySelector(".btnshapes")
const btnanimals = document.querySelector(".btnanimals")
const btnclothing = document.querySelector(".btnclothing")

/*const btnshowhidesubtitle = document.querySelector(".btnshowhidesubtitle")
const animalssubtitle = document.querySelector(".animals .subtitle");*/


btntransportation.addEventListener("click", function() {
    const transportationtitle = document.querySelector(".transportationtitle"); 
    transportationtitle.scrollIntoView({ behavior: "smooth" });
});


btnshapes.addEventListener("click", function() {
    const shapestitle = document.querySelector(".shapestitle"); 
    shapestitle.scrollIntoView({ behavior: "smooth" });
});

btnanimals.addEventListener("click", function() {
    const animalstitle = document.querySelector(".animalstitle"); 
    animalstitle.scrollIntoView({ behavior: "smooth" });
});

btnclothing.addEventListener("click", function() {
    const clothingtitle = document.querySelector(".clothingtitle"); 
    clothingtitle.scrollIntoView({ behavior: "smooth" });
});


/*let isvisible = false;
animalssubtitle.forEach(subtitle => {
    animalssubtitle.style.display = "none";
});
btnshowhidesubtitle.addEventListener("click", function() {
    isvisible === true;
    if(isvisible === true){
        animalssubtitle.style.display = "block";
    }
    else{
        animalssubtitle.style.display = "none";
    }

})*/

//--------------------------------each title modal windows -------------------------
// Get the title elements that will open the modals
const transportationtitle = document.querySelector('.transportationtitle');
const shapestitle = document.querySelector('.shapestitle');
const animalstitle = document.querySelector('.animalstitle');
const clothingtitle = document.querySelector('.clothingtitle');

const transportationmodal = document.querySelector(".transportationmodal")
const shapesmodal = document.querySelector(".shapesmodal")
const animalsmodal = document.querySelector(".animalsmodal")
const clothingmodal = document.querySelector(".clothingmodal")
const closemodal = document.querySelector(".closemodal")

const transportationClose = document.querySelector(".transportationmodal .closemodal");
const shapesClose = document.querySelector(".shapesmodal .closemodal");
const animalsClose = document.querySelector(".animalsmodal .closemodal");
const clothingClose = document.querySelector(".clothingmodal .closemodal");

transportationtitle.addEventListener("click", function(){
    transportationmodal.style.display = "block"
})

if (transportationClose) {
    transportationClose.addEventListener("click", function() {
        transportationmodal.style.display = "none";
    });
}


shapestitle.addEventListener("click", function(){
    shapesmodal.style.display = "block"
})

if (shapesClose) {
    shapesClose.addEventListener("click", function() {
        shapesmodal.style.display = "none";
    });
}



animalstitle.addEventListener("click", function(){
    animalsmodal.style.display = "block"
})

if (animalsClose) {
    animalsClose.addEventListener("click", function() {
        animalsmodal.style.display = "none";
    });
}

clothingtitle.addEventListener("click", function(){
    clothingmodal.style.display = "block"
})

if (clothingClose) {
    clothingClose.addEventListener("click", function() {
        clothingmodal.style.display = "none";
    });
}





//--------------------------------animals section checkbtn, resetbtn, input -----------------

const checkbtn =document.querySelector(".checkbtn")
let correctcount = 0;
let incorrectcount = 0;
function checkAnimal(animal) {
    /*const subtitle = document.querySelector(".animals .subtitle")*/
    const inputId = animal + "-text";
    const resultId = animal + "-result";
    const checkbtnId = animal + "-check";

    const inputValue = document.getElementById(inputId).value.toLowerCase();
    const resultSpan = document.getElementById(resultId);
    const checkbtn = document.getElementById(checkbtnId);

    if (inputValue === animal) {
        resultSpan.textContent = "Correct!";
        resultSpan.style.color = "green";
        correctcount++;
        document.querySelector(".correct-count").textContent = correctcount;

        /*subtitle.style.display = "block";*/
    } else {
        resultSpan.textContent = "Incorrect. Try again.";
        resultSpan.style.color = "red";
        incorrectcount++;
        document.querySelector(".incorrect-count").textContent = incorrectcount;
        
        /*subtitle.style.display = "none"*/
    }
     checkbtn.disabled = true;
}

// Add event listeners:
//cat check button
const catcheck = document.getElementById("cat-check");
catcheck.addEventListener("click", function checkcat() {
    checkAnimal("cat");
});


//dog check button

const dogcheck = document.getElementById("dog-check");
dogcheck.addEventListener("click", function checkdog() {
    checkAnimal("dog");
});

//mouse check button
const mousecheck = document.getElementById("mouse-check");
mousecheck.addEventListener("click", function checkmouse() {
    checkAnimal("mouse");
});


//elephant check button
const elephantcheck = document.getElementById("elephant-check");
elephantcheck.addEventListener("click", function checkelephant() {
    checkAnimal("elephant");
});

//panda check button
const pandacheck = document.getElementById("panda-check");
pandacheck.addEventListener("click", function checkpanda() {
    checkAnimal("panda");
});

//giraffe check button
const giraffecheck = document.getElementById("giraffe-check");
giraffecheck.addEventListener("click", function checkgiraffe() {
    checkAnimal("giraffe");
});

//koala check button
const koalacheck = document.getElementById("koala-check");
koalacheck.addEventListener("click", function checkkoala() {
    checkAnimal("koala");
});

//tiger check button
const tigercheck = document.getElementById("tiger-check");
tigercheck.addEventListener("click", function checktiger() {
    checkAnimal("tiger");
});

//lion check button
const lioncheck = document.getElementById("lion-check");
lioncheck.addEventListener("click", function checklion() {
    checkAnimal("lion");
});

//bird check button
const birdcheck = document.getElementById("bird-check");
birdcheck.addEventListener("click", function checkbird() {
    checkAnimal("bird");
});

// reset button
const resetBtn = document.querySelector(".resetbtn");
resetBtn.addEventListener("click", function() {

    //Reset score counters
    correctcount = 0;
    incorrectcount = 0;
    document.querySelector(".correct-count").textContent = "0";
    document.querySelector(".incorrect-count").textContent = "0";
    
    // List of all animals to reset
    const animals = ["cat", "dog", "mouse", "elephant", "panda", 
                    "giraffe", "koala", "tiger", "lion", "bird"];
    
    //Reset each animal's input, result and button
    animals.forEach(animal => {
        // Clear input field
        document.getElementById(`${animal}-text`).value = "";
        
        // Clear result message
        const resultSpan = document.getElementById(`${animal}-result`);
        resultSpan.textContent = "";
        resultSpan.style.color = "";
        
        // Re-enable check button
        document.getElementById(`${animal}-check`).disabled = false;
    });
});




//---------------------------slide information ----------------------
//collect the element
let btnright = document.querySelector(".btnright")
let btnleft = document.querySelector(".btnleft")

//function to scroll the gallery container
function scrollgallery(pexels){
    let gallerycontainer = document.querySelector(".gallerycontainer")
    gallerycontainer.scrollBy({
        left:pexels,
        behavior: "smooth"
    })
}

//add a click event to each buttons
btnright.addEventListener("click", function(){
    scrollgallery(1200)
})

btnleft.addEventListener("click", function(){
    scrollgallery(-1200)
})





























let topcontainer = document.querySelector(".topcontainer")

window.addEventListener("scroll", function(){
    let pxtop = window.scrollY
    console.log(pxtop)
    if(pxtop>200){
        topcontainer.style.display = "block"
    }
    else {
        topcontainer.style.display = "none"
    }
})