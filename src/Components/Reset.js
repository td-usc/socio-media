import React from "react";
import '../App.css';
import {Link} from "react-router-dom";

export default function Reset(){
    return(
    <div id="resetbox">
        <h1>Reset The Account "______"?</h1>
        <p>By clicking "DELETE," you agree to delete this account, erase all of its data including number of friends and enemies, and remove all posts associated with it.</p>
        <p>This CANNOT be undone!</p>
        <button /*onClick={() => /*delete account*/><Link to="/home">DELETE</Link></button>
        <button><Link to="/home">Cancel</Link></button>
    </div> 
    );
}