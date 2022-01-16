import { useState } from 'react';

import { Form } from './components/Form';
import { Table } from './components/Table';

import './App.styles.css';

const App = () => {
  const [data, setData] = useState([]);
 
 const createPerson = (name, surname, email, phoneNumber) => {
    return ([{
         name,
         surname,
         email,
         phoneNumber,
         id: Date.now()
     }])
 }

 const handleDelete = (id) => () => setData(data.filter(person => person.id !== id));

  return (
    <div className='app'>
      <h1 className='app-heading'>Data table</h1>
      <Form 
      data={data} 
      setData={setData}
      addPerson={createPerson} />
      <Table
      data={data}
      onDelete={handleDelete} />
    </div>
  );
}

export default App;
