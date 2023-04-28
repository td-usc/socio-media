import React from "react";
import '../App.css';
import {Link} from "react-router-dom";

export default function Footer(){
    return (
        <div id="footer">
            <a id="logo" href="/">SOCIO MEDIA</a>
            <div class="flexparent">
                <Link className="flexnavbutt" to="/home">HOME</Link>
                <Link className="flexnavbutt" to="/home">FEED</Link>
                <Link className="flexnavbutt" to="/post">POST</Link>
                <Link className="flexnavbutt" to="/profile">PROFILE</Link>
            </div>
        </div>
    );
}
