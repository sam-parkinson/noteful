import React, { Component } from 'react';
import config from '../config';

class AddFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folder_name: ''
    };
  }
  
  updateName(folder_name) {
    this.setState({folder_name});
  }

  handleSubmit(e) {
    e.preventDefault();
    
    fetch('https://guarded-chamber-89552.herokuapp.com/api/folders', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      },
    })
      .then(res => {
        return res.json()
      })
      .then(this.props.history.push('/'))
      .catch(err => {
        console.log(err);
        alert('Unable to create new folder')
      });
  }

  render () {
    return(
      <form onSubmit={e => this.handleSubmit(e)}>
        <h3>Create New Folder</h3>
        <label htmlFor="folder_name">Name: {' '}</label>
        <input type="text" folder_name="folder_name" id="folder_name" onChange={e => this.updateName(e.target.value)} required />
        <button type="submit">Add Folder</button>
      </form>
    )
  }
}

export default AddFolder;