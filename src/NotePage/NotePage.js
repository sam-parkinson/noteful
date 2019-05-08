import React, { Component } from 'react';
import './NotePage.css';
import Note from '../Note/Note';

class NotePage extends Component {
  render() {
    const note = this.props.note
      ? this.props.note[0]
      : null

    const item = note
      ? <>
          <ul className="note-page-list">
            <Note 
              key={note.id}
              id={note.id}
              name={note.name}
              modified={note.modified}
              handleSelectNote={this.props.handleSelectNote}
            />
          </ul>
          <p>
            {note.content}
          </p>
        </>
      : null
    
    return(item);
  }
}

export default NotePage;