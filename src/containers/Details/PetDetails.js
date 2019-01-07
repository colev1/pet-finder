import { connect } from "react-redux";
import React, {Component} from 'react'
import './PetDetails.scss'
import {fetchSelectedPet} from '../../thunks/fetchSelectedPet'
import {Loading} from '../../components/Loading/Loading'




class PetDetails extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   pet: {}
    // }
  }

   componentDidMount() {
     this.props.fetchSelectedPet(this.props.selectedPet)
    //  this.setState({
    //    pet
    //  })
  }

  render() {
    if(this.props.isLoadingSelected || typeof(this.props.selectedPet)==='string' ) {
      return (<div className='loading'>
        LOADING...
      </div>)
    } else {
    const {name, id, age, size, animal, breed, sex, shelterId, contactInfo, photos} = this.props.selectedPet
      // const img1 = photos[2]
      return (
        <div className='pet-deets'>
          <div className='images-container'>
            <img src={photos[2]} 
          className='details-image' />
            <img src={photos[7]} 
            className='details-image' />
          </div>
          <div className='all-info'> 
            <h1> {name}</h1>
            <p> age: {age} </p>
            <p> size: {size}</p>
            <p> animal: {animal}</p>
            <p> breed: {breed}</p>
            <p> sex: {sex}</p>
          </div>
          {/* <p> shelterId: {shelter}</p> */}
          {/* <p> contactInfo: {contactInfo}</p> */}
        </div>
        ) 
    }
  }
  
}

const mapStateToProps = (state) => ({
  selectedPet: state.selectedPet,
  isLoadingSelected: state.isLoadingSelected
})
const mapDispatchToProps = (dispatch) => ({
  fetchSelectedPet: (id) => dispatch(fetchSelectedPet(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(PetDetails);
