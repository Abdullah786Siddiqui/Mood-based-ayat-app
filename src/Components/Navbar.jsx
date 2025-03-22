import React from "react";
import logo from "../assets/Icons/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {

 
  return (
    <header>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-md navbar-dark fixed-top bg-light p-0 navbarbar"
        aria-label="Fourth navbar example"
      >
        <div className="container-fluid p-0">
          <Link to={"/"} className="navbar-brand mt-2 mt-sm-1" >
            {/*  Navbar Image  */}
            
            <img
              className="img-fluid navbar-logo h-25 w-75 mb-2 mx-1"
              src={logo}
              alt="logo"
            />
          </Link>
          {/*  Navbar Humberger  */}
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="navbar-collapse collapse bg-light"
            id="navbarsExample04"
          >
            {/* Navbar Links  */}
            <ul className="navbar-nav me-auto mb-2 gap-3 mb-md-0 pt-1 ms-3 ms-sm-0 mt-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link text-black cta fw-bold cursor colour ">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link cta text-black fw-bold cursor colour"
                  to={"about"}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"contact"} className="nav-link cta text-black fw-bold cursor colour ">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"./favorite"} className="nav-link cta text-black fw-bold cursor colour">
                  Favorite
                </Link>
              </li>
            </ul>
        
          
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
