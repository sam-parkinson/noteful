import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import NotefulContext from '../NotefulContext';

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      folderId: '',
      content: ''
    }
  }

  static contextType = NotefulContext;

  postNote(note) {
    fetch('http://localhost:9090/notes', {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(<Redirect to="/" />)
  }

  handleNameChange(name) {
    this.setState({name});
  }

  handleContentChange(content) {
    this.setState({content});
  }

  handleFolderId(folderId) {
    this.setState({folderId});
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
          {folder.name}
        </option>
      )
    )

    return(
      <form onSubmit={e => this.handleSubmit(e)}> 
        <label htmlFor="name" >Name: {' '}</label>
        <input type="text" name="name" id="name" onChange={(e) => this.handleNameChange(e.target.value)} required />
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