import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const ReadOne = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  let [employee, setEmployee] = useState({}); //  object not array

  async function fetchData() {
    try {
      // ✅ add try/catch
      let response = await axios.get(`http://localhost:4000/${id}`);
      console.log(response.data);
      setEmployee(response.data);
    } catch (error) {
      console.error("Error fetching employee:", error.message);
    }

  }

  useEffect(() => {
    fetchData();
  }, []);

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
            <td>  {employee.address ? (
    <>
      <div>{employee.address.street}</div>
      <div>{employee.address.city}, {employee.address.state}</div>
      <div>{employee.address.country} - {employee.address.pincode}</div>
    </>
  ) : ""}</td>
            <td>{employee.dob}</td>
            <td>        <img
                src={employee.photo}
                alt={employee.name}
                width={60}
                height={60}
                style={{ borderRadius: "50%" }}
              /></td>
          </tr>
        </tbody>
      </Table>

      <Button variant="success" className="mt-3" onClick={() => navigate("/")}>
        Back To Home
      </Button>
    </>
  );
};

export default ReadOne;
