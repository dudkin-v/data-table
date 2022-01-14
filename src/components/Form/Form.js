import { useState } from 'react';

import PropTypes from 'prop-types';

import './Form.styles.css';

const Form = ( { addPerson, person, data }) => {
    const [name, setName] = useState('');
    const [surename, setSurename] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addPerson(name, surename, email, phoneNumber);
        data.push(person);//error!!!
    }

    const handleNameChange = ({ target: {value} }) => {
        setName(value.trim());
    }
    const handleSurenameChange = ({ target: {value} }) => {
        setSurename(value.trim());
    }
    const handleEmailChange = ({ target: {value} }) => {
        setEmail(value.trim());
    }
    const handlePhoneNumberChange = ({ target: {value} }) => {
        setPhoneNumber(value.trim());
    }

    return (
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
             <label htmlFor='name'>Name:</label>
                <input 
                  type='text'
                  name='name'
                  id='name'
                  value={name}
                  onChange={handleNameChange}
                />
              
              <label htmlFor='surename'>Surename:</label>
                <input 
                  type='text'
                  name='surename'
                  id='surename'
                  value={surename}
                  onChange={handleSurenameChange}
                />
              
              <label htmlFor='email'>Email:</label>
                <input 
                  type='text'
                  name='email'
                  id='email'
                  value={email}
                  onChange={handleEmailChange}
                />

                <label htmlFor='phoneNumber'>Tel:</label>
                <input 
                  type='text'
                  name='phoneNumber'
                  id='phoneNumber'
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
    
              <div>
                <button type='submit'>Add</button>
              </div>

          </form>
        </div>
        
    )
}

Form.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    person: PropTypes.object.isRequired,
    addPerson: PropTypes.func.isRequired
}

export default Form;