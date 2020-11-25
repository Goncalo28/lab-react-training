import React from 'react'
import Rating from './Rating'

const DriverCard = props => {
    return (
        <div style={{border:"1px solid black", backgroundColor: `blue`, color: 'white'}}>
            <div>
                <img src={props.img} alt='something' style={{width: '20%'}}/>
            </div>
            <div>
                <h4>{props.name}</h4>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard
