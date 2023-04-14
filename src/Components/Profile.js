import React from "react";
import '../App.css';

export default function Profile(props){
    const {username, totalpost, friendnum} = props
    return(
        <div className="innerdiv">
            <h1>{username}</h1>
            <h5>{totalpost}</h5>
            <h5>{friendnum}</h5>
            <div>
            <button className="innerdivbutton">message user</button>
            <button className="innerdivbutton">flag as enemy</button>
            <button className="innerdivbutton">report</button>
            </div>
      </div>
    );
}