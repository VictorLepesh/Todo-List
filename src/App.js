import React, { Component } from 'react'; // we can remove , { Component } and instead of doing extends Component we do extends React.Componenet
import Todos from "./components/Todos"
import './App.css';



class App extends Component {
  state = {
    todos: [ // array of objects
      {
        id: 1, // Usually you'll have a unique ID from the backend
        title: "Zebra Todo",
        completed: false
      },
      {
        id: 2, // Usually you'll have a unique ID from the backend
        title: "Hippo Todo",
        completed: false
      },
      {
        id: 3, // Usually you'll have a unique ID from the backend
        title: "Dog Todo",
        completed: false
      }
    ]
  }
  
  // below <Todos todos={this.state.todos} /> is how we access our todos component
  render() {
    return (
      <div className="App">
        <h1>Suppp</h1>
        <Todos info={this.state.todos[0]} />
        <Todos info={this.state.todos[1]} />
        <Todos info={this.state.todos[2]} />
        <h1>Heyyy</h1>
      </div>
    );
  }
}

export default App;

