import React from 'react';
import { Logo } from "@cashier/shared-components";
import logo from "./assets/logo.svg";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
