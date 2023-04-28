import React from "react";
import '../App.css'

export default function Account(){
    return(
        <div class="board flex" id="profileboard">
            <div class="centercontainer">
                    <img id="profile" src="https://debubglobalbank.com/wp-content/uploads/2019/08/blank-profile-picture.png" alt="profile pic"></img>
                    <p id="username">
                        "Username"
                    </p>
                    <p id="numofposts">
                        "Number of Total Posts"
                    </p>
                    <p id="numoffriends">
                        "Number of Total Friends"
                    </p>
                    <p id="numofenemies">
                        "Number of Total Enemies"
                    </p>
            </div>
        </div>
    );
}