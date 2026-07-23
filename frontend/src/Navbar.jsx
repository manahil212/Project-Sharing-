
import  {Link} from "react-router-dom"

const handleSubmit =(e) =>{
e.preventdefault()
console.log("submitted data");
}

function Navbar() {

  return (
    <>
    <div className="navbar">
      <nav   style={{  fontSize:"40px",  display:"flex",  justifyContent:"space-between", alignItems:"center",  padding :"0 20px", gap:"40px" }}>
          <Link style={{color:"black"}} to="/">Home</Link>
        <Link style={{color:"black"}} to="/Login">Login</Link> 
        <Link style={{color:"black"}} to="/Signup">Signup</Link>
        <Link  style={{color:"black"}} to="/ProjectSubmission"> 
        Project submission
        </Link>
      </nav>
      </div>
      </>
    
      )
}

export default Navbar;