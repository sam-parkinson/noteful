import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
  render() {
    return(
      <header className="navbar">
        <h1>
          <Link 
            to="/"
            onClick={this.props.handleGoHome}
          >
            Noteful
          </Link>
        </h1>
      </header>
    );
  }
}

export default Navbar;