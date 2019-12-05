import React from 'react'
import Axios from 'axios'

export default class CreatePlane extends React.Component{
    state = {
        newName: '',
        newRow: 0,
        newCol: 0
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
        
        Axios.post('http://localhost:3000/planes', {
            name: this.state.newName,
            rows: this.state.newRow,
            columns: this.state.newCol
            });
    })

    render() {
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