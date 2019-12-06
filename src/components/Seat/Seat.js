import React, { Component } from 'react'
import './Seat.css'

export default class Seat extends Component {
   
    state = {
        seat: false,
    }
   
    handleChange = () => {
        this.props.seatSelected(!this.state.seat, this.props.seatRow +1, this.changeColToLetter(this.props.seatCol))
        !this.state.seat ? this.setState({seat: true}) : this.setState({seat: false}) 
    }

  
    changeColToLetter = (col) => {
        if (col === 0) return 'A'
        if (col === 1) return 'B'
        if (col === 2) return 'C'
        if (col === 3) return 'D'
        if (col === 4) return 'E'
        if (col === 5) return 'F'
    }

    render() {
        
        const style = {
            backgroundColor: !this.state.seat ? '#8A9998' : '#F2D64B'
        }

        return (
            <React.Fragment>
                <div
                    className='seat'
                    style={style}
                    onClick={this.handleChange}>
                        {this.changeColToLetter(this.props.seatCol)}{this.props.seatRow + 1}
                </div>
            </React.Fragment>
            
        )
    }
}
