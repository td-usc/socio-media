import React from "react";
import '../App.css';
import {updateTableItem} from '../AWSFunctions'
// import {upvote} from '../Allfunc.js';

export default function Feed(props){
  let name= props.Title.S
  let namelist = name.split('-')
  return(
      <div className="innerdiv">
        <h1>{props.Content.S}</h1>
        <h5>{namelist[0]}</h5>
        <div>
          <button className="innerdivbutton" onClick={() => updateTableItem('socio-media-posts', props.Title.S, 'Upvotes')}>upvote</button>
          <button className="innerdivbutton" onClick={() => updateTableItem('socio-media-posts', props.Title.S, 'Downvotes')}>downvote</button>
          <button className="innerdivbutton" onClick={() => updateTableItem('socio-media-users', namelist[0], 'Enemies')}>flag as enemy</button>
          <button className="innerdivbutton" onClick={() => updateTableItem('socio-media-users', namelist[0], 'Friends')}>add as aquaintance</button>
          <button className="innerdivbutton" onClick={() => updateTableItem('socio-media-posts', props.Title.S, 'DestroyCounter')}>destroy post</button>
        </div>
      </div>
    );
}

