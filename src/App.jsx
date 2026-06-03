
import React from "react"
import Form from "./Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FormFilling from "./FormFilling"
import Home from "./Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import EditForm from "./EditForm"
function App() {
  

  return (
    <>

    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/post" element={<FormFilling/>}/>
      {/* <Route path="/delete" element={<Form/>}/> */}
      <Route path="/edit/:id" element={<EditForm/>}/>

    </Routes>
    
    </BrowserRouter>

    


      
    </>
  )
}

export default App
