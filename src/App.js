import React, { useState } from 'react';
import './App.css';
import { sample } from './sample';
import CollapsableTable from './components/CollapsableTable/CollapsableTable';
import { TextField } from '@material-ui/core';
import SearchBar from './components/SearchBar/SearchBar';


const App = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const data = JSON.parse(JSON.stringify(sample))

  const l = (e) => {
    console.log(e);
    setTitle(e)
  }
  return (
    <div className="App">
      <SearchBar
        updateAuthorSearch={(value) => setAuthor(value)}
        updateTitleSearch={(value) => setTitle(value)}
        titles={data.map(row => row.title)}
        authors={data.map(row => row.author!==null?row.author:'unknown')} />
      <CollapsableTable author={author} title={title} rows={data} />
    </div>
  );
}

export default App;