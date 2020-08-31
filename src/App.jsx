import React from "react";
import Navbar from "./Navbar";
import "./index.css";
import {Switch,Route} from 'react-router-dom';
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
                <Route path="/about" component={About} />
                <Route path="/service" component={Service} />
                <Route path="/contact" component={Contact} />
            </Switch>
            <Footer/>
          
            
          
        </>
    )
};

export default App;