import React from "react";
import "./App.css";

/*const Modalwindow = ({ onClose }) => {  // Receive onClose prop
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
};*/

const Modalwindow = ({ item, onClose }) => {
    if (!item) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>×</button>
          <h2>{item.name}</h2>
          <div className="modal-image-container">
            <img 
              src={item.image} 
              alt={item.name} 
              className="modal-image"
            />
          </div>
          <div className="modal-details">
            <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
            <p><strong>Pack Size:</strong> {item.pack}</p>
            {item.description && (
              <p className="description">{item.description}</p>
            )}
          </div>
        </div>
      </div>
    );
  };

export default Modalwindow;