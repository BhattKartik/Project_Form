import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const ReadOne = () => {

    let { id } = useParams()       
    let navigate = useNavigate()

    let [employee, setEmployee] = useState({})   //  object not array

    async function fetchData() {
        let response = await axios.get(`http://localhost:4000/${id}`)  //  fetch one by id
        console.log(response.data);
        setEmployee(response.data);   //  single object not array
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>MOBILE NO</th>
                        <th>EMAIL</th>
                        <th>ADDRESS</th>
                        <th>DOB</th>
                        <th>PHOTO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>                             
                        <td>{employee.name}</td>
                        <td>{employee.age}</td>
                        <td>{employee.mobile}</td>
                        <td>{employee.email}</td>
                        <td>{employee.address}</td>
                        <td>{employee.dob}</td>
                        <td>{employee.photo}</td>
                    </tr>
                </tbody>
            </Table>

            <Button variant="success" className="mt-3" onClick={() => navigate("/")}>
                Back To Home
            </Button>
        </>
    )
}

export default ReadOne