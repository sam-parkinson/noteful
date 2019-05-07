import React, { Component } from 'react';
import './Note.css';

// TODO: format date modified

class Note extends Component {
  render() {
    return(
      <li className="note-list-item">
        <h2>{this.props.name}</h2>
        <p>{this.props.modified}</p>
      </li>
    );
  }
}

export default Note;