import React from "react";
import '../App.css';
// import {upvote} from '../Allfunc.js';

export default function Feed(props){
  let name= props.Title.S
  let namelist = name.split('-')
  return(
      <div className="innerdiv">
        <h1>{props.Content.S}</h1>
        <h5>{namelist[0]}</h5>
        <div>
          <button className="innerdivbutton" >upvote</button>
          <button className="innerdivbutton">downvote</button>
          <button className="innerdivbutton">flag as enemy</button>
          <button className="innerdivbutton">add as aquaintance</button>
          <button className="innerdivbutton">destroy post</button>
        </div>
      </div>
    );
}

