import logo from './logo.svg';
import './App.css';
import React from 'react';

function HelloWorld() {
  const currentDate = new Date();
  const array = ['Ivan', 'Mary', 'Sara']
  return (
    <section className="top">
      <h1>Hello World</h1>
      <h4>{currentDate.toString()}</h4>
      {array.map((e, i) => {
        return <React.Fragment key={`${e} + ${i}`}>
          <i>{e}</i><br />
        </React.Fragment>
      })}
    </section>
  )
}

      function App() {
  return (
      <div className="App">
        <HelloWorld />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      );
}

      export default App;
