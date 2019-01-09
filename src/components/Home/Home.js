import React from 'react'
import './Home.css'
import dog from '../../assets/dog.gif'

export const Home = () => {
  return (
    <div className='home-container'>
      <h1> You're never too old for a new best friend! </h1>
      <p> Search by breed or shelter... </p>
      <img src={dog} alt='Dog gif' className='dog' />
    </div>
  )
}


