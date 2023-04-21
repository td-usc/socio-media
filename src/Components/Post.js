import React, { useState } from 'react';
import '../App.css';
import {createPost} from '../AWSFunctions';
import {Link} from 'react-router-dom';

export default function Post({un}){
    const [content, setContent] = useState('');
    return(
        <div className='postdiv'>
            <h1>New Post</h1>
            <div className='board'>
                <form>
                    <textarea className='posttextarea' onChange={(e) => setContent(e.target.value)} placeholder='What would you like to say?'></textarea>
                    <div>
                        <button onClick={() => createPost(un, content)}><Link to="/home">Submit</Link></button>
                        <button><Link to="/home">Cancel</Link></button>
                    </div>
                </form>
            </div>
        </div>
    );
}