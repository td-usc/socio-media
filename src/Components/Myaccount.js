import { useState, useEffect } from "react";
import { scanTable } from '../AWSFunctions';
import '../App.css';
import {Link} from "react-router-dom";

export default function Account({un}){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        scanTable('socio-media-users')
          .then((items) => {
            for(let i=0; i<items.length; i++){
                if(items[i].Username.S === un){
                    setUsers([[items[i].Username.S], [items[i].Posts.N], [items[i].Friends.N], [items[i].Enemies.N]]);
                    break;
                }
            }
          })
          .catch((err) => {
            console.error(err);
          });
    }, [un]);

    const logOut = () => {
        localStorage.clear();
    }


    return(
        <div className="accountparentdiv">
            <div class="board flex" id="profileboard">
                <div class="centercontainer">
                        <img id="profile" src="https://debubglobalbank.com/wp-content/uploads/2019/08/blank-profile-picture.png" alt="profile pic"></img>
                        <p id="username">
                            <b>Username</b>: {users[0]}
                        </p>
                        <p id="numofposts">
                            <b>Number of Total Posts</b>: {users[1]}
                        </p>
                        <p id="numoffriends">
                            <b>Number of Total Friends</b>: {users[2]}
                        </p>
                        <p id="numofenemies">
                            <b>Number of Total Enemies</b>: {users[2]}
                        </p>
                        <Link className="flexnavbutt" to="/reset" id="resetlink">RESET ACCOUNT</Link>
                        <button id="logout" onClick={() => logOut()}> <Link to="/login">Log Out</Link> </button>
                </div>
            </div>
        </div>
    );
}