console.log("toni chen liang")

//example1
//collect the element
let btnscrollby = document.querySelector(".btnscrollby")
btnscrollby.addEventListener("click", function(){
    window.scrollBy(100,0)
})

//example2
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


//example 3

let topcontainer = document.querySelector(".topcontainer")

window.addEventListener("scroll", function(){
    let pxtop = window.scrollY
    console.log(pxtop)
    if(pxtop>80){
        topcontainer.style.display = "block"
    }
    else {
        topcontainer.style.display = "none"
    }
})




