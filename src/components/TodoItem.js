import React, { Component } from 'react'
import PropTypes from "prop-types";
export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        }
    }

    render() {
        const { id, title } = this.props.todo; // this is called destructuring, we're pulling variables from the global state
        return (
            // instead of hyphens - like in CSS, properties are camelCase
            //<div style={{ backgroundColor: "#f4f4f4"}}> 
            //<div style={itemStyle}>
            <div style={this.getStyle()}>
                <p> 
                    <input type="checkbox" onChange={this.props.markComplete.bind
                    //(this, this.props.todo.id)} /> { " " }
                    //{this.props.todo.title} 
                    (this, id)} /> { " " }
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button> 
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
}


// You can also put this style in a function, for i.e. a list item is is completed
const itemStyle = {
    backgroundColor: "#f4f4f4"
}

export default TodoItem
