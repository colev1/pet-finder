import React, { Component } from 'react';
import './App.scss';
import { Route, NavLink, withRouter, Switch } from 'react-router-dom'
import {Home} from '../../components/Home/Home.js'
import { connect } from 'react-redux' 
import PetDisplay from '../petDisplay/petDisplay.js'
import Shelters from '../Shelters/Shelters'
import PropTypes from 'prop-types';
import PetDetails from '../Details/PetDetails'
import ErrorPage from '../../components/ErrorPage/ErrorPage'



class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <header>
        </header>
        <nav className="nav-bar">
          <NavLink to='/' className ='nav header'> <i className="fas fa-paw"></i> Pups4Pops </NavLink>
          <NavLink to='/breeds' className ='nav'> search by breed </NavLink>
          <NavLink to='/shelters' className ='nav'> search by shelter </NavLink>
        </nav>
        <main className='main-container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/breeds' component={PetDisplay} />
          <Route path='/shelters' component={Shelters} />
          <Route path='/pet_details' component={PetDetails} />
          <Route component={ErrorPage} />
        </Switch>
        </main>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  pets: state.pets,
  isLoading: state.isLoading,
  error: state.error
})

App.propTypes = {
  pets: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string
}

export default withRouter(connect(mapStateToProps)(App))