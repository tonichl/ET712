import React from "react";
import "./App.css";

const Modalwindow = ({ onClose }) => {  // Receive onClose prop
    return (
        <section className="modalwindow" style={{ display: 'block' }}>
            <div className="modalcontent">
                <p className="closemodal" onClick={onClose}>&#x58;</p>
                <header className="modalheader">
                    <p>add feedback</p>
                </header>
                <main className="modalbody">
                    <input className="commentarea" type="text" placeholder="type your comment"/>
                    <p className="description_comment">max 200 characters</p>
                    <button className="btnpostfeedback">post feedback</button>
                </main>
            </div>
        </section>
    );
};

export default Modalwindow;