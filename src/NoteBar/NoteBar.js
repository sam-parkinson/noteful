import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoteBar.css';
import NotefulContext from '../NotefulContext';
import BackBar from '../BackBar/BackBar';

class NoteBar extends Component {
  static contextType = NotefulContext;

  render() {

    const folder = this.context.noteViewed
      ? this.context.folders.filter(
        folder => (folder.id === this.context.noteViewed[0].folderId)
      )
      : null

    const folderBar = folder
    ? <Link
        to='/folder/:folderID'
        onClick={() => this.context.handleSelectFolder(folder[0].id)}
      >
      {folder[0].name}
      </Link>
    : null

    return(
      <ul className="note-list">
        <li className="note-list-item">
          {folderBar}
        </li>
        <li className="note-list-item">
          <BackBar />
        </li>
      </ul>
    );
  }
}

export default NoteBar;