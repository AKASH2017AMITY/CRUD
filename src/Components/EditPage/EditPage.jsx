import React, { useEffect, useState } from 'react'
import styles from "./EditPage.module.css"

function EditPage({ setEdit, id , name, email,phone,setClick,setId,setEmail,setName,setPhone}) {
    const [editEmpData, setEditEmpData] = useState();

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + id)
            .then((res) => { return res.json(); })
            .then((res) => { setId(res.id);
                setName(res.name);
                setEmail(res.email);
                setPhone(res.phone);
            
            })
            .catch((err => {
                console.log(err.message)
            }))
    }, []);

    function handleSubmit(e) {

        e.preventDefault();
        const empData = { id, name, email, phone };

        fetch("http://localhost:8000/employee/"+id, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(editEmpData)
        }).then((res) => {
            alert("Saved Successfully");
            setEdit(prev => !prev)
        }).catch((err) => { console.log(err.message) })

    }
    return (
        <div className={styles.container}>
            <h1>Edit Employee Details</h1>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Id</label><br />
                    <input type="text" placeholder='Id automatically generated' value={id} /><br />
                    <label htmlFor="">Name</label><br />
                    <input type="text" placeholder='Akash' value={name} onChange={e => setName(e.target.value)} required /><br />
                    <label htmlFor="">E-mail</label><br />
                    <input type="text" placeholder='example@gmail.com' value={email} onChange={e => setEmail(e.target.value)} required /><br />
                    <label htmlFor="">Phone no.</label><br />
                    <input type="text" placeholder='1234567890' value={phone} onChange={e => setPhone(e.target.value)} required /><br />
                    <button className={styles.button1}>Submit</button>
                    <button className={styles.button2} onClick={() => setEdit((prev) => !prev)}>Back</button>
                </form>
            </div>
        </div>
    )
}

export default EditPage
