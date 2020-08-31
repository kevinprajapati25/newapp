import React from "react";
import {NavLink} from 'react-router-dom';

const Card = (props) => {
  return (
    <>
      <div className="card" style={{width: "18rem"}}>
        <img src={props.imgs} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
          <NavLink to="/" className="card-link">
            Card link
          </NavLink>
          <NavLink to="/contact" className="card-link">
            {props.signin}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Card;
