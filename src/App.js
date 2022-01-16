import React from 'react';
import './App.css';
import { sample } from './sample';
import CollapsableTable from './components/CollapsableTable/CollapsableTable';


const App = () => {
  const data = JSON.parse(JSON.stringify(sample))
  return (
    <div className="App">
      <CollapsableTable rows={data} />
    </div>
  );
}

export default App;