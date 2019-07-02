import React, { Component } from 'react';
import './Note.css';
import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';


class Note extends Component {
  static contextType = NotefulContext

  static propTypes = {
    id: PropTypes.number.isRequired,
    note_name: PropTypes.string.isRequired,
    modified: PropTypes.string.isRequired,
  }

  handleDeleteNote = (id) => {
    fetch(`http://localhost:8000/api/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application-json'
      }
    })
    .then(this.context.removeNote(id))
  }

  render() {

    const deleteButton = (this.props.loc === `/note/${this.props.id}`)
    ? <Link
        to='/'
      >
        <button
          onClick={() => this.handleDeleteNote(this.props.id)}
        >
          
          Delete
        </button>
      </Link>
    : <button
        onClick={() => this.handleDeleteNote(this.props.id)}
      >
        Delete
      </button>

    return(
      <li className="note-list-item">
        <h2>
          <Link
            to={`/note/${this.props.id}`}
            onClick={() => this.props.handleSelectNote(this.props.id)}
          >
            {this.props.note_name}
          </Link>
        </h2>
        <p>{this.props.modified.toLocaleString('en-US')}</p>
        {deleteButton}
      </li>
    );
  }
}

export default Note;