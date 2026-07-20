
import { Button, Form, Container } from "react-bootstrap";
import  {useState} from "react"

function projectSubmission() { 
const [formData , setFormData] = useState(
    {title:"",
    description:"",
    url:""
    })

    const handleChange =(e) =>{
   setFormData({
    ...formData,
    [e.target.name] :e.target.value
   })
    }

const handleSubmit =(e) =>{
e.preventDefault()
console.log("Submit hogaya",formData);
}


  return (
  <div style={{backgroundColor:"#fff3e0" ,minHeight:"100vh"}}>
    <Container className="mt-5">
     <h1 style={{fontSize : "30px" , }}>Submit your project</h1> 
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontFamily:"Arial-sans-serif", fontSize:"20px", fontWeight:"bold" ,textAlign:"left" , display:"block"}}>Project Title</Form.Label>
        <Form.Control type="text" placeholder="" value={formData.title} name="title" onChange={handleChange} />
      </Form.Group>


       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  style={{fontFamily:"Arial-sans-serif", fontSize:"20px", fontWeight:"bold",textAlign:"left" , display:"block"}}>Description</Form.Label>
        <Form.Control type="text" placeholder="" name="description"  value={formData.description} onChange={handleChange}/>
      </Form.Group>


 <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  style={{fontFamily:"Arial-sans-serif", fontSize:"20px", fontWeight:"bold",textAlign:"left" , display:"block"}}>Project Link</Form.Label>
        <Form.Control type="text" placeholder="Enter your project URL" name="url"   value={formData.url} onChange={handleChange}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" >
        Submit Project
      </Button>

    </Form>
    </Container></div>
  );
}

export default projectSubmission;