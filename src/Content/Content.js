import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Content.css';
import MainPage from '../MainPage/MainPage';
import NotePage from '../NotePage/NotePage';
import AddFolder from '../AddFolder/AddFolder';
import AddNote from '../AddNote/AddNote';

// add route to add folder and to add note

class Content extends Component {
  render() {
    return(
      <section className="content">
        <Route 
          exact
          path='/'
          component={MainPage}
        />
        <Route 
          path='/folder/:folderId'
          component={MainPage}
        />
        <Route 
          path='/note/:noteId'
          component={NotePage}
        />
        <Route 
          path='/new/folder'
          component={AddFolder}
        />
        <Route 
          path='/new/note'
          component={AddNote}
        />
      </section>
    );
  }
}

export default Content;