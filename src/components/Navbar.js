import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent ">
        <div className="container">
          <Link className="navbar-brand" to="/"><b>Distributed File Sharing</b></Link>

          <div className="ms-auto d-flex align-items-center text-light" >

            <Link to='/uploadfiles' className="btn btn-outline-light mr-2">
              <i className="bi bi-plus-circle-dotted" ></i>
            </Link>
          </div>
        </div>
      </nav>

    );
  }
}

export default Navbar;
