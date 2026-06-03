import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'; 

const Home = () => {
  const [data, setData] = useState([]);

   const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/");
      setData(response.data);
    };

  useEffect(() => {
   
    fetchData();
  }, []);

  async function deleteData(id) {
    // DELETE logic here
    await axios.delete(`http://localhost:4000/delete/${id}`);  // sends DELETE request
      alert("Deleted successfully!");
      fetchData();
  }

  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Mobile</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.mobile}</td>
              <td className="d-flex gap-2">

              
                <Button as={Link} to={`/edit/${item._id}`} variant="warning" size="sm">
                  EDIT
                </Button>


                <Button variant="danger" size="sm" onClick={() => deleteData(item._id)}>
                  DELETE
                </Button>

              
                <Button as={Link} to={"/read"} variant="primary" size="sm">
                  READ
                </Button>

              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      
      <Button as={Link} to={"/post"} variant="success" className="mt-3">
        Form Filling
      </Button>
    </>
  );
};

export default Home;