//import logo from './logo.svg';
import { scanTable } from './AWSFunctions';
import './App.css';
import Feed from './Components/Feed.js';
import Leaderboard from './Components/Leaderboard';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Footer from './Components/Footer';
import { useState, useEffect } from 'react';


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
  
  useEffect(() => {
    scanTable('socio-media-posts')
      .then((items) => {
        setPosts(items);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // console.log(posts)
  
  return (
    <div>
      <Navbar></Navbar>
      <div className='Mainbody'>
        <div className='threecol' id='Leaderboarddiv'>
          <h1 className='sectiontitle'>LEADERBOARD</h1>
          {posts.map(item => <Leaderboard{...item}></Leaderboard>)}
        </div>
        <div className='threecol' id='Feeddiv'>
          <h1 className='sectiontitle'>FEED</h1>
          {posts.map(item => <Feed{...item}></Feed>)}
        </div>
        <div className='threecol' id='Profilediv'>
          <h1 className='sectiontitle'>PROFILE</h1>
          {posts.map(item => <Profile{...item}></Profile>)}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}




export default App;



