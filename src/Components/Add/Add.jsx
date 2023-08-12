import React, { useState } from 'react'
import styles from "./Add.module.css"

function Add({setClick}) {
    const[id,setId]= useState();
    const[name,setName]= useState();
    const[email,setEmail]= useState();
    const[phone,setPhone]= useState();
    const[active,setActive]= useState(true);

    function handleSubmit(e){
        e.preventDefault();
        console.log({id,name,email,phone})
    }

  return (
   <div className={styles.container}>
     <div className={styles.formContainer}>
     <form onSubmit={handleSubmit}>
      <label htmlFor="">Id</label><br />
      <input type="text" disabled="disabled" placeholder='Id automatically generated' value={id}/><br />
      <label htmlFor="">Name</label><br />
      <input type="text" placeholder='Akash' value={name} onChange={e=>setName(e.target.value)}/><br />
      <label htmlFor="">E-mail</label><br />
      <input type="text" placeholder='example@gmail.com' value={email} onChange={e=>setEmail(e.target.value)}/><br />
      <label htmlFor="">Phone no.</label><br />
      <input type="text"placeholder='1234567890' value={phone} onChange={e=>setPhone(e.target.value)}/><br />
      <button className={styles.button1}>Submit</button>
      <button className={styles.button2} onClick={()=>setClick((prev)=>!prev)}>Back</button>
    </form>
     </div>
   </div>
  )
}

export default Add
