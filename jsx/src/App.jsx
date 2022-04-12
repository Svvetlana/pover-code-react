import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter';

function App() {
 const[counterValues, setCounterValues] = useState([1, 1, 1]);
  const change = (val, index) => {
    setCounterValues((counterValues) => {
      counterValues[index] = val;
      return [...counterValues];
    })
  }
  
  return (
      <div className="App">
        <Counter defaultValue={1} step={1} onMyChange={(val)=> change(val, 0)}/>
        <Counter defaultValue={1} step={1} onMyChange={(val)=> change(val, 0)}/>
        <Counter defaultValue={1} step={1} onMyChange={(val)=> change(val, 0)}/>
        <div>
          {counterValues.reduce((x, e) => x + e)}
        </div>
      </div>
  );
}

      export default App;
