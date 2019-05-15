import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import './AppBody.css';

class AppBody extends Component {

  render() {
    return (
      <main className="main">
        <Sidebar />
        <Content /> 
      </main>
    );
  }
}

export default AppBody;