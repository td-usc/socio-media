import React from "react";
import '../App.css';
import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <div id="header">
            <p id="copyright">copyright 2023 corpus callosum</p>
            <div className="flexparent">
                <Link to='/about' className="flexnavbutt">about</Link>
                <Link to='/contact' className="flexnavbutt">contact</Link>
                <Link to='/terms' className="flexnavbutt">terms</Link>
                <Link to='/privacy' className="flexnavbutt">privacy</Link>
                <Link to='/help' className="flexnavbutt">help</Link>
            </div>
        </div>
    );
}