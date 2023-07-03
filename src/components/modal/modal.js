import React from "react";
import Form from "../Form";



const Modal = ({ onClose = () => {} , } ) => {
    return(
        <div className="modal">
            <div className="container">
                <button className="close" onClick={onClose}/>
                <div className="content">
                    <h1>Adicionar informação</h1>
                    <Form/>
                </div>
            </div>
        </div>
    );
};

export default Modal