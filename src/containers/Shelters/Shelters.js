import React, {Component } from 'react'
import { connect } from 'react-redux'
import {fetchSearchedShelters} from '../../thunks/searchByShelter'
import '../petDisplay/petDisplay.scss'
import './Shelters.scss'
import { Loading } from '../../components/Loading/Loading'

class Shelters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetchSearchedShelters(this.state)
    // console.log(lol)
  }

  render() {
    let shelters = this.props.searchedShelters.map(shelter => {
       const newShelter = 
       <div className='pet-card shelter' key={shelter.id}> 
        <div> 
           <h1> {shelter.name} </h1>
           <p className='animal-type'> {shelter.city} . {shelter.state} </p>
        </div>
        <div className='pet-description'>
          phone: {shelter.phone} <br/>
          email: {shelter.email} 
        </div>
       </div>
      return newShelter
     })
     if (this.props.isLoadingShelters) {
      shelters = <Loading />
       }
      if (this.props.hasErrored) {
        shelters = <div className="error">
           No shelters match your search!
        </div>
      }
        return(
      <div> 
        <form onSubmit={this.handleSubmit} className="search-form"> 
        Enter your zip code to view shelters near you... <br/>
        <input value={this.state.search} onChange={this.handleChange} placeholder='zip code'/>
        <button type="submit"> search! </button>
      </form>
      <div className='pet-display'>
        {shelters}
      </div>
      </div>
    )
      }
}

export const mapStateToProps = (state) => ({
  searchedShelters: state.searchedShelters,
  isLoadingShelters: state.isLoadingShelters,
  hasErrored: state.hasErrored
})


export const mapDispatchToProps = (dispatch) => ({
  fetchSearchedShelters: (search) => dispatch(fetchSearchedShelters(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(Shelters)