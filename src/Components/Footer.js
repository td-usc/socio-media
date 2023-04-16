import React from "react";
import '../App.css';
import {Link} from "react-router-dom";

export default function Footer(){
    return (
        <div id="footer">
            <a id="logo" href="/">SOCIO MEDIA</a>
            <div class="flexparent">
                <Link className="flexnavbutt" to="/">HOME</Link>
                <Link className="flexnavbutt" to="/">FEED</Link>
                <Link className="flexnavbutt" to="/profile">PROFILE</Link>
                <Link className="flexnavbutt" to="/reset">RESET</Link>
            </div>
        </div>
    );
}
