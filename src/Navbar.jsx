import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import ClearAllIcon from '@material-ui/icons/ClearAll';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Tooltip from '@material-ui/core/Tooltip';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    var time1 = new Date().getHours();
    var styles = {};
    if(time1 < 12 ){
        styles.color="#a2d5f2";
    }else if(time1 < 19){
        styles.color="#ffc93c";
    }else{
        styles.color="#ee6f57";
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navs ">
      <div className ="container">

      
        <NavLink style={styles} className="navbar-brand" to="/">
            KWebDev
        </NavLink>
        <button
          className="navbar-toggler main-btn"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
         <ClearAllIcon fontSize="large"/> 
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
           
            <NavLink exact activeClassName="active1" className="nav-link" to="/">
                Home 
              </NavLink>
            
             
            </li>
            <li className="nav-item">
              <NavLink  activeClassName="active2" className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink  activeClassName="active3" className="nav-link" to="/service">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink  activeClassName="active4" className="nav-link" to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
        
        </div>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
