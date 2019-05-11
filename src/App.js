import React, { Component } from 'react';
import Navbar from './navbar/navbar';
import AppBody from './AppBody/AppBody';
import './App.css';
import NotefulContext from './NotefulContext';
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

    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      selected: this.state.selected,
      noteViewed: this.state.noteViewed,
      handleSelectFolder: this.handleSelectFolder,
      handleGoHome: this.handleGoHome,
      handleSelectNote: this.handleSelectNote,
    }

    return (
      <div className="App">
        <NotefulContext.Provider 
          value={contextValue}
        >
          <Navbar />
          <AppBody 
            folders={this.state.folders}
            notes={this.state.notes}
            selected={this.state.selected}
            noteViewed={this.state.noteViewed}
            handleSelectFolder={this.handleSelectFolder}
            handleSelectNote={this.handleSelectNote}
          />
        </NotefulContext.Provider> 
      </div>      
    );
  }
}

export default App;