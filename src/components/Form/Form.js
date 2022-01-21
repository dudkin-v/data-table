import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import './Form.styles.css';

    const Form = ( { onSubmit }) => {
    const {
      register,
      formState: { errors },
      handleSubmit,
      reset
    } = useForm();

    const toSubmit = (data) => {

         onSubmit({
          name: data.name,
          surname: data.surname,
          email: data.email,
          phoneNumber: data.phoneNumber,
          id: Date.now()
        });

        reset();
    }

    return (
          <div className='form-container'>
            <form onSubmit={handleSubmit(toSubmit)}>
               <label htmlFor='name' className={errors.name ? 'error' : ''}>
                 {errors.name ? errors.name.message : 'Name:'}
               </label>
                  <input type='text'id='name'
                  {...register('name', {
                    required: 'The field is required:',
                    minLength: {
                      value: 2,
                      message: 'Please tipe at least 2 symbols:'
                    }
                  })}
                  />
              
               <label htmlFor='surname' className={errors.surname ? 'error' : ''}>
                 {errors.surname ? errors.surname.message : 'Surname:'}</label>
                  <input type='text'id='surname'
                  {...register('surname', {
                    required: 'The field is required:',
                    minLength: {
                      value: 2,
                      message: 'Please tipe at least 2 symbols:'
                    }
                  })}
                  />

                <label htmlFor='phoneNumber' className={errors.phoneNumber ? 'error' : ''}>
                 {errors.phoneNumber ? errors.phoneNumber.message : 'Tel:'}</label>
                  <input type='number'id='phoneNumber'
                  {...register('phoneNumber', {
                    pattern: {
                      value: /^((\+?3)?8)?0\d{9}$/,
                      message: 'Enter valid phone number:'
                    }
                  })}
                  />
              
                <label htmlFor='email' className={errors.email ? 'error' : ''}>
                 {errors.email ? errors.email.message : 'Email:'}</label>
                  <input type='email'id='email'
                  {...register('email', {
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Enter valid email:' 
                  }
                  })}
                  />

                <div>
                  <button className='add-btn' type='submit'>Add</button>
                </div>

            </form>
          </div>
    )
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Form;