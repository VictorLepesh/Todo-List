import React, { Component } from 'react'; // we can remove , { Component } and instead of doing extends Component we do extends React.Componenet
import Todos from "./components/Todos";
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
        completed: true
      },
      {
        id: 3, // Usually you'll have a unique ID from the backend
        title: "Dog Todo",
        completed: false
      }
    ]
  }

  // toggle complete
  // We have to use arrow functions, not vanilla unless we bind them with .bind(this)
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo-id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
  
  // below <Todos todos={this.state.todos} /> is how we access our todos component
  render() {
    return (
      <div className="App">
        <Todos info={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;

