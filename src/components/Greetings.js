import React from 'react'

const Greetings = props => {
    return (
        <div>
            <h3 lang={props.lang}>{props.children}</h3>
        </div>
    )
}

export default Greetings
