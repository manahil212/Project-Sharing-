import axios from "axios"
import  {useNavigate} from "react-router-dom"
import React ,{useState, useEffect} from "react";
import { Container } from "react-bootstrap";
// yaha home page baniaga
function Home() {
    const navigate = useNavigate()
    // yaha state banaigi
    const [projects , setProjects] = useState([])
    const handleGetStarted = () =>{
        navigate("/Login")
    }

    // / 👇 YAHAN useEffect likho
  useEffect(() => {
    fetchProjects();
  }, []);

   // 👇 Aur iske neeche fetchProjects function
  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/projects");
      console.log(response.data);
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };
    return(
    <div style={{backgroundColor:"#fff3e0" ,minHeight:"100vh"}}>
        <Container className="mt-5 text center">
            <h1 style={{fontSize : "35px", marginBottom:"30px"}}>Welcome to home page</h1>
            <p  style={{fontFamily:"Arial-sans-serif", fontSize:"20px", fontWeight:"bold"}}>This is my home page</p>
            <button className="btn btn-dark" onClick={handleGetStarted}>Get Started</button>

            {/* Yahan projects show honge */}
  {projects.map((project) => (
    <div key={project._id}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.url}>{project.url}</a>
    </div>
  ))}
</Container>
 </div>
  
    
    )
}

export default Home