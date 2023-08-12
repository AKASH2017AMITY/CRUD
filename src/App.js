import './App.css';
import Listing from './Components/Listing/Listing';
import { useState } from 'react';
import Add from './Components/Add/Add';

function App() {
  const [click,setClick]= useState(false);
  return (
    <div className="App">
      <h1>Crud operation in React JS</h1>
      {click ? <Add click={click} setClick={setClick}/>:<Listing  click={click} setClick={setClick}/>}
    </div>
  );
}

export default App;
