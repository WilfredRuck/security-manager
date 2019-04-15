import React, { Component } from 'react';
import Modal from './modal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, securities: [] };
  }

  showModal = (e) => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  addSecurity = (name, isin, country) => {
    if ((name === "") || (isin === "") || (country === "")) return;
    const newSecurityState = this.state.securities.concat(<li key={this.state.securities.length + 1} className="security-item">
      <p className="security-name">{name}</p>
      <div className="security-attr">
        <p>{isin}</p>
        <p>{country}</p>
        <p><a href="#">Prices</a></p>
        <p><a href="#">Edit</a></p>
      </div>
    </li>);
    this.setState({ securities: newSecurityState});
  }

  render() {
    return (
      <div className="app">
          <div>
            <h2>Securities</h2>
            <Modal show={this.state.show} handleClose={this.hideModal} addSecurity={this.addSecurity}>
              <p>Modal</p>
              <p>Data</p>
            </Modal>
            <ul className="security-items">
              {this.state.securities}
            </ul>
            <button className="add" onClick={(e) => this.showModal(e)}>Add</button>
          </div>
          
      </div>
    );
  }
}

export default App;
