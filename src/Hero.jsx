import React from 'react'
import { useState } from 'react'
import './Hero.css'
const Hero = () => {
const [title, setTitle] = useState('')
const [date, setDate] = useState('')
const resetForm = () => {
  setTitle('')
  setDate('')
}

const handleSubmit = (e) => {
e.prevent.default()

const event = {
  title: title,
  date: date,
  id: Math.floor(Math.random() * 10000)
}
}
  return (
    <>
      <form className='new-event-form' onSubmit={handleSubmit}>
        <label>
          <span>Event Title:</span>
          <input type="text" 
          onChange={(e) => setTitle(e.target.value)} 
          value={title} />
        </label>
        <label>
          <span>Event Date</span>
          <input type="date" onChange={(e) => setDate(e.target.value)}/>
        </label>
        <button>Submit</button>
        
      </form>
    </>
  )
}

export default Hero