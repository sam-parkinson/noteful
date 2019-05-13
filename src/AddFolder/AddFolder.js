import React, { Component } from 'react';

class AddFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: ''
    };
  }

  makeID() {
    const newID = new Date().valueOf().toString();
    this.setState({id: newID});
  }
  
  updateName(name) {
    this.setState({name});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
  }

  componentDidMount() {
    this.makeID();
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

export default AddFolder