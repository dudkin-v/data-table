import { useState } from 'react';

import { Form } from './components/Form';
import { Table } from './components/Table';

import './App.styles.css';

const App = () => {
 const [data, setData] = useState([]);
 
 const createPerson = (newPerson) => setData([...data, newPerson]);
   
 const removePerson = (id) => () => setData(data.filter(person => person.id !== id));

  return (
    <div className='app'>
      <h1 className='app-heading'>Data table</h1>
      <Form 
      data={data} 
      setData={setData}
      onSubmit={createPerson} />
      <Table
      data={data}
      onDelete={removePerson} />
    </div>
  );
}

export default App;
