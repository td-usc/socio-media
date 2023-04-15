import React from "react";
import '../App.css';

export default function Navbar(){
    return(
        <div id="header">
            <p id="copyright">copyright 2023 corpus callosum</p>
            <div className="flexparent">
                <a className="flexnavbutt" href="#" >about</a>
                <a className="flexnavbutt" href="#" >contact</a>
                <a className="flexnavbutt" href="#" >terms</a>
                <a className="flexnavbutt" href="#" >privacy</a>
                <a className="flexnavbutt" href="#" >help</a>
            </div>
        </div>
    );
}