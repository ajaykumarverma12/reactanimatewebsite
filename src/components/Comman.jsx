import React from "react";
import { NavLink } from "react-router-dom";
const Comman = (props) =>{
return(
    <>
    <section id="header" style={{display:'flex', alignItems:'center', marginTop:'150px'}}>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-l-1">
                        <h1>
                           {props.name}
                            <strong className="brand_name"> AjTechincal</strong></h1>
                        <h2 className="my-3">
                            We are the team of talented developer making website
                        </h2>
                        <div className="mt-3">
                            <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>

                        </div>
                    
                    </div>
                    <div className="col-md-6 order-1 order-lg-2 header_img">
                        <img src={props.imgsrc} className="img-fluid animated" />

                    </div>
                </div>
            </div>
            </div>
        </div>

    </section>
    </>
)
}
export default Comman