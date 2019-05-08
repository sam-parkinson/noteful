import React, { Component } from 'react';
import Navbar from './navbar/navbar';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import './App.css';
import STORE from './dummy-store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: STORE.folders,
      notes: STORE.notes,
      selected: null,
      noteViewed: null,
    };
  }

  handleSelectFolder = (id) => {
    this.setState({
      selected: id,
    });
  }

  handleGoHome() {
    this.setState({
      selected: null,
    })
  }

  handleSelectNote = (id) => {
    const noteViewed = this
      .state
      .notes
      .filter(
        note => note.id === id
    );
    this.setState({
      noteViewed: noteViewed,
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar 
          handleGoHome={this.handleGoHome}
        />
        <main className="main">
          <Sidebar 
            folders={this.state.folders}
            notes={this.state.notes}
            selected={this.state.selected}
            noteViewed={this.state.noteViewed}
            handleSelectFolder={this.handleSelectFolder}
          />
          <Content 
            notes={this.state.notes}
            selected={this.state.selected}
            noteViewed={this.state.noteViewed}
            handleSelectNote={this.handleSelectNote}
          />
        </main>
      </div>
    );
  }
}

export default App;