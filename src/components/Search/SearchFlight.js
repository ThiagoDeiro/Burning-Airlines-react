import React from 'react'
import Axios from 'axios'
export default class SearchFlight extends React.Component{

    state={
        searchFlight:[],
        flightText: []
    }

    handleChange =(event)=>{
        const value = event.target.value;
        this.setState((state) =>({...state, searchFlight: value}))
    }

    handleSearch = () => {
        console.log('hello')
        const self = this;
        Axios.get(`http://localhost:3000/flights/${this.state.searchFlight}.json`)
        .then(response => self.setState((state) => ({...state, flightText: response.data.origin})))
        
    }

    // [{"id":1,"flight_number":123,"date":"2019-11-30","origin":"Sydney","destination":"Spain","plane_id":1,"created_at":"2019-11-30T04:29:31.076Z","updated_at":"2019-11-30T04:29:31.076Z","url":"http://localhost:3000/flights/1.json"}]
    
    render()
        {
        return(
            <div>
                <h1>Search for flight</h1>
                <input onChange={this.handleChange} />
                <button onClick={this.handleSearch}>Search</button>
                <p>{this.state.flight}</p>
                <p>{this.state.flightText}</p>
                <p>{this.props.thisIsaProp}</p>
                
            </div>
        )
    }
}