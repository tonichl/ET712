import React from "react"
import "./index.css"

const modalwindow = function(props){
    //function to close modal window
    const closemodalwindow = function(){
        const modalwindow = document.querySelector(".modalwindow")
        modalwindow.style.display ="none"
        }

    return(
        <>
            {/*modal window*/}
            <section className="modalwindow">
                <div className="modalcontent">
                    <header className= "modalheader">
                        <p>add feedback</p>
                        <p className="closemodal" onClick={closemodalwindow}>&#x58;</p>
                    </header>
                    <main className = "modalbody">
                        <input className="commentarea" type="text" placeholder="type your comment"/>
                        <p className="description_comment"> max 200 characters</p>
                        <button className="btnpostfeedback"> post feedback</button>
                    </main>
                </div>
            </section>
        </>
    )
}

export default modalwindow