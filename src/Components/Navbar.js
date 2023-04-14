import React from "react";
import '../App.css';

export default function Navbar(){
    return(
        <div id="header">
            <p id="copyright">copyright 2023 corpus callosum</p>
            <div className="flexparent">
                <a className="flexnavbutt" href="./google.com">about</a>
                <a className="flexnavbutt" href="./google.com">contact</a>
                <a className="flexnavbutt" href="./google.com">terms</a>
                <a className="flexnavbutt" href="./google.com">privacy</a>
                <a className="flexnavbutt" href="./google.com">help</a>
            </div>
        </div>
    );
}