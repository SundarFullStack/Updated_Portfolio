import React from "react";
import "./About.css";
import Image from "../../Components/Images/meenakshisunder183017@gmail.com.jpg";

const About = () => {
  return (
    <>
    
      <div className="about" id="about">
        <h5>About Me</h5>
        <h3>WELCOME TO MY SITE</h3>
        <div className="row" style={{ marginTop: "45px" }}>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={Image} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              {/* <h1>About Me</h1> */}
              <p style={{fontWeight:700,fontSize:"20px"}}>
              I'M BEGINNER IN WEB DESIGNING AND DEVELOPMENT.
            </p>
            <p style={{fontWeight:"bold",color:"grey"}} ><span className="about-details" >Name</span> : Meenakshi Sundar</p>
            <p style={{fontWeight:"bold",color:"grey",marginLeft:"-61px"}} ><span className="about-details" >Age</span> :  21 years old</p>
            <p style={{fontWeight:"bold",color:"grey",marginLeft:"-46px"}} ><span className="about-details" >Language</span> : English</p>
            <p style={{fontWeight:"bold",color:"grey",marginLeft:"-38px"}} ><span className="about-details" >Phone</span> : 7604977254</p>
            <p style={{fontWeight:"bold",color:"grey",marginLeft:"143px"}}><span className="about-details" >Email</span> : meenakshisunder183017@gmail.com</p>
            <p style={{fontWeight:"bold",color:"grey",marginLeft:"-42px"}} ><span className="about-details" >Education</span> : Diploma</p>
            
            </div>
          </div>
        </div>
 
    </>
  );
};

export default About;
