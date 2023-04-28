//import logo from './logo.svg';
import { createUser, scanTable } from './AWSFunctions';
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
import Post from './Components/Post';
import Myaccount from './Components/Myaccount';
import Signup from './Components/Signup';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate, Link} from "react-router-dom";

function Home(){
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [leaderboard, setleaderboard] = useState([]);
  useEffect(() => {
    scanTable('socio-media-posts')
      .then((items) => {
        setPosts(items);
        console.log("posts");
        console.log(items);

        var list = items;
        list.sort((a, b) => b.Upvotes.N - a.Upvotes.N);
        setleaderboard(list);
      })
      .catch((err) => {
        console.error(err);
      });

    
  }, []);

  // useEffect(() => {
    
  // }, []);
  useEffect(() => {
    scanTable('socio-media-users')
      .then((items) => {
        setUsers(items);
        console.log("users");
        console.log(items);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return(
    <div className='Mainbody'>
      <div className='threecol' id='Leaderboarddiv' tabIndex={0}>
        <h1 className='sectiontitle'>LEADERBOARD</h1>
        <div className='threecolcontent'>
          {/* <h1>Leaderboard</h1> */}
          {leaderboard.map(item => <Leaderboard{...item}></Leaderboard>)}
        </div>
      </div>
      <div className='threecol' id='Feeddiv' tabIndex={0}>
        <h1 className='sectiontitle'>FEED</h1>
        <div className='threecolcontent'>
          {/* <h1>feed</h1> */}
          {posts.map(item => <Feed{...item}></Feed>)}
        </div>
      </div>
      <div className='threecol' id='Profilediv' tabIndex={0}>
        <h1 className='sectiontitle'>PROFILE</h1>
        <div className='threecolcontent'>
          {/* <h1>profile</h1> */}
          {users.map(item => <Profile{...item}></Profile>)}
        </div>
      </div>
    </div>
  );
}

function Template(){
  return(
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(false);

  // run it when login button is clicked
  const Authorize = (un) => {
    setUser(un !== '');
  }

  // make sure a user is logged in before allowing access to home, feed, terms, etc
  const ProtectedRoute = ({children}) => {
    if(!user){
      return <Navigate to="/login"></Navigate>;
    }
    createUser(username);
    return children;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={
        <div className='logindiv'>
            <h1>Log in</h1>
            <form>
                Username: <input name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <button type="submit" onClick={() => Authorize(username)}> <Link to="/home">Submit</Link> </button>
            </form>
        </div>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/' element={<ProtectedRoute><Template></Template></ProtectedRoute>}>
          <Route path="/home" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/terms" element={<Terms></Terms>} />
          <Route path="/privacy" element={<Privacy></Privacy>} />
          <Route path="/help" element={<Help></Help>} />
          <Route path="/post" element={<Post un={username}></Post>} />
          <Route path="/profile" element={<Myaccount></Myaccount>}></Route>
          <Route path="/reset" element={<Reset></Reset>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}




export default App;



