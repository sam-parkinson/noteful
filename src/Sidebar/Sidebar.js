import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Sidebar.css';
import FolderBar from '../FolderBar/FolderBar';

class Sidebar extends Component {
  render() {

    const folders = this.props.folders

    return(
      <section className="sidebar">
        <Route 
          exact
          path='/'
          render={() =>
            <FolderBar 
              folders={folders}
              selected={this.props.selected}
              handleSelectFolder={this.props.handleSelectFolder}
            />}
        />
        <Route 
          path='/folder/:folderId'
          render={() =>
            <FolderBar 
              folders={folders}
              selected={this.props.selected}
              handleSelectFolder={this.props.handleSelectFolder}
            />
          }
        />
      </section>
    );
  }
}

export default Sidebar