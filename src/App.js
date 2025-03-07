import React, { Component } from 'react'; // we can remove , { Component } and instead of doing extends Component we do extends React.Componenet
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header.js";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About"
import axios from 'axios';
import './App.css';



class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(response => this.setState({ todos: response.data}))
  }
  
  // toggle complete
  // We have to use arrow functions, not vanilla unless we bind them with .bind(this)
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    axios.delete("https://jsonplaceholder.typicode.com/todos/${id}")
      .then(response => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }) );
    
  }

  // Add Todo
  addTodo = (title) => {
    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title, // title: title
      completed: false
    })
      .then(response => this.setState({ todos: [...this.state.todos, response.data] }) );
    
  }
  
  // below <Todos todos={this.state.todos} /> is how we access our todos component
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos 
                  todo={this.state.todos} 
                  markComplete={this.markComplete} 
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

