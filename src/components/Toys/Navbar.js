import React from "react";


const Navbar = props => (

        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{width : "100vw"}}>
            <a className="nav-item nav-link " >Clicky Game </a>
            <a className="nav-item nav-link float-right" >Score : {props.score} | </a>
            <a className="nav-item nav-link" > Top Score :  {props.topScore}</a>

        </nav>
);

export default Navbar;





