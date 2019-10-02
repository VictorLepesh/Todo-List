import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Body = () => {
  return (
    <p>
      Edit <code>src/App.js </code> and save to reload. test
    </p>
  );
};

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Hiiiii</h1>
      </header>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Body />
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
