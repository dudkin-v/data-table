import { useState } from 'react';
import PropTypes from 'prop-types';

import './Form.styles.css';

    const Form = ( { data, setData, addPerson }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const resetFields = () => {
      setName('');
        setSurname('');
        setEmail('');
        setPhoneNumber('');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setData(data.concat(addPerson(name, surname, email, phoneNumber)));
        resetFields();
    }

    const handleNameChange = ({ target: {value} }) => {
        setName(value.trim());
    }
    const handleSurnameChange = ({ target: {value} }) => {
        setSurname(value.trim());
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
              
                <label htmlFor='surname'>Surname:</label>
                  <input 
                    type='text'
                    name='surname'
                    id='surname'
                    value={surname}
                    onChange={handleSurnameChange}
                  />

                <label htmlFor='phoneNumber'>Tel:</label>
                  <input 
                    type='text'
                    name='phoneNumber'
                    id='phoneNumber'
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />
              
                <label htmlFor='email'>Email:</label>
                  <input 
                    type='text'
                    name='email'
                    id='email'
                    value={email}
                    onChange={handleEmailChange}
                  />

                <div>
                  <button type='submit'>Add</button>
                </div>

            </form>
          </div>
    )
}

Form.propTypes = {
    data: PropTypes.array.isRequired,
    addPerson: PropTypes.func.isRequired,
}

export default Form;