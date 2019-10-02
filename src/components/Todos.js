import React, { Component } from 'react'; // we can remove , { Component } and instead of doing extends Component we do extends React.Componenet
import { toUnicode } from 'punycode';



class Todos extends Component {

  render() {
    console.log(this.props.todos);
    return (
      <div>
        <h1>Clean yyyy</h1>
      </div>
    );
  }
}

export default Todos;

