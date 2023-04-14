import React from "react";
import '../App.css';
// import {upvote} from '../Allfunc.js';

export default function Feed(props){
  // Content: {…}, Title: {…}, Upvotes: {…}, Downvotes: {…}
  // const {content, title} = props; 
  // const {Content} = content
  // const {Title} = title
  // console.log("props")
  // console.log(props)
  // console.log(props.Content.S)
  // console.log(props.Title.S)
  // console.log("Content")
  // console.log(Content)
  // console.log("Title")
  // console.log(Title)
  return(
      <div className="innerdiv">
        <h1>{props.Content.S}</h1>
        <h5>{props.Title.S}</h5>
        <div>
          <button className="innerdivbutton" >upvote</button>
          <button className="innerdivbutton">downvote</button>
          <button className="innerdivbutton">add as aquaintance</button>
          <button className="innerdivbutton">destroy post</button>
        </div>
      </div>
    );
}

