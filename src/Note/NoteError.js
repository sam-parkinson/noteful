import React, { Component } from 'react';

class NoteError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return {hasError: true}
  }

  render() {
    if (this.state.hasError) {
      return (
        <li>The note(s) could not be displayed</li>
      );
    }
    return this.props.children;
  }
}

export default NoteError;