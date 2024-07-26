import React from "react";
import "./Modal.css";

const Modal = ({ content, modalType, onResponse }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{content}</p>
        {modalType === "confirm" ? (
          <>
            <button onClick={() => onResponse("yes")}>Tak</button>
            <button onClick={() => onResponse("no")}>Nie</button>
          </>
        ) : (
          <button onClick={() => onResponse("ok")}>OK</button>
        )}
      </div>
    </div>
  );
};

export default Modal;
