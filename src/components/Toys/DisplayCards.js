import React  from "react";
import "./DisplayCard.css";

const DisplayCard = props => (
    <div>
        <div className="card" >
            <div className="img-container">
                <img className="card-img-top" src={props.image} alt={props.id} />
                
            </div> 
            <button className="remove" onClick={()=> props.handleGuess(props.id)}>x</button>  
        </div>
    </div>
);

export default DisplayCard;