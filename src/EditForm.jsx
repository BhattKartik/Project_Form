import React from 'react'
import { useParams } from 'react-router-dom';

const EditForm = () => {

     const [data, setData] = useState([]);
     let params = useParams()

   const fetchData = async () => {
      const response = await axios.get(`http://localhost:4000/${id}`);
      setData(response.data);
    };
    
  useEffect(() => {
   
    fetchData();
  }, []);


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
        
            </tr>
          ))}
        </tbody>
      </Table>
      
    </>
  )
}

export default EditForm
