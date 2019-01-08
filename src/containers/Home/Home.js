import React from 'react'
import './Home.css'
import randomPet from '../../reducers/randomPetsReducer';
import { connect } from 'react-redux'
import dog from '../../assets/dog.gif'

const Home = (props) => {
  const { name, photos, sex, animal, breed, age } = props.randomPet;
  return (
    <div className='home-container'>
      <h1> Feeling lonely? find a new best friend! </h1>
      <img src={dog} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  randomPet: state.randomPet
})

export default connect(mapStateToProps)(Home)