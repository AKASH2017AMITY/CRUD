import React from 'react'
import { useState } from 'react';
import styles from "./Add.module.css"
import { Link, useNavigate } from 'react-router-dom';

function Add() {

    const [id, setId] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const empData = {name, email, phone };

        fetch("http://localhost:8000/employee", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empData)
        }).then((res) => {
            alert("Saved Successfully");
            navigate("/");
        }).catch((err) => { console.log(err.message) })

    }

    return (
        <div className={styles.container}>
            <h1>Add Employee Details</h1>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <label >Id</label><br />
                    <input  value={id} disabled="disabled" placeholder='Id automatically generated' /><br />
                    <label htmlFor="">Name</label><br />
                    <input type="text" placeholder='Akash' value={name} onChange={e => setName(e.target.value)} required /><br />
                    <label htmlFor="">E-mail</label><br />
                    <input type="text" placeholder='example@gmail.com' value={email} onChange={e => setEmail(e.target.value)} required /><br />
                    <label htmlFor="">Phone no.</label><br />
                    <input type="text" placeholder='1234567890' value={phone} onChange={e => setPhone(e.target.value)} required /><br />
                    <button className={styles.button1}>Submit</button>
                    <Link to="/" className={styles.button2} >Back</Link>
                    
                </form>
            </div>
        </div>
    )
}

export default Add
