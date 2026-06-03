import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const ReadAllData = () => {

    let {id}    =      useParams()
    let navigate = useNavigate()

    let [allData,setAllData] = useState([])

    async function fetchAllData(){

     let response = await axios.get(`http://localhost:4000/${id}`)
        console.log(response.data);
        setAllData(response.data);
        
    }

    useEffect(()=>{

        fetchAllData()

    },[])



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
            {
                allData.map((item)=>(
                    <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.mobile}</td>
                        <td>{item.address}</td>
                        <td>{item.dob}</td>
                        <td>{item.photo}</td>
                    </tr>
                ))
            }
        </tbody>
    </Table>

     <Button  variant="success" className="mt-3" onClick={()=>navigate("/")}>
        Back To Home
      </Button>



      
    </>
  )
}

export default ReadAllData
