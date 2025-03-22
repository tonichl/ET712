console.log("toni chen liang")


//example 1 
const myform = document.querySelector("#myform")
const greeting = document.querySelector(".greeting")
const greetuser = document.querySelector(".greetuser")
const btnsubmit = document.querySelector(".btnsubmit")
const errmsg = document.querySelector(".errmsg")


window.addEventListener("load", function(){
    //disable the submit button when the website is loaded
    btnsubmit.disabled = true
})


myform.addEventListener("submit", function(event){
    event.preventDefault()

    //collect the username
    let username = document.querySelector("#username")
    let usernamevalue = username.value

    //remove whitespace before and after the username 
    usernamevalue = usernamevalue.trim()

    //test
    //console.log(usernamevalue.length)

    //validation of username
    if (usernamevalue === "" ){
        alert("please enter a name")
        return; // stop execution of the code
    }

    //print the username in the greeting message
    greetuser.innerHTML = usernamevalue
    greeting.style.display = "block"

    //clear input value
    username.value =""

})



//collect the password
let password = document.querySelector("#password")

password.addEventListener("input", function(){
let passwordvalue = password.value

//remove whitespace before and after the password
passwordvalue = passwordvalue.trim()


 if(passwordvalue.length < 8){
    errmsg.style.display = "block"
    btnsubmit.disabled = true
    }
    else{
    errmsg.style.display = "none"
    btnsubmit.disabled = false;
    }

    
})


//homework 4
//exersise 1

/*
You will create a form that takes the user's name, email, and password. You will:

Prevent form submission if any field is empty.
Validate the email address format.
Validate the password strength (at least 5 characters, 
includes at least one of the characters #, $, or %).
Show error messages under each field that is invalid.
Create the HTML structure
A form with:
Name (text input)
Email (text input)
Password (password input)
Submit button
Handle Form Submission
Use JavaScript to intercept the form submission and validate the inputs.
Display appropriate error messages if validation fails.
Prevent the form from submitting if validation fails.
Display Success Message
If the form passes validation, show a success message.
Note: You are not allowed to use programming concepts that have 
not yet been covered in class. */

const Btnsubmit = document.querySelector(".Btnsubmit")
const Passerrmsg = document.querySelector(".Passerrmsg")
const Passerrmsgchar = document.querySelector(".Passerrmsgchar")
const Emailerrmsg = document.querySelector(".Emailerrmsg")
const Myform= document.querySelector("#Myform")

Myform.addEventListener("submit", function(event){
    event.preventDefault()

    let Name = document.querySelector("#Name")
    let Namevalue = Name.value
    Namevalue = Namevalue.trim()


    let Email = document.querySelector("#Email")
    let Emailvalue = Email.value
    Emailvalue = Emailvalue.trim()


    let Password = document.querySelector("#Password")
    let Passwordvalue= Password.value
    Passwordvalue = Passwordvalue.trim()




    if(Namevalue === ""){
        alert("please enter a name")
        return;
    }

    if(Emailvalue === ""){
        alert("please enter valid email")
        return;
    }

    if(Passwordvalue === ""){
        alert("please enter password")
        return;
    }

    alert("Form submitted successfully!")


    Name.value = ""
    Email.value = ""
    Password.value = ""

})
    


let Password = document.querySelector("#Password")
Password.addEventListener("input", function(){

    let Passwordvalue= Password.value
    Passwordvalue = Passwordvalue.trim()
    console.log("Passwordvalue:", Passwordvalue); // Check the value of Passwordvalue.

    let Passlength = Passwordvalue.length < 5 //check password length value 

    let specialchar = false // check special character in the password value
    for (let i = 0; i < Passwordvalue.length; i++) {
        if (Passwordvalue[i] === "#" || Passwordvalue[i] === "$" || Passwordvalue[i] === "%") {
            specialchar = true;
            break;
        }
    }

    
    if (Passlength===true) {
        Passerrmsg.style.display = "block";
    } else {
        Passerrmsg.style.display = "none";
    }

    if (specialchar===false) {
        Passerrmsgchar.style.display = "block";
    } else {
        Passerrmsgchar.style.display = "none";
    }
})


let Email = document.querySelector("#Email")
Email.addEventListener("input", function(){
    
    let Emailvalue = Email.value
    Emailvalue = Emailvalue.trim()


    let Emailchar = false
    for (let i = 0; i < Emailvalue.length; i++) {
        if (Emailvalue[i] === "@" ) {
            Emailchar = true;
            break;
        }
    }

    if (Emailchar===false) {
        Emailerrmsg.style.display = "block";
    } else {
        Emailerrmsg.style.display = "none";
    }
    
})

//exercise 2

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



