import React, {Component} from 'react'
import './Form.scss'
// import randomPet from '../../reducers/randomPetsReducer';
import { connect } from 'react-redux'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      answer1: ''
    }
  }
  render() {
    return (
      <form>
        <input type="checkbox" name="dog" value="Dog" /> 
      </form>
    )
  }
}

export default Form;