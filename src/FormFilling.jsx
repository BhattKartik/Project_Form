import axios from 'axios';
import React, { useState } from 'react'

const FormFilling = () => {

    let [formData,setFormData] = useState({
        name:"",
        age:"",
        mobile:""
    });

    function handleData(event){
        const {name,value} = event.target
        setFormData({
            ...formData,
            [name]:value
        })

        

    }

    async function handleSubmit(event){
        event.preventDefault();

        let response = await axios.post("http://localhost:4000/post",formData)
        console.log(response);
        


    }

  return (
    <>


    <form onSubmit={handleSubmit}>


        <label>Name:</label>
        <input type="text" value={formData.name} name='name' onChange={handleData} />

       <label>Age:</label>
        <input type="text" value={formData.age} name='age' onChange={handleData} />

         <label>Mobile No:</label>
        <input type="text" value={formData.mobile} name='mobile' onChange={handleData} />

        <button type="submit">Submit</button>

    </form>
      
    </>
  )
}

export default FormFilling
