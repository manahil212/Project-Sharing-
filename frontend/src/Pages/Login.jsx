import { Button, Form,Container, Row } from "react-bootstrap";
import {Link} from "react-router-dom"
import { useState } from "react";


// yaha login form hai

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()//yeh page ko refresh honai sai rokaiga
    console.log("form submit hogaya")
    alert("login successfull")

  }


// onChange
  const[formData, setFormData] = useState({
    email:"",
    password:""
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
    <Container className="mt-5" >
      {/* <h1 style={{fontSize : "30px", marginBottom:"30px"}} >Welcome to Login page</h1>  */}
      <div className="container">
        
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label  style={{fontFamily:"sans-serif", fontSize:"20px", fontWeight:"bold" ,textAlign:"left" , display:"block"}}>Email address:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange = {handleChange} />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  style={{fontFamily:"sans-serif" ,fontSize:"20px", fontWeight:"bold", textAlign:"left" , display:"block"}}>Password:</Form.Label>
      <Form.Control type="password" placeholder="Password" name="password" onChange = {handleChange}/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Login
      </Button>

      <p style={{marginTop:"20px"}}>
        Dont't have an account? <Link to="/Signup">Signup</Link>
      </p>
    </Form>
    </div>
    </Container>
    </div>
  );
}

export default Login;

// usestate or on change== tb lagta hai jb hm chah rahai ho k jesai jesai key value mtlb alphabet hm likhai imput field mai tu wh console mai show ho
// handle submit