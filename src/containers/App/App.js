import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom'
import Home from '../Home/Home.js'
import { fetchRandomPets } from '../../actions/fetchRandomPets'


class App extends Component {
  constructor() {
    super()
  }

  componentDidMount () {

  }

  render() {
    return (
      <div className="App">
        <header>
        </header>
        <nav className="nav">
          <NavLink to='/profile' className ='nav'> custom profile </NavLink>
          <NavLink to='/breeds' className ='nav'> breeds </NavLink>
          <NavLink to='/shelters' className ='nav'> shelters </NavLink>
        </nav>
          <Route exact path='/' component={Home} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  
}



export default App;
