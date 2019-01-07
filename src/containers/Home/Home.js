import React from 'react'
import './Home.css'
import randomPet from '../../reducers/randomPetsReducer';
import { connect } from 'react-redux'
import dog from '../../assets/dog.gif'

const Home = (props) => {
  const { name, photos, sex, animal, breed, age } = props.randomPet;
  return (
    <div className='home-container'>
      <h1> find your companion! </h1>
      <img src={dog} />
      {/* <h2> {name} </h2>
      <p>sex: {sex} </p>
      <p>animal: {animal} </p>
      <p>breed: {breed} </p>
      <p>age: {age} </p> */}
      <p> You're never too old to make a new best friend!!!! </p>
      <h3>  </h3>
    </div>
  )
}

const mapStateToProps = (state) => ({
  randomPet: state.randomPet
})

export default connect(mapStateToProps)(Home)