import './PetDetails.scss';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchSelectedPet } from '../../thunks/fetchSelectedPet';
import { Loading } from '../../components/Loading/Loading';

class PetDetails extends Component {
  componentDidMount() {
    let petId;
    if (this.props.selectedPet === '' || typeof (this.props.selectedPet) === 'object') {
      petId = JSON.parse(localStorage.getItem('item'));
    } else {
      petId = this.props.selectedPet;
    }
    this.props.fetchSelectedPet(petId);
  }

  render() {
    if (this.props.isLoadingSelected || 
      typeof(this.props.selectedPet)==='string' ) {
      return (
        <Loading />
      )
    } 
      let {name, age, breed, sex, photos, description} = this.props.selectedPet;
      if (sex === 'F') {
        sex = 'female'
      } else if (sex === 'M') {
        sex = 'male'
      }
      return (
        <div className='pet-deets'>
          <div className='all-info'> 
            <h1> {name} </h1> 
            <p> {breed} </p>
            <p> {age.toLowerCase()} </p>
            <p> {sex} </p>   
          </div>
          <div className='images-container'>
            <img src={photos[2]} alt='Pet' 
            className='details-image' 
            />
            <img src={photos[7]} 
            alt='Pet'
            className='details-image' 
            />
          </div>
            <p className='description'>  {description}
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

export const mapStateToProps = state => ({
  selectedPet: state.selectedPet,
  isLoadingSelected: state.isLoadingSelected,
});

export const mapDispatchToProps = dispatch => ({
  fetchSelectedPet: id => dispatch(fetchSelectedPet(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PetDetails);

PetDetails.propTypes = {
  selectedPet: PropTypes.object.isRequired,
  isLoadingSelected: PropTypes.bool,
  fetchSelectedPet: PropTypes.func,
};
