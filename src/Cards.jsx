import React from 'react'
import './Cards.css'


const Cards = (props) => {
    console.log(props)
    return (
        <>
            <div className="row">
                <div className="cards--container">
                    <div className="cards-wrapper">
                        <img src={`./images/${props.img}`} className="card--image" />
                        <div className="cards-content">
                            <h1>{props.name}</h1>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Cards