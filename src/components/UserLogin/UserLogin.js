import React from 'react'
import Axios from 'axios'
import './UserLogin.css'

export default class UserLogin extends React.Component{
    
    state = {
        allUsers: [],
        userName: '',
        userEmail: ''
    }

    componentDidMount() {
        const SERVER_URL = `http://localhost:3000/`;
        Axios.get(`${SERVER_URL}users.json`).then(res => {
          const allUsers = res.data;
          this.setState({ allUsers });
        });
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        const users = this.state.allUsers
        const currentUser = this.state.userName
        const currentEmail = this.state.userEmail
        let isAUser = users.find(user => user.name === currentUser && user.email === currentEmail);
        // console.log(isAUser.is_admin)
        if (!isAUser.is_admin) window.location.href = "http://localhost:3001/home";
        if (isAUser.is_admin) window.location.href = "http://localhost:3001/admin";
    }
    handleChangeName = (event) => {
        this.setState({userName: event.target.value})
    }
    handleChangeEmail = (event) => {
        this.setState({userEmail: event.target.value})
    }


    render(){
        return(
            <div className='loginBackgroundImage'>
                <div className='loginContainer'>
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                        <p>Name</p>
                            <input 
                            type='text'
                            // value={this.state.userName}
                            onChange={this.handleChangeName}/>
                        </div> 
                        <div>
                        <p>Email</p>
                            <input 
                            type='text'
                            // value={this.state.userEmail}
                            onChange={this.handleChangeEmail}/>
                        </div>
                        <input type="submit" value="Login" /> 
                    </form>
                </div>
                <div className='hiring'>
                    <h1>Now Hiring Pilots</h1>
                    <h3>no experience needed</h3>
                </div>

            </div>
        )
    }
}