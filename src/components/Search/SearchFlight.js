import React from "react";
import Axios from "axios";

export default class SearchFlight extends React.Component {
  
    state = {
    searchFlight: "",
    allFlights: []
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState(state => ({ ...state, searchFlight: value }));
  };

  handleSearch = () => {
    // compare state in a filter
  };

  componentDidMount() {
    const SERVER_URL = `http://localhost:3000/flights.json`;
    Axios.get(SERVER_URL).then(res => {
      const allFlights = res.data;
      this.setState({ allFlights });
      console.log(this.state.allFlights);
    });
  }

  render() {

//   const allFlightsReturned = this.state.allFlights.map((ele, id) => <li key={id}>{ele}</li>)

    return (
      <div>
        <h1>Search for flight</h1>
        <input onChange={this.handleChange} />
        <button onClick={this.handleSearch}>Search</button>
        <p>{this.state.searchFlight}</p>
        <ul>
            {/* {allFlightsReturned} */}
        </ul>
      </div>
    );
  }
}
