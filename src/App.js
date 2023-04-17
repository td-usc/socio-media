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
// import Login from './Components/Login';
import Signup from './Components/Signup';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate} from "react-router-dom";

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
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // true will give access to all as if a user was logged in
  // false will loop them back to the login/sign up page
  // we would usually start with false, but just to make it work for now, it is set to true
  const [user, setUser] = useState(true);

  useEffect(() => {
    scanTable('socio-media-posts')
      .then((items) => {
        setPosts(items);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // run it when login button is clicked
  // currently not navigating to the correct screen for some reason
  // NEED TO SOLVE
  function Authorize(un, pw){
    // just to test the functionality
    if(un === pw){
      setUser(true);
      return <Navigate to="/home"></Navigate>
    } else {
      return <Navigate to="/login"></Navigate>
    }
  }

  // make sure a user is logged in before allowing access to home, feed, terms, etc
  const ProtectedRoute = ({children}) => {
    if(!user){
      return <Navigate to="/login"></Navigate>;
    }
    return children;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={
        <div>
            <h1>Login Page (Just a template. We can change the design later)</h1>
            <form>
                Username: <input name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input><br></br>
                Password: <input name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input><br></br>
                <button type="submit" onClick={() => Authorize(username, password)}>Sumbit</button>
            </form>
        </div>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/' element={<ProtectedRoute><Template></Template></ProtectedRoute>}>
          <Route path="/home" element={<Home postsinfo={posts}></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/terms" element={<Terms></Terms>} />
          <Route path="/privacy" element={<Privacy></Privacy>} />
          <Route path="/help" element={<Help></Help>} />
          <Route path="/profile" element={<Myaccount></Myaccount>}></Route>
          <Route path="/reset" element={<Reset></Reset>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}




export default App;



