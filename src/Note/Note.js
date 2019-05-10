import React, { Component } from 'react';
import './Note.css';
import { Link } from 'react-router-dom';

// TODO: format date modified

class Note extends Component {
  render() {
    return(
      <li className="note-list-item">
        <h2>
          <Link
            to={`/note/${this.props.id}`}
            onClick={() => this.props.handleSelectNote(this.props.id)}
          >
            {this.props.name}
          </Link>
        </h2>
        <p>{this.props.modified.toLocaleString('en-US')}</p>
      </li>
    );
  }
}

export default Note;