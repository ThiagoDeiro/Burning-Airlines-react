import React from 'react';
import {Router, Link} from '@reach/router';
import './App.css';
import UserLogin from './components/UserLogin/UserLogin';
import Homepg from './components/Home/Homepg';
import SearchFlight from './components/Search/SearchFlight';
import Adminpg from './components/Admin/Adminpg';
import CreatePlane from './components/Admin/CreatePlane';
import FlightDetails from './components/FlightDetails/FlightDetails'



const Login = () =>(
  <div>
      <UserLogin />
  </div>
)

const Home =() =>(
  <div>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/">Logout</Link>
    </nav>
    <Homepg />
  </div>
)

const Search =() => {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/search">Search</Link>
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
      <Link to="/planes">Planes</Link>|{" "}
      <Link to="/flights">Flights</Link>|{" "}
      <Link to="/">Logout</Link>
    </nav>
    <Adminpg /> 
  </div>
)

const Create = () =>(
  <div>
    <nav>
      <Link to="/admin">Admin</Link>|{" "}
      <Link to="/planes">Planes</Link>|{" "}
      <Link to="/flights">Flights</Link>|{" "}
      <Link to="/">Logout</Link>
    </nav>
    <CreatePlane />
  </div>
)

const Planes = () =>(
  <div>
    <nav>
      <Link to="/admin">Admin</Link>|{" "}
      <Link to="/planes">Planes</Link>|{" "}
      <Link to="/flights">Flights</Link>|{" "}
      <Link to="/">Logout</Link>
    </nav>
    <Planes />
  </div>
)


function App() {
  return (
    <div className="App">
     <Router>
       <Login path="/"/>
       <Home path='/home' />
       <Search path='/search'/>
       <Admin path='/admin'/>
       <Create path="/createPlane"/>
       <Planes path="/planes"/>
       <FlightDetails path='/flight/:id' />
     </Router>
    </div>
  );
}

export default App;
