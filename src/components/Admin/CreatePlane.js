import React from 'react';
import Axios from 'axios';
import {Redirect} from '@reach/router';

 class CreatePlane extends React.Component{
    state = {
        newName: '',
        newRow: 0,
        newCol: 0,
        planeCreated: false
    }

    handleName = event => {
        const value = event.target.value;
        this.setState(state => ({ ...state, newName: value }));
    };

    handleRow = event => {
    const value = event.target.value;
    this.setState(state => ({ ...state, newRow: value }));
    };

    handleCol = event => {
        const value = event.target.value;
        this.setState(state => ({ ...state, newCol: value }));
    };

    handleCreate = (()=>{
        const data = {
            name: this.state.newName,
            rows: this.state.newRow,
            columns: this.state.newCol
            }

        Axios.post('http://localhost:3000/planes.json', data, {headers: {
            'Content-Type': 'application/json',
       },})
        .then(res => {
            if(res.status === 200){
                this.setState({ planeCreated: true });
            }
        })
    })

    render() {
        //if plane created state is true
        // redirect to plane list
        if (this.planeCreated === true){
            return <Redirect to={{pathename: "/planes"}}/>;
        }
        return(
            <div>
                <h3>Plane Name</h3>
                <input onChange={this.handleName} placeholder="Enter Name"/>

                <h3>Rows</h3>
                <input onChange={this.handleRow} type="number" placeholder="Rows"/>

                <h3>Columns</h3>
                <input onChange={this.handleCol} type="number" placeholder="Rows"/>
                
                <br></br>
                
                <button onClick={this.handleCreate}>Create</button>
            </div>
        )
    }
}

export default CreatePlane