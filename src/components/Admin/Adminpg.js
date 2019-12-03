import React from 'react'
import {Router, Link} from '@reach/router';

export default class Adminpg extends React.Component{
    render(){
        return(
            <div>
                <p>Admin info</p>
                <a href="http://localhost:3000/planes/new"><button>Create Plane</button></a>
                <p>Or</p>
                <a href="http://localhost:3000/flights/new"><button>Create Flight</button></a>
            </div>
        )
    }
}