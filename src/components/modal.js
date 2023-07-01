import React from "react";


const Modal = ({ onClose = () => {} , } ) => {
    return(
        <div className="modal">
            <div className="container">
                <button className="close" onClick={onClose}/>
                <div className="content">
                    <h1>Adicionar informação</h1>
                    <div className="outputFormat">
                        <h2>Receita</h2>
                        <h2>Gasto</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal