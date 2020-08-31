import React from 'react';
import web from "./photo2.png";
import { Button } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';

const Home = () => {
    var time = new Date().getHours();
    var style = {};
    var style1 = {fontSize:"4rem"};
    var greeting ="";
    if(time < 12 ){
        greeting = "Good Morning";
        style.color = "#a2d5f2"
    }else if(time < 19 ){
        greeting = "Good AfterNoon";
        style.color="#ffc93c"
    }else{
        greeting = "Good Night ";
        style.color="#ee6f57"
    }
    return(
        <>
        <section className="sec1" id="se">
        
        <div className=" container home-div">
             <h1  className="color"><span style={style}>{greeting}</span> & Welcome to the website of future</h1>
             
        </div>
        </section>
        <section className="seconds">
        <div className="container secondsinfo">
        <h1 className="my-5">About</h1>
        <h5>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h5>
            
        </div>
        
        </section>
        <section className="third">
        <div className="third-info">
        <PhotoCameraIcon style={style1}/>
        <h1>Testimonials</h1>
           <p>Donec fermentum ligula tortor, vitae lobortis nisi accumsan quis.</p>
           <h4>Morbi dui elit, scelerisque sit amet est id, </h4>
        </div>
          
        </section>
        <section className = "fourth">
            <div className="container">
            <h1 className="my-5 info">Features</h1>
            <div className="row">
            <div className="col-lg-4 info1 my-3">
            <FavoriteIcon style={style1}/>
                <h1>Shooting Stars</h1>
                <p>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
            </div>
            <div className="col-lg-4 info2 my-3">
            <LoyaltyIcon style={style1}/>
            <h1>The Catalyzer</h1>
            <p>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>

            </div>
            <div className="col-lg-4 info3 my-3">
            <TrackChangesIcon style={style1}/>
            <h1>Neptune</h1>
            <p>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>

            </div>

            </div>

            </div>
        </section>
       
       
       
       
       
       </>
    )
};

export default Home;