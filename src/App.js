//import logo from './logo.svg';
import { scanTable } from './AWSFunctions';
import './App.css';
import Feed from './Components/Feed.js';
import Leaderboard from './Components/Leaderboard';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Footer from './Components/Footer';
import Terms from './Components/Terms';
import { useState, useEffect } from 'react';
// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';



function App() {

  //const feed = ["foo", "bar", "po"]
  // // in the returning div {feed.map(text => <div>{text}</div>)}
  // const Leaderboarditems = [
  //   {username:"Alice", originalpost:"post1", upvotes:20, friendnum:50},
  //   {username:"Kendra", originalpost:"post2", upvotes:18, friendnum:40}
  // ];
  // const Feeditems = [
  //   {username:"Alice", posttext:"hello1"},
  //   {username:"Kendra", posttext:"hello2"}
  // ];
  // const Profileitems = [
  //   {username:"Psyc1", totalpost:3, friendnum:3},
  //   {username:"Psyc1", totalpost:1, friendnum:10}
  // ];

  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('main');

  useEffect(() => {
    scanTable('socio-media-posts')
      .then((items) => {
        setPosts(items);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const handleClick = (newcontent) => {
    setContent(newcontent);
  }

  // console.log(posts)
  
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div id="header">
            <p id="copyright">copyright 2023 corpus callosum</p>
            <div className="flexparent">
                <a className="flexnavbutt" href="#" onClick={() => handleClick('about')}>about</a>
                <a className="flexnavbutt" href="#" onClick={() => handleClick('contact')}>contact</a>
                <a className="flexnavbutt" href="#" onClick={() => handleClick('terms')}>terms</a>
                <a className="flexnavbutt" href="#" onClick={() => handleClick('privacy')}>privacy</a>
                <a className="flexnavbutt" href="#" onClick={() => handleClick('help')}>help</a>
            </div>
        </div>
      <div className='Mainbody'>
        <div className='threecol' id='Leaderboarddiv' tabIndex={0}>
          <h1 className='sectiontitle'>LEADERBOARD</h1>
          <div className='threecolcontent'>
            {posts.map(item => <Leaderboard{...item}></Leaderboard>)}
            {posts.map(item => <Leaderboard{...item}></Leaderboard>)}
          </div>
        </div>
        <div className='threecol' id='Feeddiv' tabIndex={0}>
          <h1 className='sectiontitle'>FEED</h1>
          <div className='threecolcontent'>
            {posts.map(item => <Feed{...item}></Feed>)}
            {posts.map(item => <Feed{...item}></Feed>)}
          </div>
        </div>
        <div className='threecol' id='Profilediv' tabIndex={0}>
          <h1 className='sectiontitle'>PROFILE</h1>
          <div className='threecolcontent'>
            {posts.map(item => <Profile{...item}></Profile>)}
            {posts.map(item => <Profile{...item}></Profile>)}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}




export default App;



