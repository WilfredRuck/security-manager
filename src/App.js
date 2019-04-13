import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
            <ul className="security-items">
              {securities}
            </ul>
            <button className="add">Add</button>
          </div>
          
      </div>
    );
  }
}

export default App;
