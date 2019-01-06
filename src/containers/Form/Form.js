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
      <form className='profile-form'>
        <h1> answer some questions & find your new best friend! </h1>
        <article className='form-body'> 
          <div className='question'> 
            what is your preferred animal type?
            <input type="checkbox" name="dog" value="Dog" />  Dog 
            <input type="checkbox" name="cat" value="cat" />  Cat 
            <input type="checkbox" name="rabbit" value="rabbit" />  Rabbit
            <input type="checkbox" name="Hamster" value="Hamster" />  Hamster
            <input type="checkbox" name="Reptile" value="Reptile" />  Reptile 
          </div>
          <div className='question'> 
            what is your activity level?
            <input type="checkbox" name="Low" value="Low" />  Low 
            <input type="checkbox" name="Moderate" value="Moderate" />  Moderate 
            <input type="checkbox" name="High" value="High" />  High 
          </div>
        <div className='question-one'> 
            what is your preferred animal type?
            <input type="checkbox" name="dog" value="Dog" />  Dog 
            <input type="checkbox" name="dog" value="Dog" />  Cat 
            <input type="checkbox" name="dog" value="Dog" />  Farm Animal 
            <input type="checkbox" name="dog" value="Dog" />  Reptile 
          </div>
          <div className='question-one'> 
            what is your preferred animal type?
            <input type="checkbox" name="dog" value="Dog" />  Dog 
            <input type="checkbox" name="dog" value="Dog" />  Cat 
            <input type="checkbox" name="dog" value="Dog" />  Farm Animal 
            <input type="checkbox" name="dog" value="Dog" />  Reptile 
          </div>
          </article>
        <button className = 'submit-form-btn'>  find a companion! </button>
      </form>
    )
  }
}

export default Form;