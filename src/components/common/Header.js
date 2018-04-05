import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

class Header extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Redux Async</h1>
          <h5 className="App-subtitle">A demo of various approaches to Async operations in Redux</h5>
          <h5 className="App-subtitle">Showcases Thunks, Promises, Async-Await, Sagas and Observables</h5>

          <div className="App-sub-header">
            <ul className="nav nav-pills nav-justified">
              <li className="nav-item"><NavLink to="/thunks">Thunks</NavLink></li>
              <li className="nav-item"><NavLink to="/promises">Promises</NavLink></li>
              <li className="nav-item"><NavLink to="/async-await">Async-Await</NavLink></li>
              <li className="nav-item"><NavLink to="/sagas">Sagas</NavLink></li>
              <li className="nav-item"><NavLink to="/observables">Observables</NavLink></li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;