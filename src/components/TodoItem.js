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
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


// You can also put this style in a function, for i.e. a list item is is completed
const itemStyle = {
    backgroundColor: "#f4f4f4"
}

export default TodoItem
