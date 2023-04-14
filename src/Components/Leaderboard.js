import React from "react";
import '../App.css';

export default function Leaderboard(props){
    const {username, originalpost, upvotes, friendnum} = props
    return(
        <div className="innerdiv">
            <h1>{username}</h1>
            <h5>{originalpost}</h5>
            <h5>{upvotes}</h5>
            <h5>{friendnum}</h5>

            <button className="innerdivbutton">message user</button>
            <button className="innerdivbutton">flag as enemy</button>
            <button className="innerdivbutton">report user</button>
        </div>
      
    );
}
