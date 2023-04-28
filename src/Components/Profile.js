import React from "react";
import '../App.css';

export default function Profile(props){
    return(
        <div className="innerdiv">
            <h1>{props.Username.S}</h1>
            <h5>Posts:{props.Posts.N}</h5>
            <h5>Friends:{props.Friends.N}</h5>
            <h5>Enemies:{props.Enemies.N}</h5>
            <div>
            
            <button className="innerdivbutton">flag as enemy</button>
            <button className="innerdivbutton">add as aquaintance</button>
            <button className="innerdivbutton">report</button>
            </div>
      </div>
    );
}