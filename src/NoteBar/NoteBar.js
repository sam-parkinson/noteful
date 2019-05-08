import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './NoteBar.css';

class NoteBar extends Component {

  render() {

    const folder = this.props.noteViewed
      ? this.props.folders.filter(
        folder => (folder.id === this.props.noteViewed[0].folderId)
      )
      : null

    const folderBar = folder
    ? <Link
        to='/folder/:folderID'
        onClick={() => this.props.handleSelectFolder(folder[0].id)}
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
          <button
            onClick={() => this.props.history.goBack()}
          >
            Back
          </button>
        </li>
      </ul>
    );
  }
}

export default withRouter(NoteBar);