import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">(RE)Solution</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/LoginForm" className="nav-link">Login</Link>
            </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">Workouts</Link>
          </li>
          <li className="navbar-item">
          <Link to="/CreateWorkout" className="nav-link">Create Workout</Link>
          </li>
          <li className="navbar-item">
          <Link to="/User" className="nav-link">User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}