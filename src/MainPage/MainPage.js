import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';
import Note from '../Note/Note';
import NoteError from '../Note/NoteError'
import NotefulContext from '../NotefulContext';

// add button to add note here, should link to add note route

class MainPage extends Component {
  static contextType = NotefulContext;

  render() {
    const notes = this.context.selected
    ? this.context.notes
      .filter(note => note.folder_id === this.context.selected)
      .map(note => 
        <Note 
          key={note.id}
          id={note.id}
          note_name={note.note_name}
          modified={note.modified}
          handleSelectNote={this.context.handleSelectNote}
        />
      )
    : this.context.notes.map(note => 
        <Note 
          key={note.id}
          id={note.id}
          note_name={note.note_name}
          modified={note.modified}
          handleSelectNote={this.context.handleSelectNote}
        />
      )

    return(
      <ul className="main-page-list">
        <NoteError>
          {notes}
        </NoteError>
        <li>
          <Link to='/new/note'>Add Note</Link>
        </li>
      </ul>
    )
  }
}

export default MainPage