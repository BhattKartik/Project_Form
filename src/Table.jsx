import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Table = ({mobile,name,age}) => {

  
    
  return (
    <>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Mobile</th>
        </tr>
        
      </thead>
      <tbody>
        {

          <tr>
          <td>{name}</td>
          <td>{age}</td>
          <td>{mobile}</td>
        </tr>
        }
      </tbody>
    </table>
      
    </>
  )
}

export default Table
