import React from 'react';
import Web2 from './photome.jpg';

const About = () => {
    return(
        <>
        <section className="sec2">
        <div className="container about-div">
          <div className="row">
              <div className="col-lg-6 col-12 order-lg-1 order-2 about-info">
                  <h1>All about Me and My Qualification... </h1>
                  <p>Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                  <p><a href="mailto:kevin.prajapati2015@gmail.com">Contact Me</a><a href="#se2">Qualifications</a></p>
                  
              </div>
              <div className="col-lg-6 col-12 order-lg-2 order-1 about-img">
                    <img src={Web2} alt="..." className="img-fluid"></img>
              </div>
          </div>
        </div>
        </section>
        <section className="about-seconds" id="se2">
        <div className="container">
            <div className="row">
            <div className="col-10 mx-auto seconds-info">
                <h1>Qualifications</h1>
            </div>
                <div className="col-10 mx-auto">
                <p>HTML</p>
                <div class="progress">
               
                        <div class="progress-bar" role="progressbar" style={{width:"99%",backgroundColor:"#81b214"}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">99%</div>
                    </div>
                </div>
                <div className="col-10 mx-auto">
                <p>CSS</p>
                <div class="progress">
               
                        <div class="progress-bar" role="progressbar" style={{width:"95%",backgroundColor:"#ed6663"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                    </div>
                </div>
                <div className="col-10 mx-auto">
                <p>BOOTSTRAP</p>
                <div class="progress">
               
                        <div class="progress-bar" role="progressbar" style={{width:"90%",backgroundColor:"#776d8a"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                    </div>
                </div>
                <div className="col-10 mx-auto">
                <p>JAVASCRIPT</p>
                <div class="progress">
                
                        <div class="progress-bar" role="progressbar" style={{width:"70%",backgroundColor:"#fddb3a"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                    </div>
                </div>
                <div className="col-10 mx-auto">
                <p>REACT JS</p>
                <div class="progress">
                
                        <div class="progress-bar" role="progressbar" style={{width:"80%",backgroundColor:"#68b0ab"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        
        </>
    )
};

export default About;