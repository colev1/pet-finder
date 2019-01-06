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
     const img = pet.photos[2];
     const img2 = pet.photos[7];
      const newpet = 
      <div className='pet-card' key={pet.id}> 
       <div> 
          <h1> {pet.name} </h1>
          <p className='animal-type'> {pet.animal} . {pet.breed} </p>
       </div>
       <img src={img}/>
       {/* <img src={img2}/> */}
       <div className='pet-description'>
         age: {pet.age} <br/>
         size: {pet.size} <br/>
         sex: {pet.sex}
       </div>
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