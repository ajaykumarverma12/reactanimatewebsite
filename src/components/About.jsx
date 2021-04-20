import React from "react";
import { NavLink } from "react-router-dom";
import Comman from "./Comman";
import web from "../components/abc.jpg";
const About = () =>{
return(
    <>
    <Comman name=' Welcome to about page' 
    imgsrc={web}
     visit="/contact" 
     btname="contact now"
      />
   
    </>
)
}
export default About