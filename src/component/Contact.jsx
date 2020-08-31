import React from "react";
import {useState} from 'react';

const Conatct = () => {
    const[input,setInput] = useState();
    const forminput = (e) =>{
        setInput(e.target.value);
    }
    const click = (e) =>{
        e.preventDefault();
        alert(`Thanks for supporting me ${input}`);
    }
  return (
    <section className="sec4">
      <div className="container">
        <div className="row">
        <div className="col-10 mx-auto cont-img">
        <i class="fa fa-user" aria-hidden="true"></i>
        </div>
          <div className="col-10 mx-auto">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  autoComplete="off"
                  onChange={forminput}
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>
              <div class="form-group form-check">
                
              </div>
              <button type="submit" class="btn btn-primary" onClick={click}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conatct;
