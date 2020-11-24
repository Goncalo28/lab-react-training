import React from 'react'

const BoxColor = props => {
    return (
        <div>
            <div style={{border:"2px solid black", backgroundColor: `rgb(${props.r},${props.g} ,${props.b})`}}>
                <p>rgb({props.r},{props.g},{props.b})</p>
            </div>
        </div>
    )
}

export default BoxColor
