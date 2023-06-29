import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Weather from './Components/Weather';

function App() {


  // To get the data from child (Navbar) component
  const [search, setSearch] = useState('')
  const getData = (data) => {
      setSearch(data);
  }

  return (
    <div >
      <Navbar onSubmit={getData} />
      <Weather search={search}/>
    </div>
  );
}

export default App;
