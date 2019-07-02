import React, { Component } from 'react';
import './NotePage.css';
import Note from '../Note/Note';
import NoteError from '../Note/NoteError';
import NotefulContext from '../NotefulContext';

class NotePage extends Component {
  static contextType = NotefulContext;

  render() {
    const note = this.context.noteViewed
      ? this.context.noteViewed[0]
      : null

    const item = note
      ? <NoteError>
          <ul className="note-page-list">
            <Note 
              key={note.id}
              id={note.id}
              note_name={note.note_name}
              modified={note.modified}
              handleSelectNote={this.context.handleSelectNote}
              loc={this.props.location.pathname}
            />
          </ul>
          <p>
            {note.content}
          </p>
        </NoteError>
      : null
    
    return(item);
  }
}

export default NotePage;