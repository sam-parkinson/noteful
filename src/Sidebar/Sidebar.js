import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Sidebar.css';
import FolderBar from '../FolderBar/FolderBar';
import NoteBar from '../NoteBar/NoteBar';
import BackBar from '../BackBar/BackBar'; 

class Sidebar extends Component {
  render() {

    return(
      <section className="sidebar">
        <Route 
          exact
          path='/'
          component={FolderBar}
        />
        <Route 
          path='/folder/:folderId'
          component={FolderBar}
        />
        <Route 
          path='/note/:noteId'
          component={NoteBar}
        />
        <Route 
          path='/new/:item'
          component={BackBar}
        />
      </section>
    );
  }
}

export default Sidebar