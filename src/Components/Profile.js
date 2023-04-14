import React from "react";
import '../App.css';

export default function Profile(props){
    // const {username, totalpost, friendnum} = props
    const friendnum = '3'
    let name= props.Title.S
    let namelist = name.split('-')
    return(
        <div className="innerdiv">
            <h1>{namelist[0]}</h1>
            <h5>{props.Content.S}</h5>
            <h5>{friendnum}</h5>
            <div>
            <button className="innerdivbutton">message user</button>
            <button className="innerdivbutton">flag as enemy</button>
            <button className="innerdivbutton">report</button>
            </div>
      </div>
    );
}