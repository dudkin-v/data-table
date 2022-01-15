import { Form } from './components/Form';

import './App.styles.css';

const App = () => {
 
 const createPerson = (name, surname, email, phoneNumber) => {
    return ([{
         name,
         surname,
         email,
         phoneNumber,
         id: Date.now()
     }])
 }

  return (
    <div className='app'>
      <h1 className='app-heading'>Data table</h1>
      <Form addPerson={createPerson} />
    </div>
  );
}

export default App;
