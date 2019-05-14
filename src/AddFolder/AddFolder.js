import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class AddFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  
  updateName(name) {
    this.setState({name});
  }

  handleSubmit(e) {
    e.preventDefault();
    
    fetch('http://localhost:9090/folders', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(this.props.history.goBack)
  }

  render () {
    return(
      <form onSubmit={e => this.handleSubmit(e)}>
        <h3>Create New Folder</h3>
        <label htmlFor="name">Name: {' '}</label>
        <input type="text" name="name" id="name" onChange={e => this.updateName(e.target.value)} required />
        <button type="submit">Add Folder</button>
      </form>
    )
  }
}

export default withRouter(AddFolder);