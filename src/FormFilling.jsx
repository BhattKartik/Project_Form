import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const FormFilling = () => {

    const navigate = useNavigate();

    let [formData, setFormData] = useState({
        name: "",
        age: "",
        mobile: ""
    });


    function handleData(event) {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            let response = await axios.post("http://localhost:4000/post", formData)
            console.log(response);
            alert("Data Submitted Successfully!")
            navigate("/")   // 👈 goes back to home after submit
        } catch (error) {
            console.error("Submit error:", error)
            alert("Failed to submit!")
        }
    }

    return (
        <Container className="mt-5" style={{ maxWidth: "500px" }}>
            <Card bg="dark" text="white" className="p-4">

                <Card.Title className="mb-4 text-center">
                    Fill Employee Details
                </Card.Title>

                <Form onSubmit={handleSubmit}>

                    {/* Name */}
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleData}
                            placeholder="Enter name"
                            required
                        />
                    </Form.Group>

                    {/* Age */}
                    <Form.Group className="mb-3">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleData}
                            placeholder="Enter age"
                            required
                        />
                    </Form.Group>

                    {/* Mobile */}
                    <Form.Group className="mb-3">
                        <Form.Label>Mobile No</Form.Label>
                        <Form.Control
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleData}
                            placeholder="Enter mobile number"
                            required
                        />
                    </Form.Group>

                    {/* Buttons */}
                    <div className="d-flex gap-2 mt-4">
                        <Button variant="success" type="submit" className="w-50">
                            Submit
                        </Button>
                        <Button variant="secondary" className="w-50" onClick={() => navigate("/")}>
                            Cancel
                        </Button>
                    </div>

                </Form>
            </Card>
        </Container>
    )
}

export default FormFilling