import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import NotefulContext from '../NotefulContext';

class Navbar extends Component {
  static contextType = NotefulContext;

  render() {  
    return(
      <NotefulContext.Consumer>
        {(value) =>{
          console.log(value)
          return(
            <header className="navbar">
            <h1>
              <Link 
                to="/"
                onClick={this.context.handleGoHome}
              >
                Noteful
              </Link>
            </h1>
          </header>
          )
        }}
        
      </NotefulContext.Consumer>      
    );
  }
}

export default Navbar;