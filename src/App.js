import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ReactJS project with Oracle Kubernetes Engine, Continuous Integration Server Travis and GitHub
        </p>
        <a
          className="App-link"
          href="https://dzone.com/content/2944068"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dzone Article Link
        </a>
      </header>
    </div>
  );
}

export default App;
