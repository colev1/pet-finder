import React, { Component } from 'react';
import './App.scss';
import { Route, NavLink, withRouter, Switch } from 'react-router-dom'
import Home from '../Home/Home.js'
// import { fetchRandomPets } from '../../actions/addRandomPet'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'  
import {fetchRandomPet} from '../../thunks/fetchRandomPet'
import Form from '../Form/Form.js'
import PetDisplay from '../petDisplay/petDisplay.js'
import Shelters from '../Shelters/Shelters'
import PropTypes from 'prop-types';
import PetDetails from '../Details/PetDetails'



class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    const url = 'https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.getRandom?key=971b0fa2a8b9c9da1bb222d181ecfd6c&format=json&output=basic';
    this.props.fetchRandomPet(url)
  }

  render() {
    return (
      <div className="App">
        <header>
        </header>
        <nav className="nav-bar">
        
          {/* <NavLink to='/profile' className ='nav profile'> Create a Custom Profile </NavLink> */}
          <NavLink to='/' className ='nav header'> <i className="fas fa-paw"></i> Pups4Pops </NavLink>
          <NavLink to='/breeds' className ='nav'> search by breed </NavLink>
          <NavLink to='/shelters' className ='nav'> search by shelter </NavLink>
        </nav>
        <main className='main-container'>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Form} />
          <Route path='/breeds' component={PetDisplay} />
          <Route path='/shelters' component={Shelters} />
          <Route path='/pet_details' component={PetDetails} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pets: state.pets,
  isLoading: state.isLoading,
  error: state.error
})

const mapDispatchToProps = (dispatch) => ({
  fetchRandomPet: (url) => dispatch(fetchRandomPet(url))
})

App.propTypes = {
  pets: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  fetchRandomPet: PropTypes.func.isRequired
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))