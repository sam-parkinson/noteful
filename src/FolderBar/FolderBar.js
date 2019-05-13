import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FolderBar.css';
import NotefulContext from '../NotefulContext';

class FolderBar extends Component {
  static contextType = NotefulContext;

  render() {
    const folderList = this.context.folders.map(folder => 
        <li 
          key={folder.id} 
          className={
            folder.id === this.context.selected 
              ? "folder-list-item selected-folder" 
              : "folder-list-item"
          }
        >
          <Link 
            to={`/folder/${folder.id}`}
            onClick={() => {
              this.context.handleSelectFolder(folder.id)
            }}
          >
            {folder.name}
          </Link>
        </li>
      )

    return (
      <ul className="folder-list">
        {folderList}
        <li>
          <Link to='/new/folder'>Create New Folder</Link>
        </li>
      </ul>
    );
  }
}

export default FolderBar;