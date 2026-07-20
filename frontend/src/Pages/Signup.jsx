
import { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// yaha signup form hai
function Signup() { 
  const handleSubmit = (e) => {
           e.preventDefault()
            console.log("form submit hogaya")
            alert("Signup successfull")
          }


      const [formData, setFormData]     = useState({
         name :"",
         email:"",
         password:"",
     
      })
  
      const handleChange=(e) => {
    setFormData({
     ...formData,
    [ e.target.name] :e.target.value
    })

    console.log(formData)
  }

  return (
  <div style={{backgroundColor:"#fff3e0" ,minHeight:"100vh"}}>
    <Container className="mt-5">
      {/* <h1 style={{fontSize : "30px" , }}>Welcome to Signup page</h1> */}
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontFamily:"Arial-sans-serif", fontSize:"20px", fontWeight:"bold" ,textAlign:"left" , display:"block"}}>Full Name:</Form.Label>
        <Form.Control type="Name" placeholder="Name" name="name" onChange={handleChange} />
      </Form.Group>


       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  style={{fontFamily:"Arial-sans-serif", fontSize:"20px", fontWeight:"bold",textAlign:"left" , display:"block"}}>Email address:</Form.Label>
        <Form.Control type="Email" placeholder="Email" name="email"  onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  style={{fontFamily:"Arial-sans-serif", fontSize:"20px", fontWeight:"bold" ,textAlign:"left" , display:"block"}}>Password:</Form.Label>
        <Form.Control type="password" placeholder="Password"  name="password" onChange={handleChange}/>
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  style={{fontFamily:"Arial-sans-serif", fontSize:"20px", fontWeight:"bold" ,textAlign:"left" , display:"block"}}>Confirm Password:</Form.Label>
        <Form.Control type="password" placeholder="Password"  name="confirmpassword" onChange={handleChange}/>
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>

      <p style={{marginTop:"20px"}}>
        Already have an acoount <Link to="/Login">Login</Link>
      </p>
    </Form>
    </Container></div>
  );
}

export default Signup;