import React, { Component } from 'react'
import { fetchSearchedPets } from '../../thunks/searchBySelection'
import { connect } from 'react-redux'
import './petDisplay.scss'
import { cleanSearchUrl } from '../../helpers/cleanSearchUrl'
import PropTypes from 'prop-types';
import { addSelectedPet } from '../../actions'
import { Loading } from '../../components/Loading/Loading'

export class PetDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animal: '',
      age: '',
      sex: '',
      location: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const searchUrl = cleanSearchUrl(this.state)
    this.props.fetchSearchedPets(searchUrl)
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  displayMore = (id) => {
    this.props.addSelectedPet(id)
    localStorage.setItem('item', JSON.stringify(id))
    this.props.history.push('/pet_details')
  }

  render() {
    let pets = this.props.searchedPets.map(pet => {
     const img = pet.photos[2];
     let img2;
     if (pet.photos[7]) {
       img2 = pet.photos[7];
     } else {
       img2=img
     }
      const newpet = 
      <div className='pet-card' key={pet.id} onClick={() => this.displayMore(pet.id)}> 
       <div> 
          <h1> {pet.name} </h1>
          <p className='animal-type'>  {pet.breed ? pet.breed: pet.animal} </p>
       </div>
       <img src={img} className='display-img image-1'/>
       <img src={img2} className='display-img image-2'/>
       <div className='pet-description'>
         age: {pet.age} <br/>
         size: {pet.size} <br/>
         sex: {pet.sex}
       </div>
      </div>
     return newpet
    })
    if (this.props.hasErrored) {
      pets = <div className="error">
      No pets match your search!
   </div>
    }  else if (this.props.isLoadingPets) {
      pets = <Loading />
    }

    return (
      <div> 
        <form className='selection-form' onSubmit={this.handleSubmit}> 
        <p className='grid-item'>animal</p>
        <p className='grid-item'>age </p>
        <p className='grid-item'>sex </p>
        <p className='grid-item'>location </p>
        <select name='animal' onChange={this.handleChange} className='grid-item' defaultValue='all'>
          <option disabled value='all'>all animals</option>
          <option value='dog'> dogs</option>
          <option value='cat'> cats</option>
          <option value='rabbit'> rabbits</option>
          <option value='smallfurry'> small furry animals</option>
          <option value='reptile'> reptiles  </option>
          <option value='barnyard'> barnyard animals</option>
          <option value='bird'> birds </option>
        </select>
        <select name='age' onChange={this.handleChange} className='grid-item'>
          <option disabled >choose an age..</option>
          <option value='Baby'>baby</option>
          <option value='Young'>young</option>
          <option value='Adult'>adult</option>
          <option value='Senior'>senior</option>
        </select>
        <select name='sex' onChange={this.handleChange} className='grid-item'>
          <option value='M'>male</option>
          <option value='F'>female</option>
        </select>
        <input type='text' name='location' placeholder='location' className='grid-item' onChange={this.handleChange}/>
        <button type='submit'> search! </button>
        </form>
        <article className='pet-display'> 
          {pets}
        </article>
      </div>
    )
  }

}

export const mapStateToProps = (state) => ({
  searchedPets: state.searchedPets,
  isLoadingPets: state.isLoadingPets,
  hasErrored: state.hasErrored
})

export const mapDispatchToProps = (dispatch) => ({
  fetchSearchedPets: (search) => dispatch(fetchSearchedPets(search)),
  addSelectedPet: (id) => dispatch(addSelectedPet(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PetDisplay);

PetDisplay.propTypes = {
  searchedPets: PropTypes.array.isRequired,
  isLoadingPets: PropTypes.bool,
  hasErrored: PropTypes.string,
  fetchSearchedPets: PropTypes.func,
  addSelectedPet: PropTypes.func
}