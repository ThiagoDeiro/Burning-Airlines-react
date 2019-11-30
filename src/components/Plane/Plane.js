import React, { Component } from 'react'
import Axios from 'axios'
export default class Plane extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            airplane: [], 
            airplaneText:''}
       
    }

    componentDidMount() {
        const SERVER_URL = `http://localhost:3000/planes.json`
        Axios.get(SERVER_URL) //this? 
            .then(res => {
                const airplane = res.data;
                this.setState({airplane})
            })    
        
        // .then(response => self.setState((state) => ({...state, airplane: response.data})) ); //results => console.log(JSON.stringify(results.data))
            // console.log(this.state.airplane)
    }

    
    
    render() {

    const name = this.state.airplane.map((e, id)  => <li key={id}>{e.name}</li>)
        
        return (
            <div>
                <ul>
                 {name}
                </ul>
            </div>
        )
    }
}
