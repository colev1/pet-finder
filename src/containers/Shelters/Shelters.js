import React, {Component } from 'react'
import { connect } from 'react-redux'
import {fetchSearchedShelters} from '../../thunks/searchByShelter'


class Shelters extends Component {
  constructor() {
    super()
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
    
  }

  render() {
    return(
      <form> 
        <input value={this.state.search} onChange={this.handleChange} />
        <button onSubmit={this.handleSubmit}> search! </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  searchedShelters: state.searchedShelters
})


const mapDispatchToProps = (dispatch) => ({
  fetchSearchedShelters: (search) => dispatch(fetchSearchedShelters(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(Shelters)