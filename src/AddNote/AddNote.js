import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note_name: '',
      folder_id: '',
      content: ''
    }
  }

  static contextType = NotefulContext;

  postNote(note) {
    fetch('http://localhost:8000/api/notes', {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return res.json()
    })
    .then(this.props.history.push('/'))
    .catch(err => {
      console.log(err);
      alert('Unable to post new note')
    })
  }

  handleNameChange(note_name) {
    this.setState({note_name});
  }

  handleContentChange(content) {
    this.setState({content});
  }

  handleFolderId(folder_id) {
    this.setState({folder_id});
  }

  handleSubmit(e) {
    e.preventDefault();
    const noteBody = this.state;
    noteBody.modified = new Date();
    console.log(noteBody);
    this.postNote(noteBody);
  }

  render() {
    const options = this.context.folders.map(
      folder => (
        <option key={folder.id} value={folder.id}>
          {folder.folder_name}
        </option>
      )
    )

    return(
      <form onSubmit={e => this.handleSubmit(e)}> 
        <label htmlFor="note_name" >Name: {' '}</label>
        <input type="text" note_name="note_name" id="note_name" onChange={(e) => this.handleNameChange(e.target.value)} required />
        <br />
        <label htmlFor="folders">Folder: {' '}</label>
        <select name="folders" onChange={(e) => this.handleFolderId(e.target.value)}  >
          <option value=''>{' '}</option>
          {options}
        </select>
        <br />
        <label htmlFor="content">Content: {' '}</label>
        <textarea name="content" id="content" onChange={(e) => this.handleContentChange(e.target.value)} />
        <br />
        <button type="submit">
          Add Note
        </button>
      </form>
    )
  }
}

export default AddNote;