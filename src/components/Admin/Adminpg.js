import React from 'react'
import {Link} from '@reach/router';

export default class Adminpg extends React.Component{

    render(){
        return(
            <div>
                <p>Admin info</p>
                <Link to="/createPlane"><button>Create Plane</button></Link>
                <p>Or</p>
                <Link to="/createFlight"><button>Create Flight</button></Link>
            </div>
        )
    }
}