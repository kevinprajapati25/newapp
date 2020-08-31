import React from "react";
import Navbar from "./Navbar";
import "./index.css";
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';
import Footer from './component/Footer';

const App = () => {
    return(
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/"/>
            </Switch>
            <Footer/>
          
            
          
        </>
    )
};

export default App;