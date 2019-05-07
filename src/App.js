import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import './App.css';
import STORE from './dummy-store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = STORE;
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <main className="main">
          <Sidebar />
          <Content />
        </main>
      </div>
    );
  }
}

export default App;