import React from "react";
import { NavLink } from "react-router-dom";
import Comman from "./Comman";
import  web from "../components/ab.jpg";
const Home = () =>{
return(
    <>
   <Comman
   name=' Grow your business with' 
   imgsrc={web}
    visit="/service" 
    btname="Get Started"
   />
    </>
)
}
export default Home