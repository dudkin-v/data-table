import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import isEmail from 'validator/es/lib/isEmail';
import isMobilePhone from 'validator/es/lib/isMobilePhone';

import './Form.styles.css';

    const Form = ( { onSubmit }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [nameDirty, setNameDirty] = useState(false);
    const [surnameDirty, setSurnameDirty] = useState(false);
    const [nameError, setNameError] = useState('Field cannot be empty');
    const [surnameError, setSurnameError] = useState('Field cannot be empty');
    const [emailError, setEmailError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        nameError || surnameError || emailError || phoneNumberError ?
            setFormIsValid(false)
            : setFormIsValid(true);
    }, [nameError, surnameError, emailError, phoneNumberError])

    const resetFields = () => {
        setName('');
        setSurname('');
        setEmail('');
        setPhoneNumber('');
        setNameError('Field cannot be empty');
        setSurnameError('Field cannot be empty');
        setNameDirty(false);
        setSurnameDirty(false);
        setEmailError(false);
        setPhoneNumberError(false);
    }

    const onBlur = ({ target: {name} }) => {
        switch (name) {
            case 'name':
                setNameDirty(true);
                break
            case 'surname':
                setSurnameDirty(true);
                break
        }
    }

        const handleSubmit = (event) => {
        event.preventDefault();

            onSubmit({
                name: name,
                surname: surname,
                email: email,
                phoneNumber: phoneNumber,
                id: Date.now()
            });

            resetFields();

    }

    const handleNameChange = ({ target: {value} }) => {
        setName(value.trim());
        if(value.length < 2) {
            setNameError('Enter 2 or more characters');
            if(!value.length){
                setNameError('Field cannot be empty');
            }
        } else {
            setNameError('');
        }
    }
    const handleSurnameChange = ({ target: {value} }) => {
        setSurname(value.trim());
        if(value.length < 2) {
            setSurnameError('Enter 2 or more characters');
            if(!value.length){
                setSurnameError('Field cannot be empty');
            }
        } else {
            setSurnameError('');
        }
    }
    const handleEmailChange = ({ target: {value} }) => {
        setEmail(value.trim());
        if(!isEmail(value)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    }
    const handlePhoneNumberChange = ({ target: {value} }) => {
        setPhoneNumber(value.trim());
        if(!isMobilePhone(value, 'uk-UA')) {
            setPhoneNumberError(true);
        } else {
            setPhoneNumberError(false);
        }
    }

    return (
          <div className='form-container'>
            <form onSubmit={handleSubmit}>
                {(nameDirty && nameError) && <p className='error'>{nameError}</p>}
               <label htmlFor='name'>Name:</label>
                  <input 
                    type='text'
                    name='name'
                    id='name'
                    value={name}
                    onChange={handleNameChange}
                    onBlur={onBlur}
                  />

                {(surnameDirty && surnameError) && <p className='error'>{surnameError}</p>}
               <label htmlFor='surname'>Surname:</label>
                  <input 
                    type='text'
                    name='surname'
                    id='surname'
                    value={surname}
                    onChange={handleSurnameChange}
                    onBlur={onBlur}
                  />

                {phoneNumberError ? <p className='error'>Enter valid phone number</p> : ''}
                <label htmlFor='phoneNumber'>Tel:</label>
                  <input 
                    type='text'
                    name='phoneNumber'
                    id='phoneNumber'
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                  />

                {emailError ? <p className='error'>Enter valid email</p> : ''}
                <label htmlFor='email'>Email:</label>
                  <input 
                    type='text'
                    name='email'
                    id='email'
                    value={email}
                    onChange={handleEmailChange}
                  />

                <div>
                  <button className='add-btn' type='submit' disabled={!formIsValid}>Add</button>
                </div>

            </form>
          </div>
    )
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Form;