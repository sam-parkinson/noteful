import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext';

// add button to add note here, should link to add note route

class MainPage extends Component {
  static contextType = NotefulContext;

  render() {
    const notes = this.context.selected
    ? this.context.notes
      .filter(note => note.folderId === this.context.selected)
      .map(note => 
        <Note 
          key={note.id}
          id={note.id}
          name={note.name}
          modified={note.modified}
          handleSelectNote={this.context.handleSelectNote}
        />
      )
    : this.context.notes.map(note => 
        <Note 
          key={note.id}
          id={note.id}
          name={note.name}
          modified={note.modified}
          handleSelectNote={this.context.handleSelectNote}
        />
      )

    return(
      <ul className="main-page-list">
        {notes}
        <li>
          <Link to='/new/note'>Add Note</Link>
        </li>
      </ul>
    )
  }
}

export default MainPage