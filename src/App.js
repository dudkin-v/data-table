import { useState } from 'react';

import { Table } from './components/Table';
import { Form } from './components/Form';
import { data } from './data';

import './App.styles.css';

const initialPerson = {};

const App = () => {
  const [person, SetPerson] = useState(initialPerson);

  const createPerson = (name, surename, email, phoneNumber) => {
    return SetPerson({
         name,
         surename,
         email,
         phoneNumber,
         id: Date.now()
     })
 }

  return (
    <div className='app'>
      <h1 className='app-heading'>Data table</h1>
      <Form
      addPerson={createPerson}
      person={person}
      data={data}
      />
    <Table data={data}/>
    </div>
  );
}

export default App;
