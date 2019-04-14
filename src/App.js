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

  addSecurity = () => {
    const newSecurityState = this.state.securities.concat(<li key={this.state.securities.length + 1} className="security-item">
      <p className="security-name">Security Name</p>
      <div className="security-attr">
        <p>ISIN#</p>
        <p>Country</p>
        <p>Prices</p>
        <p>Edit</p>
      </div>
    </li>);
    this.setState({ securities: newSecurityState});
  }

  render() {
    if (this.state.securities.length < 3) {
      [1,2,3].forEach((val) => {
        this.state.securities.push(
          <li key={val} className="security-item">
            <p className="security-name">Security Name</p>
            <div className="security-attr">
              <p>ISIN#</p>
              <p>Country</p>
              <p>Prices</p>
              <p>Edit</p>
            </div>
          </li>
        )
      });
    }
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
