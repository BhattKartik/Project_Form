import React, { useEffect, useState } from "react";
import axios from "axios";
// import Table from "./Table";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/");
      setData(response.data);
    };

    fetchData();
  }, []);

  console.log(data);

  function deleteData(){
    //THIS WILL delte the data
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
              <td>
                <button>
                  <Link to={"/edit"}>EDIT</Link>
                  
                </button>
                {"|"}
                <button onClick={()=>deleteData(item._id)}>
                  
                  DELETE
                </button>
                {"|"}
                <button>
                  <Link to={"/read"}>READ</Link>
                  
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Link to={"/post"}>Form Filling</Link>
    </>
  );
};

export default Home;
