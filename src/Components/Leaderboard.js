import React from "react";
import '../App.css';
import {updateTableItem} from '../AWSFunctions'

export default function Leaderboard(props){
    // const {username, originalpost, upvotes, friendnum} = props
    let name= props.Title.S
    let namelist = name.split('-')
    return(
        <div className="innerdiv">
            <h1>{namelist[0]}</h1>
            <h5>{props.Content.S}</h5>
            <h5>Downvotes: {props.Downvotes.N}</h5>
            <h5>Upvotes: {props.Upvotes.N}</h5>

            <button className="innerdivbutton" class="actbutton" onClick={() => updateTableItem('socio-media-users', namelist[0], 'Enemies')}>flag as enemy</button>
            <button className="innerdivbutton" class="actbutton" onClick={() => updateTableItem('socio-media-users', namelist[0], 'Friends')}>add as aquaintance</button>
            <button className="innerdivbutton" class="actbutton">report user</button>
        </div>
      
    );
}
