import React, { useEffect, useState } from 'react'
import styles from "./Listing.module.css"

function Listing({click,setClick}) {
  const [empData, setEmpData] = useState();
  

  

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {return res.json();})
      .then((res) => { setEmpData(res) })
      .catch((err => {
        console.log(err.message)
      }))
  }, [])

  return (
    <div className={styles.container1}>
      <h2>Listing</h2>
      <div className={styles.center}><button className={styles.btn} onClick={()=>setClick((prev)=>!prev)}>Add New (+)</button></div>
      <div>
        <table width="95%">
         <thead>
         <tr>
            <th width="10%">Id</th>
            <th width="20%">Name</th>
            <th width="20%">E-mail</th>
            <th width="20%">Phone</th>
            <th width="30%">Actions</th>
          </tr>
         </thead>
          <tbody>
            { 
              empData &&
              empData.map(item=>(
                <tr id={item.id}>
                 <td>{item.id}</td>
                 <td>{item.name}</td>
                 <td>{item.email}</td>
                 <td>{item.phone}</td>
                 <td>
                 <button className={styles.btn1}>Edit</button>
                 <button className={styles.btn2}>Delete</button>
                 </td>

                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Listing
