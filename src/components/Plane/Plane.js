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
