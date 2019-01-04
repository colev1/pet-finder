import React from 'react'
import './Home.css'
import randomPet from '../../reducers/randomPetsReducer';
import { connect } from 'react-redux'

const Home = (props) => {
  const { name, photos, sex, animal, breed, age } = props.randomPet;
  return (
    <div>
      <h2> {name} </h2>
      {/* <img src={photos[0]} /> */}
      <p>sex: {sex} </p>
      <p>animal: {animal} </p>
      <p>breed: {breed} </p>
      <p>age: {age} </p>

    </div>
  )
}

const mapStateToProps = (state) => ({
  randomPet: state.randomPet
})

export default connect(mapStateToProps)(Home)