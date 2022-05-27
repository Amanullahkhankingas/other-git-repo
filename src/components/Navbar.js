import React from "react";
import PropTypes from "prop-types";
import { a } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg color-white bg-${props.modey}`}>
        <div className="container-fluid">
          <a className= {  ` navbar-brand text-${props.modey === "light"? "dark" : "light" }  `}  href="/"   >
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className= {  ` nav-a active text-${props.modey === "light"? "dark" : "light" }  `}  aria-current="page" href="#">
                  {/* {props.homeText} */}
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className={  `nav-a text-${props.modey === "light"? "dark" : "light" }  `} href="#">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success " type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="d-flex">
           <div> <button id="green" value="text" className="w-2 h-2 bg-success rounded-5 text-light font-2 px-2 mx-2 border-2 curser" onClick={props.color("green")} >green</button ></div>
           <div> <button id="black" value="text" className="w-2 h-2 bg-secondary rounded-5 text-light font-2 px-2 mx-2  " onClick={props.color1("black")}>black</button ></div>
            {/* <button id="blue" value="text"  className="w-2 h-2 bg-primary rounded-5 text-light font-2 px-2 mx-2 border-2 " onClick={props.color("blue")}>blue</button > */}
          </div>
          {/* dark mode button */}
        <div className="form-check form-switch my-2 mx-3" onClick={props.toggles} >
         <input className="form-check-input"  type="checkbox" role="switch" aria-checked id="flexSwitchCheckDefault"/>
         <label className={`form-check-label text-${props.modey === "light"? "dark" : "light"   } `} htmlFor="flexSwitchCheckDefault">{props.buttonText}</label>
        </div> 
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  homeText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "default title",
  homeText: "default home",
};
