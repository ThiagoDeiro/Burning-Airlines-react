import React from 'react';
import Axios from 'axios'

export default class FlightSeats extends React.Component{
    state = {
        allFlights: [],
        allPlanes: [],
        flightId: ''
      };

    async componentDidMount() {

        const SERVER_URL = `http://localhost:3000/`;
        await Axios.get(`${SERVER_URL}flights/${this.props.id}/seats.json`).then(res => {
          const flights = res.data;
          console.log(flights)
          this.setState({ allFlights: [flights] });
        });
    
        Axios.get(`${SERVER_URL}planes/${this.state.allFlights[0].plane_id}.json`).then(res => { // Trying this to retrive the plane name
            const allPlanes = res.data.rows;
            this.setState({ allPlanes: [allPlanes] }); 
            console.log(allPlanes)
        });
    
      }
    
    
    render() { 
           return (
           <div>
               hello
           </div>
        )
    }
}