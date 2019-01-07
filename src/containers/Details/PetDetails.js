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
      return (
        <Loading />
      )
    } else {
    const {name, id, age, size, animal, breed, sex, shelterId, contactInfo, photos, description} = this.props.selectedPet
      // const img1 = photos[2]
      return (
        <div className='pet-deets'>
        <div className='all-info'> 
          <h1> {name}</h1> 
          <p> {breed}</p>
          <p> {age} </p>
          <p> sex: {sex}</p>
          <p>  {size}</p>      
        </div>
          <div className='images-container'>
            <img src={photos[2]} 
          className='details-image' />
            <img src={photos[7]} 
            className='details-image' />
          </div>
          <p>  {description}</p> 
          <div> 
            <i className="fas fa-paw"></i>
            <br/>
            Adopt me!
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
