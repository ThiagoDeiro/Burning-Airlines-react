import React, { Component } from 'react'
import Axios from 'axios'


export default class FlightDetails extends Component {
    
    state = {
        allFlights: [],
        allPlanes: [],
        flightId: ''
      };

    async componentDidMount() {

        const SERVER_URL = `http://localhost:3000/`;
        await Axios.get(`${SERVER_URL}flights/${this.props.id}.json`).then(res => {
          const flights = res.data;
          console.log(flights)
          this.setState({ allFlights: [flights] });
        });
    
        Axios.get(`${SERVER_URL}planes/${this.state.allFlights[0].plane_id}.json`).then(res => { // Trying this to retrive the plane name
            const allPlanes = res.data;
            this.setState({ allPlanes: [allPlanes] }); 
            // console.log(allPlanes)
        });
    
      }
      // seats logic ***************************************************************************************
    // seatsHnadler = () => {
    //   let planeData = this.state.allPlanes
    //   const mapping = planeData.map((e) => {
    //     return e.rows
    //   })

    // }
    
    
    render() {
      const displayPlaneRows = this.state.allPlanes.map((ele, id) => {return (ele.rows)})
      const displayPlaneColumns = this.state.allPlanes.map((ele, id) => {return (ele.columns)})
      let arr = []
      for (var i=0; i < displayPlaneRows; i++){
        arr.push([])
      for(var j=0; j < displayPlaneColumns; j++){
        arr[i].push('x')
      }
    }
    const diagramRows = arr.map((r, rowIndex) => <tr key={ rowIndex}>{r.map((c, colIndex) =><td key={colIndex}> <span>[]</span></td>)}</tr>)


        // console.log(this.state.allFlights)
        // console.log(this.state.allPlanes)
        // console.log(this.getID()
        const displayFlightDate = this.state.allFlights.map((ele, id) => <p key={id}>{ele.date}</p>) 
        const displayFlightNumber = this.state.allFlights.map((ele, id) => <p key={id}>{ele.flight_number}</p>)
        const displayFlightOrigin = this.state.allFlights.map((ele, id) => <p key={id}>{ele.origin}</p>)
        const displayFlightDestination = this.state.allFlights.map((ele, id) => <p key={id}>{ele.destination}</p>)
        const displayPlaneNumber = this.state.allPlanes.map((ele, id) => <p key={id}>{ele.name}</p>)
       
        console.log(displayPlaneRows)
        console.log(displayPlaneColumns)
       
        console.log(arr)
        return (
            <div>
                {displayFlightDate}
                {displayFlightNumber}
                {displayFlightOrigin}
                {displayFlightDestination}
                {displayPlaneNumber}

                <table>
                  <tbody> 
                   {diagramRows}

                   
                   </tbody>
                </table>
                
            </div>

           
        )
    }
}
