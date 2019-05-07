import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Content.css';
import MainPage from '../MainPage/MainPage';

class Content extends Component {
  render() {
    const notes = this.props.notes

    return(
      <section className="content">
       <Route 
        exact
        path='/'
        render={() =>
          <MainPage 
            notes={notes}
          />}
       />
       <Route 
        path='/folder/:folderId'
        render={() =>
          <MainPage 
            notes={notes}
          />}
       />
      </section>
    );
  }
}

export default Content;