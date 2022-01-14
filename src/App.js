import { Table } from './components/Table';
import { data } from './data';

import './App.styles.css';

const App = () => {
  return (
    <div className='app'>
      <h1 className='app-heading'>Data table</h1>
    <Table data={data}/>
    </div>
  );
}

export default App;
