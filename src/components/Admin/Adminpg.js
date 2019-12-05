import React from 'react'
<<<<<<< HEAD
import {Link} from '@reach/router';
=======
>>>>>>> ff1565467eb40fc6ff834f8a9b901c91dc99176d

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