import React from 'react'
import './Home.css'
import dog from '../../assets/dog.gif'

export const Home = () => {
  return (
    <div className='home-container'>
      <h1> Feeling lonely? find a new best friend! </h1>
      <img src={dog} alt='Dog gif' />
    </div>
  )
}


