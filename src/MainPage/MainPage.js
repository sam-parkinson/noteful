import React, { Component } from 'react';
import './MainPage.css';
import Note from '../Note/Note';

class MainPage extends Component {

  render() {
    const notes = this.props.notes.map(note => 
      <Note 
        key={note.id}
        name={note.name}
        modified={note.modified}
      />
    )

    return(
      <ul className="main-page-list">
        {notes}
      </ul>
    )
  }
}

export default MainPage