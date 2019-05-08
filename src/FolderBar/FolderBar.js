import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FolderBar.css';

class FolderBar extends Component {

  render() {

    const folderList = this.props.folders.map(folder => 
        <li 
          key={folder.id} 
          className={
            folder.id === this.props.selected 
              ? "folder-list-item selected-folder" 
              : "folder-list-item"
          }
        >
          <Link 
            to={`/folder/${folder.id}`}
            onClick={() => this.props.handleSelectFolder(folder.id)}
          >
          {folder.name}
          </Link>
        </li>
      )

    return (
      <ul className="folder-list">
        {folderList}
      </ul>
    );
  }
}

export default FolderBar;