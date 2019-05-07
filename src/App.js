import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import STORE from './dummy-store';

class App extends Component {
  constructor(props) {
    super(props);
    state = STORE;
  }

  render() {
    return (
      <div  className='App'>
        <Navbar />
        <main>
          <section>
            Sidebar
          </section>
          <section>
            Content
          </section>
        </main>
      </div>
    );
  }
}

export default App;