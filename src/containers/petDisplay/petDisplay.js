import React, {Component } from 'react'
// import './Home.css'
// import randomPet from '../../reducers/randomPetsReducer';
import { connect } from 'react-redux'


class PetDisplay extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('yo')
    const url = 'http://api.petfinder.com/pet.find?key=971b0fa2a8b9c9da1bb222d181ecfd6c&format=json&location=80202'
    // this.props.fetchAllPets(url)
  }
  render() {
    return (
      <div> </div>
    )
  }

}

const mapStateToProps = (state) => ({
  pets: state.pets
})

// const mapDispatchToProps = (dispatch) => ({
//   fetchAllPets: (url) => dispatch(fetchRandomPet(url))
// })
export default connect(mapStateToProps)(PetDisplay);