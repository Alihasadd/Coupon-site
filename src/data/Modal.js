import React, { useState } from 'react';

export default funtion Modal(){

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return(
        <div className="bg-blend-lighten hover:bg-blend-darken">
        <button 
        onClick={toggleModal}
        className ="/addform">
            Open
        </button>
        

        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>Add your coupon here</p>

            <button 
            className="close-modal"
            onClick={toggleModal}>
            X</button>
            </div>
        </div>
        </div>
    );
}