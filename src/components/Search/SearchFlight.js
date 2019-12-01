import React from "react";
import Axios from "axios";
import './SearchFlight.css'

export default class SearchFlight extends React.Component {
  
    state = {
    searchFlightOrigin: "",
    searchFlightDestination: "",
    allFlights: []
  };

  handleFlightOrigin = event => {
    const value = event.target.value;
    this.setState(state => ({ ...state, searchFlightOrigin: value }));
  };

  handleFlightDestination = event => { // same as above but for destination. 
    const value = event.target.value;
    this.setState(state => ({ ...state, searchFlightDestination: value }));
  };

  handleSearch = () => {
    let searchFlightOrigin = this.state.searchFlightOrigin; //.toLowerCase() when we create planes in the DB we should make them all in lowercase then transform the input.
    let searchFlightDestination = this.state.searchFlightDestination; //.toLowerCase()

    return this.state.allFlights.filter(flight => flight.origin === searchFlightOrigin && flight.destination === searchFlightDestination );

  };

  componentDidMount() {
    const SERVER_URL = `http://localhost:3000/`;

    Axios.get(`${SERVER_URL}flights.json`).then(res => {
      const allFlights = res.data;
      this.setState({ allFlights });
    });
    Axios.get(`${SERVER_URL}planes.json`).then(res => { // Trying this to retrive the plane name
        const allPlanes = res.data;
        this.setState({ allPlanes });
    });

  }

  render() {

    const allFlightsReturned = this.handleSearch(); // Checks on every key stroke. 
    console.log(allFlightsReturned)

    const displayFlightDate = allFlightsReturned.map((ele, id) => <p key={id}>{ele.date}</p>) 
    const displayFlightNumber = allFlightsReturned.map((ele, id) => <p key={id}>{ele.flight_number}</p>)
    const displayFlightOrigin = allFlightsReturned.map((ele, id) => <p key={id}>{ele.origin}</p>)
    const displayFlightDestination = allFlightsReturned.map((ele, id) => <p key={id}>{ele.destination}</p>)
    const displayFlightPlane = allFlightsReturned.map((ele, id) => <p key={id}>{ele.plane}</p>)

    return (
      <div>
        <h1>Search Flights</h1>
        <input onChange={this.handleFlightOrigin} placeholder='From' />
        <input onChange={this.handleFlightDestination} placeholder='To' />
        {/* <button onClick={this.handleSearch}>Search</button> */}
        {/* <p>{this.state.searchFlight}</p> */}
        <div className='flightDisplay'>
            <div>
                <h5>Date</h5>
                {displayFlightDate}
            </div>
            <div>
                <h5>Flight</h5>
                {displayFlightNumber}
            </div>
            <div>
                <h5>Origin</h5>
                {displayFlightOrigin}
            </div>
            <div>
                <h5>Destination</h5>
                {displayFlightDestination}
            </div>
            <div>
                <h5>Plane</h5>
                {displayFlightPlane}
            </div>
        </div>

      </div>
    );
  }
}
