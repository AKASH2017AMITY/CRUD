import React from 'react'
import styles from "./Add.module.css"

function Add({ setClick,id,name,email,phone,setId,setEmail,setName,setPhone }) {
    

    function handleSubmit(e) {

        e.preventDefault();
        const empData = { id, name, email, phone };

        fetch("http://localhost:8000/employee", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empData)
        }).then((res) => {
            alert("Saved Successfully");
            setClick(prev => !prev)
        }).catch((err) => { console.log(err.message) })

    }

    return (
        <div className={styles.container}>
            <h1>Add Employee Details</h1>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Id</label><br />
                    <input type="text" disabled="disabled" placeholder='Id automatically generated' value={id} /><br />
                    <label htmlFor="">Name</label><br />
                    <input type="text" placeholder='Akash' value={name} onChange={e => setName(e.target.value)} required /><br />
                    <label htmlFor="">E-mail</label><br />
                    <input type="text" placeholder='example@gmail.com' value={email} onChange={e => setEmail(e.target.value)} required /><br />
                    <label htmlFor="">Phone no.</label><br />
                    <input type="text" placeholder='1234567890' value={phone} onChange={e => setPhone(e.target.value)} required /><br />
                    <button className={styles.button1}>Submit</button>
                    <button className={styles.button2} onClick={() => setClick((prev) => !prev)}>Back</button>
                </form>
            </div>
        </div>
    )
}

export default Add
