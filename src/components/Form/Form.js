import { useState } from 'react';

import PropTypes from 'prop-types';

import './Form.styles.css';

const Form = () => {
    const [name, setName] = useState('');
    const [surename, setSurename] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [id, setId] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit', name, surename, email, phoneNumber);
    }

    const handleNameChange = ({ target: {value} }) => {
        console.log('change');
        setName(value);
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
                  onChange={handleNameChange}
                />
              
              <label htmlFor='email'>Email:</label>
                <input 
                  type='text'
                  name='email'
                  id='email'
                  value={email}
                  onChange={handleNameChange}
                />

                <label htmlFor='phoneNumber'>Tel:</label>
                <input 
                  type='text'
                  name='phoneNumber'
                  id='phoneNumber'
                  value={phoneNumber}
                  onChange={handleNameChange}
                />
    
              <div>
                <button type='submit'>Add</button>
              </div>

              <div>
                {name}
                </div>
          </form>
        </div>
        
    )
}

export default Form;