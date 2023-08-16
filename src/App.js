import './App.css';
// import { useState } from 'react';
import Listing from './Components/Listing/Listing';
import Add from './Components/Add/Add';
import EditPage from './Components/EditPage/EditPage';
import { Routes,Route,BrowserRouter } from 'react-router-dom';


function App() {  

  return (
    <div className="App">
      <h1>Crud operation in React JS</h1>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Listing />}></Route>
          <Route  path="/employee/create" element={<Add />}></Route>
          <Route  path="/employee/edit/:empId" element={<EditPage />}></Route>
        </Routes>
      </BrowserRouter>
      {/* {click ? <Add id={id} name={name} email={email} phone={phone} setClick={setClick} setId={setId} setName={setName}
                            setEmail={setEmail} setPhone={setPhone}/>
        : (edit ? <EditPage  name={name} email={email} phone={phone} setEdit={setEdit} setId={setId} setName={setName}
                            setEmail={setEmail} setPhone={setPhone} />
        : <Listing click={click} setClick={setClick} edit={edit} setEdit={setEdit} />)} */}
    </div>
  );
}

export default App;
