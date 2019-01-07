import { connect } from "react-redux";
import React, {Component} from 'react'
import './PetDetails.scss'
import {fetchSelectedPet} from '../../thunks/fetchSelectedPet'




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
    const {name, id, age, size, animal, breed, sex, shelterId, contactInfo, photos} = this.props.selectedPet
    // const img1 = photos[2]
    if(this.props.isLoadingSelected) {
      return (<div className='loading'>
        LOADING...
      </div>)
    } else {
      return (
        <div className='pet-details'>
          {/* <img src={img1} /> */}
          <h1> {name}</h1>
          <p> age: {age} </p>
          <p> size: {size}</p>
          <p> animal: {animal}</p>
          <p> breed: {breed}</p>
          <p> sex: {sex}</p>
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
