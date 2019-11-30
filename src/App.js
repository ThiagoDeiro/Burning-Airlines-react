import React from 'react';
import {Router, Link} from '@reach/router';
import './App.css';
import Plane from './components/Plane/Plane'
import UserLogin from './components/UserLogin/UserLogin'
import Homepg from './components/Home/Homepg'
import SearchFlight from './components/Search/SearchFlight'
import Adminpg from './components/Admin/Adminpg'



const Login = () =>(
  <div>
      <nav className='nav'>
        <Link to="/">Login</Link>|{" "}
        <Link to="/Home"><button>SignUp</button></Link>
      </nav>
      <UserLogin />
  </div>
)

const Home =() =>(
  <div>
    <nav>
      <Link to="/Home">Home</Link>|{" "}
      <Link to="/Search">Search</Link>|{" "}
      <Link to="/Admin">Admin</Link>|{" "}
      <Link to="/">Logout</Link>
    </nav>
    <nav />
    <Homepg />
  </div>
)

const Search =() => {
  return (
    <div>
      <nav>
        <Link to="/Home">Home</Link>|{" "}
        <Link to="/Admin">Admin</Link>|{" "}
        <Link to="/">Logout</Link>
      </nav>
      <SearchFlight />
    </div>
  )
}

const Admin = () =>(
  <div>
    <nav>
      <Link to="/Home">Home</Link>|{" "}
      <Link to="/Search">Search</Link>|{" "}
      <Link to="/">Logout</Link>
    </nav>
    <Adminpg />
  </div>
)


function App() {
  return (
    <div className="App">
     <Router>
       <Login path="/"/>
       <Home path='/Home' />
       <Search path='/Search'/>
       <Admin path='/Admin' />
     </Router>
    </div>
  );
}

export default App;
