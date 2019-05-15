import React, { Component } from 'react';

class FolderError extends Component {
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
        <li>Error Accessing Folder</li>
      );
    }
    return this.props.children;
  }
}

export default FolderError;