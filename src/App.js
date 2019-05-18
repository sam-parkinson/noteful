import React, { Component } from 'react';
import Navbar from './navbar/navbar';
import AppBody from './AppBody/AppBody';
import './App.css';
import NotefulContext from './NotefulContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: [],
      selected: null,
      noteViewed: null,
    };
  }

  handleSelectFolder = (id) => {
    this.setState({
      selected: id,
    });
  }

  handleGoHome = () => {
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

  removeNote = (id) => {
    const newNotes = this
      .state
      .notes
      .filter(
        note => note.id !== id
      );
    this.setState({
      notes: newNotes,
    });
  }

  componentDidMount() {
    fetch('http://localhost:9090/folders')
      .then(res => res.json())
      .then(data => this.setState({
        folders: data,
      }))
      .catch(err => console.log(err));
    
    fetch('http://localhost:9090/notes')
      .then(res => res.json())
      .then(nt => this.setState({
        notes: nt,
      }))
      .catch(err => console.log(err))  
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
      removeNote: this.removeNote,
    }

    return (
      <div className="App">
        <NotefulContext.Provider 
          value={contextValue}
        >
          <Navbar />
          <AppBody />
        </NotefulContext.Provider> 
      </div>      
    );
  }
}

export default App;