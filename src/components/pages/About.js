import React from 'react'

export default function about() {
    return ( // if you don't want a div, you can use React.Fragment, which doesn't show in the DOM, but's needed for JSX when returning something
        <React.Fragment>
            <h1>About</h1>
            <p>This is the TodoList app v1.0</p>
        </React.Fragment>
    )
}
