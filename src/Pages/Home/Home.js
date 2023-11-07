import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";


const Home = () => {

  return (
    <>
      <div className="home-container" id="home">

        <div className="container home-content">
          
          <h4>Hello, My Name is</h4>
          <p><span style={{color:"rgb(62 177 197)"}}>Meenakshi</span> Sundar</p>
          <h2 style={{color:"rgb(62 177 197)"}}><span style={{color:"white"}}>I'm a</span><Typewriter options={{strings:["Mern Stack Developer","Full Stack Developer"],
          autoStart:true,
            loop: true,
          
          }} />
           
            </h2>
             
     
        
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=7604977254"
                target="_blank"
              >
                Hire Me
              </a>
              <a
                className="btn btn-cv"
                href="https://sundarfullstack.github.io/Sample_Portfolio_app/Resume.pdf"
                download="Sundar_Resume.pdf"
                target="_blank"
              >
                My Resume
              </a>
            </div>
          
        </div>
      </div>
    </>
  );
};
export default Home;
