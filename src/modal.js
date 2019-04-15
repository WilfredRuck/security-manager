import React, { useState } from 'react';

const Modal = ({ handleClose, show, children, addSecurity }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [name, setName] = useState("");
  const [isin, setIsin] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-info">
          <p className="modal-title">Add Security</p>
          <div className="nameAndIsin">
            <label className="name"> Name
              <input onChange={(e) => setName(e.currentTarget.value)}></input>
            </label>
            <label className="isin"> ISIN
              <input onChange={(e) => setIsin(e.currentTarget.value)}></input>
            </label>
          </div>
          <div>
            <label> Country<br/>
              <input onChange={(e) => setCountry(e.currentTarget.value)}></input>
            </label>
          </div>
        </div>
        {/* {children} */}
        <div className="button-section">
          <p onClick={handleClose}>Cancel</p>
          <p onClick={() => { addSecurity(name, isin, country); handleClose();}}>Save</p>
        </div>
      </section>
    </div>
  );
}

export default Modal;