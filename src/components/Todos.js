import React, { Component } from 'react'; // we can remove , { Component } and instead of doing extends Component we do extends React.Componenet
import TodoItem from "./TodoItem.js";
import PropTypes from "prop-types";
class Todos extends Component {

  render() {
    return this.props.info.map((todo) => ( // When we map through something, we're creating a list, they need keys/indices
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}/>
    )); // Returns and array from an array
  }
}

// PropTypes
Todos.propTypes = {
  info: PropTypes.array.isRequired
}
export default Todos;

