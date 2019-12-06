import React, { Component } from "react";
import Axios from "axios";
import Seat from "../Seat/Seat";
import "./FlightDetails.css";

export default class FlightDetails extends Component {
  state = {
    allFlights: [],
    allPlanes: [],
    flightId: "",
    flightSeatsBooked: []
  };

  async componentDidMount() {
    const SERVER_URL = `http://localhost:3000/`;
    await Axios.get(`${SERVER_URL}flights/${this.props.id}.json`).then(res => {
      const flights = res.data;
      // console.log(flights);
      this.setState({ allFlights: flights });
    });

    Axios.get(
      `${SERVER_URL}planes/${this.state.allFlights.plane_id}.json`
    ).then(res => {
      const allPlanes = res.data;
      this.setState({ allPlanes: allPlanes });
    });
  }

  handleSeatSelected = (event, row, col, index) => {
	
	if (event) {
		this.setState({
			flightSeatsBooked: [...this.state.flightSeatsBooked, { event, row, col }]
		});
	}
	if (!event) {
		const flightSeatsBooked = [...this.state.flightSeatsBooked]
		flightSeatsBooked.splice(index, 1)
		this.setState({flightSeatsBooked: flightSeatsBooked });
	}
	
  };

  render() {
    const displayPlaneRows = this.state.allPlanes.rows;
    const displayPlaneColumns = this.state.allPlanes.columns;

    let arr = [];
    for (var i = 0; i < displayPlaneRows; i++) {
      arr.push([]);
      for (var j = 0; j < displayPlaneColumns; j++) {
        arr[i].push("");
      }
    }

    const diagramRows = arr.map((r, rowIndex) => (
      <tr key={rowIndex}>
        {r.map((c, colIndex) => (
          <td key={colIndex}>
            <Seat
              seatSelected={this.handleSeatSelected}
              seatRow={rowIndex}
              seatCol={colIndex}
            />
          </td>
        ))}
      </tr>
    ));

    const displayFlightDate = this.state.allFlights.date;
    const displayFlightNumber = this.state.allFlights.flight_number;
    const displayFlightOrigin = this.state.allFlights.origin;
    const displayFlightDestination = this.state.allFlights.destination;
    const displayPlaneNumber = this.state.allPlanes.name;

    let seatSelected;
	let youSelected;
    if (this.state.flightSeatsBooked.length > 0) {
		youSelected = 'You have selected: '
		seatSelected = this.state.flightSeatsBooked.map((ele, index) => (
        <span key={index}>
          {ele.col}
          {ele.row}{" "}
        </span>
      ));
    }

    return (
      <div>
        <div className="flightDisplay">
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
            {displayPlaneNumber}
          </div>
        </div>
        <h3>Select Your Seat</h3>
        <div className="flightSeats">
          <table className="tableSeats">
            <tbody>{diagramRows}</tbody>
          </table>
        </div>
        <div>{youSelected} {seatSelected}</div>
      </div>
    );
  }
}
