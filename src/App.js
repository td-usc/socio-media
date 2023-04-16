//import logo from './logo.svg';
import { scanTable } from './AWSFunctions';
import './App.css';
import Feed from './Components/Feed.js';
import Leaderboard from './Components/Leaderboard';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Footer from './Components/Footer';
import Terms from './Components/Terms';
import About from './Components/About';
import Contact from './Components/Contact';
import Privacy from './Components/Privacy';
import Reset from './Components/Reset';
import Help from './Components/Help';
import Myaccount from './Components/Myaccount';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function Home({postsinfo}){
  return(
    <div className='Mainbody'>
      <div className='threecol' id='Leaderboarddiv' tabIndex={0}>
        <h1 className='sectiontitle'>LEADERBOARD</h1>
        <div className='threecolcontent'>
          {/* <h1>Leaderboard</h1> */}
          {postsinfo.map(item => <Leaderboard{...item}></Leaderboard>)}
          {postsinfo.map(item => <Leaderboard{...item}></Leaderboard>)}
        </div>
      </div>
      <div className='threecol' id='Feeddiv' tabIndex={0}>
        <h1 className='sectiontitle'>FEED</h1>
        <div className='threecolcontent'>
          {/* <h1>feed</h1> */}
          {postsinfo.map(item => <Feed{...item}></Feed>)}
          {postsinfo.map(item => <Feed{...item}></Feed>)}
        </div>
      </div>
      <div className='threecol' id='Profilediv' tabIndex={0}>
        <h1 className='sectiontitle'>PROFILE</h1>
        <div className='threecolcontent'>
          {/* <h1>profile</h1> */}
          {postsinfo.map(item => <Profile{...item}></Profile>)}
          {postsinfo.map(item => <Profile{...item}></Profile>)}
        </div>
      </div>
    </div>
  );
}

function App() {
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

  console.log(posts)
  
  return (
    <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home postsinfo={posts}></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/terms" element={<Terms></Terms>} />
          <Route path="/privacy" element={<Privacy></Privacy>} />
          <Route path="/help" element={<Help></Help>} />
          <Route path="/profile" element={<Myaccount></Myaccount>}></Route>
          <Route path="/reset" element={<Reset></Reset>}></Route>
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
  );
}




export default App;



