import React from 'react';
import Card from './Card';
import web3 from './webdev.jpg';
import web4 from './comp1.jpg';
import web5 from './comp2.jpg';
const Service = () => {
    return (
        <section className="sec3">
        <div className="container services-info-con">
            <div className="row">
            <div className="col-10 mx-auto ser1">
                <h1>Services</h1>
            </div>
                <div className="col-lg-4 col-10 mx-auto ser1">
                <Card title="UI Design" signin = "Sign in" imgs={web3}/>
                </div>
                <div className="col-lg-4 col-10 mx-auto ser1">
                <Card title="UX Design" signin = "Sign in" imgs={web4}/>
                </div>
                <div className="col-lg-4 col-10 mx-auto ser1">
                <Card title="FrontEnd Development" signin = "Sign in" imgs={web5}/>
                </div>
              
            </div>
        </div>
           
        </section>
 
    )
};

export default Service;