import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Lovina Roundy
        </a>
        
      </header>
    </div>
  );
}

export default App;