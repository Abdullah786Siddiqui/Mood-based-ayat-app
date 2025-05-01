import React, { useEffect, useState } from "react";
import logo from "../assets/Icons/logo.png";
import { Link } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";
import Hamburger from "hamburger-react";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { body } from "framer-motion/client";
import { useDispatch, useSelector } from "react-redux";
import { ToggleAction } from "../Store/store";
const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const dispatch = useDispatch();
  let ToggleMode = useSelector((store) => store.ToggleMode.darkMode);

  useEffect(() => {
    if (ToggleMode) {
      document.body.style.backgroundColor = "White";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "White";
    }
  }, [ToggleMode]);
  return (
    <header >
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-md ${!ToggleMode ? "bg-black  ":" bg-light"} fixed-top  p-0 navbarbar`}
        aria-label="Fourth navbar example"
      >
        <div className="container-fluid p-0  ">
          <Link to={"/"} className="navbar-brand mt-2 mt-sm-1 z">
            {/*  Navbar Image  */}

            <img
              className="img-fluid navbar-logo h-25 w-75 mb-2 mx-1"
              src={logo}
              alt="logo"
            />
          </Link>
          {/*  Navbar Humberger  */}
          <button
            className="navbar-toggler collapsed border-0"
            type="button"
            onClick={() => setOpen(!isOpen)}
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Hamburger toggled={isOpen} toggle={setOpen} color="#4B0082" />
          </button>

          <div
            className={`navbar-collapse ${
              isOpen ? "show" : "collapse"
            } ${!ToggleMode ? "bg-black  ":" bg-light"}`}
            id="navbarsExample04"
          >
            {/* Navbar Links  */}
            <ul className={`navbar-nav me-auto mb-2 gap-3 ${!ToggleMode ? "bg-black  ":" bg-light"}  mb-md-0 pt-1 ms-3 ms-sm-0 mt-0 `}>
              <li className="nav-item">
                <Link
                  to={"/"}
                  onClick={() => setOpen(false)}
                  className="nav-link text-black cta fw-bold cursor colour "
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link cta text-black fw-bold cursor colour"
                  to={"VoiceAyat"}
                  onClick={() => setOpen(false)}
                >
                  Voice Ayat
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"contact"}
                  onClick={() => setOpen(false)}
                  className="nav-link cta text-black fw-bold cursor colour "
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"./favorite"}
                  onClick={() => setOpen(false)}
                  className="nav-link cta text-black fw-bold cursor colour"
                >
                  Favorite
                </Link>
              </li>
            </ul>
            <div className="Main-Component d-flex mx-4 mb-2">
              <span onClick={()=>dispatch(ToggleAction.Toggle(true))}>
                {ToggleMode ? (
                  <MdOutlineDarkMode
                    className={`fs-3 cursor ${
                      ToggleMode ? "text-black" : "text-white"
                    } `}
                  />
                ) : (
                  <MdOutlineLightMode
                    className={`fs-3 cursor ${
                      ToggleMode ? "text-black" : "text-white"
                    } `}
                  />
                )}
              </span>
             
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
