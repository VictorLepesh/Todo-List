import React, { Component } from 'react'; // we can remove , { Component } and instead of doing extends Component we do extends React.Componenet
import './App.css';
import { toUnicode } from 'punycode';



function App() {
  return (
    <div className="App">
      <h1>Clean</h1>
    </div>
  );
}

export default App;

