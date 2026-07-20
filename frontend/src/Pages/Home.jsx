import  {useNavigate} from "react-router-dom"
import React from "react";
import { Container } from "react-bootstrap";
// yaha home page baniaga
function Home() {
    const navigate = useNavigate()
    const handleGetStarted = () =>{
        navigate("/Login")
    }
    return(
    <div style={{backgroundColor:"#fff3e0" ,minHeight:"100vh"}}>
        <Container className="mt-5 text center">
            <h1 style={{fontSize : "35px", marginBottom:"30px"}}>Welcome to home page</h1>
            <p  style={{fontFamily:"Arial-sans-serif", fontSize:"20px", fontWeight:"bold"}}>This is my home page</p>
            <button className="btn btn-dark" onClick={handleGetStarted}>Get Started</button>
        </Container>
        </div>
    )
}

export default Home