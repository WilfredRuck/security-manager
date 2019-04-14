import React, { useState } from 'react';

const Modal = ({ handleClose, show, children, addSecurity }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [name, setName] = useState("");
  const [isin, setIsin] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p className="modal-title">Add Security</p>
        <label> Name
          <input onChange={(e) => setName(e.currentTarget.value)}></input>
        </label>
        <label> ISIN
          <input onChange={(e) => setIsin(e.currentTarget.value)}></input>
        </label>
        <label> Country
          <input onChange={(e) => setCountry(e.currentTarget.value)}></input>
        </label>
        {/* {children} */}
        <button onClick={handleClose}>close</button>
        <button onClick={() => { addSecurity(name, isin, country); handleClose();}}>Save</button>
      </section>
    </div>
  );
}

export default Modal;