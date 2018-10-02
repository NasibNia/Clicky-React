import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (

    <div className="jumbotron" > 
        <h1 classNmae="display-2 title bouncing">{props.text}</h1>
        
        {props.children}
    </div>


);

export default Jumbotron;