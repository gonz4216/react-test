import React from 'react'
import './Hero.css'
import heroImg from './assets/Group 77.png'
const Hero = () => {
  return (
    <>
    <div className="row">
        <div className="hero--container">
            <img src={heroImg}  alt="" className='heroimg' />
        </div>
        <div className="hero-content">
                <h1 className='header-hero'>Online Experiances</h1>
                <p className='para-hero'>olestias a quidem reiciendis libero excepturi voluptate eius? Ea nostrum eligendi quos sit tempora.</p>
            </div>
    </div>
    </>
  )
}

export default Hero