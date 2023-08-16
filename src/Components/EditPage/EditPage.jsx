import React, { useEffect, useState } from 'react'
import styles from "./EditPage.module.css"
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditPage() {
    const {empId} = useParams();

    // const [empData, setEmpData] = useState();

    const [id, setId] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empId)
            .then((res) => { return res.json(); })
            .then((resp) => { 
                setId(resp.id);
                setName(resp.name);
                setEmail(resp.email);
                setPhone(resp.phone);
            
            })
            .catch((err => {
                console.log(err.message)
            }))
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const empData = { id, name, email, phone };
        fetch("http://localhost:8000/employee/"+empId, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empData)
        }).then((res) => {
            alert("Saved Successfully");
            navigate("/");
        }).catch((err) => { console.log(err.message) })

    }

    
    return (
        <div className={styles.container}>
            <h1>Edit Employee Data</h1>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Id</label><br />
                    <input disabled="disabled" type="text" placeholder='Id automatically generated' value={id} /><br />
                    <label htmlFor="">Name</label><br />
                    <input type="text" placeholder='Akash' value={name} onChange={e => setName(e.target.value)} required /><br />
                    <label htmlFor="">E-mail</label><br />
                    <input type="text" placeholder='example@gmail.com' value={email} onChange={e => setEmail(e.target.value)} required /><br />
                    <label htmlFor="">Phone no.</label><br />
                    <input type="text" placeholder='1234567890' value={phone} onChange={e => setPhone(e.target.value)} required /><br />
                    <button className={styles.button1}>Save</button>
                    <Link to="/" className={styles.button2} >Back</Link>
                </form>
            </div>
        </div>
    )
}

export default EditPage
