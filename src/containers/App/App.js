import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, withRouter, Switch } from 'react-router-dom'
import Home from '../Home/Home.js'
// import { fetchRandomPets } from '../../actions/addRandomPet'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'  
import {fetchRandomPet} from '../../thunks/fetchRandomPet'
import Form from '../Form/Form.js'


class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    const url = 'https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.getRandom?key=971b0fa2a8b9c9da1bb222d181ecfd6c&format=json&output=basic';
    // const url = 'https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.get?key=971b0fa2a8b9c9da1bb222d181ecfd6c&id=36705491&format=json';
    this.props.fetchRandomPet(url)
    console.log(url)
  }

  render() {
    return (
      <div className="App">
        <header>
        </header>
        <nav className="nav-bar">
        
          <NavLink to='/profile' className ='nav'> <i class="fas fa-paw"></i> </NavLink>
        
          <NavLink to='/breeds' className ='nav'> breeds </NavLink>
          <NavLink to='/shelters' className ='nav'> shelters </NavLink>
        </nav>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Form} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pets: state.pets
})

const mapDispatchToProps = (dispatch) => ({
  fetchRandomPet: (url) => dispatch(fetchRandomPet(url))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))