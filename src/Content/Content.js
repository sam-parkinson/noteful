import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Content.css';
import MainPage from '../MainPage/MainPage';
import NotePage from '../NotePage/NotePage';

class Content extends Component {
  render() {
    const notes = this.props.selected
      ? this.props.notes.filter(note => note.folderId === this.props.selected)
      : this.props.notes

    return(
      <section className="content">
        <Route 
          exact
          path='/'
          render={() =>
            <MainPage 
              notes={notes}
              handleSelectNote={this.props.handleSelectNote}
            />
          }
        />
        <Route 
          path='/folder/:folderId'
          render={() =>
            <MainPage 
              notes={notes}
              handleSelectNote={this.props.handleSelectNote}
            />
          }
        />
        <Route 
          path='/note/:noteId'
          render={() =>
            <NotePage 
              note={this.props.noteViewed}
              handleSelectNote={this.props.handleSelectNote}
            />
          }
        />
      </section>
    );
  }
}

export default Content;