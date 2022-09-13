import React from "react";
import "./Modal.css";
import { AiOutlineCloseCircle, AiOutlineInfoCircle } from "react-icons/ai";

const Modal = ({onCloseModal}) => {
  return (
    <div className="pop-up-section close-modal" onClick={onCloseModal}>
      <div className="pop-up-content card">
        <div className="close-icon">
          <AiOutlineCloseCircle onClick={onCloseModal} className='close-modal' color="red" size={25} />
        </div>
        <div className="pop-up-head">
          <AiOutlineInfoCircle className="mt-2 me-1" color="orangered" size={18} />
        <h3>Do You Want to Continue?</h3>
        </div>
        <div className="pop-up-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic vitae,
            eos modi quaerat illum assumenda adipisci culpa ratione similique
            commodi? Sequi eos placeat quisquam, voluptates dolore tempora
            debitis aut quo.
          </p>
        </div>
        <div className="pop-up-footer">
          <button className="btn btn-secondary me-2 close-modal" onClick={onCloseModal}>Cancel</button>
          <button  className="btn btn-primary">Proceed</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
