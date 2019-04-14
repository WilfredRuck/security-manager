import React from 'react';

const Modal = ({ handleClose, show, children, addSecurity }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
        <button onClick={() => { addSecurity(); handleClose();}}>Save</button>
      </section>
    </div>
  );
}

export default Modal;