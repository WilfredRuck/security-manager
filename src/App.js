import React, { Component } from 'react';
import Modal from './modal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const securities = [];
    [1,2,3].forEach((val) => {
      securities.push(
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
    return (
      <div className="app">
          <div>
            <h2>Securities</h2>
            <Modal show={this.state.show} handleClose={this.hideModal}>
              <p>Modal</p>
              <p>Data</p>
            </Modal>
            <ul className="security-items">
              {securities}
            </ul>
            <button className="add" onClick={this.showModal}>Add</button>
          </div>
          
      </div>
    );
  }
}

export default App;
