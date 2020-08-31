import React from 'react';

const Footer = () => {
    var time3 = new Date().getFullYear();

    return(
       <footer className="footer-div">
       <div className="footer-info">
       <p>&copy; Copyright {time3} kevin prajapati</p>
       
       </div>
          
       </footer>
    )
};

export default Footer