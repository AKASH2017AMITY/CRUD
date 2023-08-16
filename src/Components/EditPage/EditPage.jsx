import React, { useEffect, useState } from 'react'
import styles from "./EditPage.module.css"
import { useParams } from 'react-router-dom';

function EditPage() {
    const {empId} = useParams();

    const [empData, setEmpData] = useState();

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empId)
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
            <h1>Edit Employee Data</h1>
        </div>
    )
}

export default EditPage
