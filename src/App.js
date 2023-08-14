import './App.css';
import Listing from './Components/Listing/Listing';
import { useState } from 'react';
import Add from './Components/Add/Add';
import EditPage from './Components/EditPage/EditPage';

function App() {
  const [click, setClick] = useState(false);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  return (
    <div className="App">
      <h1>Crud operation in React JS</h1>
      {click ? <Add id={id} name={name} email={email} phone={phone} setClick={setClick} setId={setId} setName={setName}
                            setEmail={setEmail} setPhone={setPhone}/>
        : (edit ? <EditPage  name={name} email={email} phone={phone} setEdit={setEdit} setId={setId} setName={setName}
                            setEmail={setEmail} setPhone={setPhone} />
        : <Listing click={click} setClick={setClick} edit={edit} setEdit={setEdit} />)}
    </div>
  );
}

export default App;
