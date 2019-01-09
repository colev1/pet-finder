import { connect } from "react-redux"
import React, { Component } from 'react'
import './PetDetails.scss'
import { fetchSelectedPet } from '../../thunks/fetchSelectedPet'
import { Loading } from '../../components/Loading/Loading'
import PropTypes from 'prop-types' 

class PetDetails extends Component {
   componentDidMount() {
     let petId;
    if(this.props.selectedPet === '' || typeof(this.props.selectedPet) === 'object') {
      petId = JSON.parse(localStorage.getItem('item'))
    } else {
      petId = this.props.selectedPet;
    }
    this.props.fetchSelectedPet(petId)
  }

  render() {
    if(this.props.isLoadingSelected || 
      typeof(this.props.selectedPet)==='string' ) {
      return (
        <Loading />
      )
    } else {
      const {name, id, age, size, breed, sex, contactInfo, photos, description} = this.props.selectedPet;
      return (
        <div className='pet-deets'>
          <div className='all-info'> 
            <h1> {name} </h1> 
            <p> {breed} </p>
            <p> {age} </p>
            <p> sex: {sex} </p>
            <p>  {size} </p>      
          </div>
          <div className='images-container'>
            <img src={photos[2]} 
            className='details-image' 
            />
            <img src={photos[7]} 
            className='details-image' 
            />
          </div>
            <p>  {description}
            </p> 
          <div> 
            <i className="fas fa-paw"></i>
            <br/>
            Adopt me!
          </div>
        </div>
      ) 
    }
  }
}

export const mapStateToProps = (state) => ({
  selectedPet: state.selectedPet,
  isLoadingSelected: state.isLoadingSelected
})

export const mapDispatchToProps = (dispatch) => ({
  fetchSelectedPet: (id) => dispatch(fetchSelectedPet(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PetDetails);

PetDetails.propTypes = {
  selectedPet: PropTypes.object.isRequired,
  isLoadingSelected: PropTypes.bool,
  fetchSelectedPet: PropTypes.func
}