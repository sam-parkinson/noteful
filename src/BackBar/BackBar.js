import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './BackBar.css';

class BackBar extends Component {
  render() {
    return(
      <button
        onClick={() => this.props.history.goBack()}
      >
        Back
      </button>
    )
  }
}

export default withRouter(BackBar);