import React, {Component } from 'react'
// import './Home.css'
// import randomPet from '../../reducers/randomPetsReducer';
import {fetchSearchedPets} from '../../thunks/searchBySelection'
import { connect } from 'react-redux'
import './petDisplay.scss'
import {cleanSearchUrl} from '../../helpers/cleanSearchUrl'


class PetDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animal: '',
      size: '',
      age: '',
      sex: ''
    }
  }

  // componentDidMount() {
  //   console.log('yo')
  //   const url = 'http://api.petfinder.com/pet.find?key=971b0fa2a8b9c9da1bb222d181ecfd6c&format=json&location=80202'
  //   // this.props.fetchSearchedPets(url)
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    const searchUrl = cleanSearchUrl(this.state)
    this.props.fetchSearchedPets(searchUrl)
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    console.log(name, value)
    this.setState({
      [name]: value
    })
  }

  render() {
    const pets = this.props.searchedPets.map(pet => {
     const newpet = 
      <div className='pet-card'> 
       <h1> {pet.name} </h1>
       <p> {pet.animal} </p>
      </div>
     return newpet
    })
    return (
      <div> 
        <form className='selection-form' onSubmit={this.handleSubmit}> 
        <select name='animal' onChange={this.handleChange}>
          <option value='dog' >Dog</option>
          <option value='cat'>Cat</option>
          <option value='rabbit'>Rabbit</option>
          <option value='furry'>Small & Furry</option>
          <option value='other'>other</option>
        </select>
        <select name='size' onChange={this.handleChange}>
          <option value='S'>small</option>
          <option value='M'>medium</option>
          <option value='L'>large</option>
          <option value='XL'>extra-large</option>
        </select>
        <select name='age' onChange={this.handleChange}>
          <option value='Baby'>baby</option>
          <option value='Young'>young</option>
          <option value='Adult'>adult</option>
          <option value='Senior'>senior</option>
        </select>
        <select name='sex' onChange={this.handleChange}>
          <option value='M'>male</option>
          <option value='F'>female</option>
        </select>
        <button type='submit'> search for a companion! </button>
        </form>
        <article className='pet-display'> 
          {pets}
          </article>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  searchedPets: state.searchedPets
})

const mapDispatchToProps = (dispatch) => ({
  fetchSearchedPets: (search) => dispatch(fetchSearchedPets(search))
})
export default connect(mapStateToProps, mapDispatchToProps)(PetDisplay);