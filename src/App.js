import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import './App.css';
import STORE from './dummy-store';

// selected will indicate which folder is selected
// use selected in main page and main sidebar, to color relevant li in sidebar and filter by note id in main

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: STORE.folders,
      notes: STORE.notes,
      selected: null,
    };
  }

  handleSelectFolder = (id) => {
    this.setState({
      selected: id,
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <main className="main">
          <Sidebar 
            folders={this.state.folders}
            notes={this.state.notes}
            selected={this.state.selected}
            handleSelectFolder={this.handleSelectFolder}
          />
          <Content 
            notes={this.state.notes}
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
}

export default App;