import React from "react";
import "./Projects.css";


const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h4 className="col-12 mt-3 mb-1 text-center">
          Projects
        </h4>
        <hr />
        <h3 className="pb-3 text-center">
        PAST WORK I DID SUCCESSFULLY
        </h3>

        <div className="row" id="ads">
    
            <div className="col-md-6">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQugX8L6YigvYiPfzrS4c5khOkNmjfcDgmTfQ&usqp=CAU"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Authentication App</h5>
                  </div>
                  <a href="https://bespoke-custard-7d7688.netlify.app/" target="_blank" className="ad-btn">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdDWTpv3JPwgqgSLIDbxQ-Yv-_IBBzUR10OpWvP9xNzTDvFvctXkp19DoR27EJ2G5mp4&usqp=CAU"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">BlackMart Sports Wears</h5>
                  </div>
                  <a href="https://sundarfullstack.github.io/ShopCartReactApp/?" target="_blank" className="ad-btn">
                    View
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdDWTpv3JPwgqgSLIDbxQ-Yv-_IBBzUR10OpWvP9xNzTDvFvctXkp19DoR27EJ2G5mp4&usqp=CAU"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Tasty Food Delivery App</h5>
                  </div>
                  <a href="#" className="ad-btn">
                    View
                  </a>
                </div>
              </div>
            </div> */}
       
        </div>
      </div>
    </>
  );
};

export default Projects;
