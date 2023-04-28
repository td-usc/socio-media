import React from "react" 
import '../App.css';

export default function About(){
    return(
        <div class="aboutflexparent">
            <h1>Socio-Media</h1>
            <h2>An Open Social Space for the Antisocial.</h2>


            <div className="aboutinnerdiv">
                <h3>&#10145; No use of emojis, emoticons, kaomojis, and other depictions of facial expressions and emotions</h3>
                <h3>&#10145; No imbedded images, links to images, or ASCII images</h3>
                <h3>&#10145; No use of punctuation other than the tried and true period (.)</h3>
                <h3>&#10145; No words containing entirely uppercase letters.</h3>
            </div>


            <p>*Note: Socio-Media is not an accurate and ethical depiction of Antisocial Personality Disorder and its victims. Socio-Media is intended for entertainment and should not be used as a model for symptoms of sociopathy.</p>
        </div>
    );
}