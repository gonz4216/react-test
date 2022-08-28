import React from 'react'
import './Cards.css'


const Cards = (props) => {
    // console.log(props)
    return (
        <>
            <div className="row">
                <div className="cards--container">
                    <div className="cards-wrapper">
                        <img src={props.img} className="card--image" />
                        <div className="cards-content">
                           <p>{props.rating}</p>
                           <p>{props.reviewCount} ~ {props.country}</p>
                           
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Cards