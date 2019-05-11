import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import './AppBody.css';

class AppBody extends Component {

  render() {
    return (
      <main className="main">
        <Sidebar 
          folders={this.props.folders}
          notes={this.props.notes}
          selected={this.props.selected}
          noteViewed={this.props.noteViewed}
          handleSelectFolder={this.props.handleSelectFolder}
        />
        <Content 
          notes={this.props.notes}
          selected={this.props.selected}
          noteViewed={this.props.noteViewed}
          handleSelectNote={this.props.handleSelectNote}
        /> 
      </main>
    );
  }
}

export default AppBody;