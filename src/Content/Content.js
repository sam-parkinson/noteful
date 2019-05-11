import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Content.css';
import MainPage from '../MainPage/MainPage';
import NotePage from '../NotePage/NotePage';

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
      </section>
    );
  }
}

export default Content;