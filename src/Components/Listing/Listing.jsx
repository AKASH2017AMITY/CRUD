import React, { useEffect, useState } from 'react'
import styles from "./Listing.module.css"
import { Link,useNavigate } from 'react-router-dom';

function Listing({click,setClick,setEdit}) {
  const [empData, setEmpData] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {return res.json();})
      .then((res) => { setEmpData(res) })
      .catch((err => {
        console.log(err.message)
      }))
  }, [])

  const handleEdit = (empId) =>{
    navigate("/employee/edit/"+ empId);
  }

  const handleDelete = (id) => {
    if(window.confirm("Do you wnt to remove")){
      fetch("http://localhost:8000/employee/"+ id,{method: "Delete"})
      .then((res)=>{
        alert("Removed Succesfully");
        window.location.reload();
      }).catch((err => {
        console.log(err.message)
      }))
    }

  }

  return (
    <div className={styles.container1}>
      <h1>Listing</h1>
      <div className={styles.center}><Link to="employee/create" className={styles.btn} >Add New (+)</Link></div>
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
                <tr key={item.id}>
                 <td>{item.id}</td>
                 <td>{item.name}</td>
                 <td>{item.email}</td>
                 <td>{item.phone}</td>
                 <td>
                 <button className={styles.btn1} onClick={()=>handleEdit(item.id)}>Edit</button>
                 <button className={styles.btn2}  onClick={()=>handleDelete(item.id)}>Remove</button>
                 
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

export default Listing;
