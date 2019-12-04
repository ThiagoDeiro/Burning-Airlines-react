import React from 'react';
import {Router, Link} from '@reach/router';
import './App.css';
import UserLogin from './components/UserLogin/UserLogin'
import Homepg from './components/Home/Homepg'
import SearchFlight from './components/Search/SearchFlight'
import Adminpg from './components/Admin/Adminpg'
import FlightDetails from './components/FlightDetails/FlightDetails'
import FlightSeats from'./components/FlightSeats/FlightSeats'



const Login = () =>(
  <div>
      <nav className='nav'>
        <Link to="/">Login</Link>|{" "}
        <Link to=""><button>SignUp</button></Link>
      </nav>
      <UserLogin />
  </div>
)

const Home =() =>(
  <div>
    <nav>
      <Link to="/home">Home</Link>|{" "}
      <Link to="/search">Search</Link>|{" "}
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
        <Link to="/home">Home</Link>|{" "}
        <Link to="/search">Search</Link>|{" "}
        <Link to="/">Logout</Link>
      </nav>
      <SearchFlight />
    </div>
  )
}

const Admin = () =>(
  <div>
    <nav>
      <Link to="/admin">Admin</Link>|{" "}
      <Link to="/airplanes">Planes</Link>|{" "}
      <Link to="/flights">Flights</Link>|{" "}
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
       <Home path='/home' />
       <Search path='/search'/>
       <Admin path='/admin' />
       <FlightDetails path='/flight/:id' />
     </Router>
    </div>
  );
}

export default App;
