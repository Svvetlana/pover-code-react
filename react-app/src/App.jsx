import React, { useEffect, useState } from 'react';
import './App.css';
import {Timer} from './componennts/timer';

function App() {

  useEffect(() => {}, [])
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

export default App;
