import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'; 
import { Container, Navbar , Nav , Form } from "react-bootstrap";

const Home = () => {
  const [data, setData] = useState([]);
  const [search,setSearch] = useState("");
  const [filterData,setFilterData] = useState([]);

   const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/");
      setData(response.data);
      setFilterData(response.data)
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

  function handleSearch(){
    
    
   const result =  data.filter((item)=>{
      return item.name.toLowerCase().includes(search.toLowerCase())
    })
    setFilterData(result)

  }

  function handleClear(){
    setSearch("")
    setFilterData(data)

  }

  return (
    <>
    <h1 className="text-center">CRUD_Employee_Management_System</h1>

       <Navbar bg="primary" data-bs-theme="dark">
        <Container className="d-flex justify-content-between align-items-center">
     
          <Button as={Link} to={"/post"} variant="success">
        Form Filling
      </Button>
        

              <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(event)=>setSearch(event.target.value)}
              onKeyDown={(event)=>{
                if(event.key === "Enter"){
                  event.preventDefault()
                  handleSearch();
                }
              }}
            />
            <Button variant="dark" onClick={handleSearch} className="me-2">Search</Button>
            <Button variant="dark" onClick={handleClear}>Clear</Button>
          </Form>
        </Container>
      </Navbar>

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
          {filterData.map((item) => (
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

              
                <Button as={Link} to={`/read/${item._id}`} variant="primary" size="sm">
                  READ
                </Button>

              </td>
            </tr>
          ))}


          {filterData.length === 0 && (
            <tr>
              <td colSpan={"4"} className="text-center">No Result Found</td>
            </tr>
          )}
        </tbody>
      </Table>

      
      <Button as={Link} to={"/post"} variant="success" className="mt-3">
        Form Filling
      </Button>
    </>
  );
};

export default Home;