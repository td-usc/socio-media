import React from "react";
import '../App.css';

export default function Footer(){
    return (
        <div id="footer">
            <a id="logo">SOCIO MEDIA</a>
            <div class="flexparent">
                <a class="flexnavbutt" /* href="homepage.html" */>HOME</a>
                <a class="flexnavbutt">FEED</a>
                <a class="flexnavbutt" /* href="account.html" */>PROFILE</a>
                <a class="flexnavbutt">RESET</a>
            </div>
        </div>
    );
}
