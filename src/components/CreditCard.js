import React from 'react'

const CreditCard = props => {
    return (
        <div style={{border:"1px solid black", backgroundColor: `${props.bgColor}`, color: `${props.color}`}}>
            <h5>{props.type}</h5>
            <p>**** **** **** {props.number[12]}{props.number[13]}{props.number[14]}{props.number[15]}</p>
            <p>Expires: {props.expirationMonth}/{props.expirationYear}</p>
            <p>Bank: {props.bank}</p>
            <p>Owner: {props.owner}</p>
        </div>
    )
}

export default CreditCard
