// import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProjectSubmission from './Pages/ProjectSubmission';
import './App.css'

function App(){
  return(  
  <BrowserRouter>
  <Navbar/>
{/* // Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/ProjectSubmission" element={<ProjectSubmission/>} />

      </Routes>
    </BrowserRouter>
  )
}
export default App;