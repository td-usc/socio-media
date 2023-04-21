import React from 'react';
import '../App.css';

export default function Post(){
    return(
        <div className='postdiv'>
            <h1>New Post</h1>
            <div className='board'>
                <form>
                    <textarea className='posttextarea' name='content' placeholder='What would you like to say?'></textarea>
                    <div>
                        <input type="submit" value="Share Post"></input>
                        <input type="button" value="Cancel" ></input>
                    </div>
                </form>
            </div>
        </div>
    );
}