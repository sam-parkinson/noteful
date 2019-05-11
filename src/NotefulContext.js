import React from 'react';

const NotefulContext = React.createContext({
  folders: [],
  notes: [],
  selected: null,
  noteViewed: null,
  handleSelectFolder: () => {},
  handleGoHome: () => {},
  handleSelectNote: () => {},
})

export default NotefulContext;