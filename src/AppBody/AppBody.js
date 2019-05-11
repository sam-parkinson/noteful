import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import './AppBody.css';

class AppBody extends Component {

  render() {
    return (
      <main className="main">
        <Sidebar />
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