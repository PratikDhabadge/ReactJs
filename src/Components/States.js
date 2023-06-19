import React, {Component} from 'react';
import './States.css'

class Message extends Component{
    constructor(){
        super()
        this.state={
            message: 'Welcome Along!'
        }
    }
    
    changeMessage(){
        this.setState({
            message: 'Thank you for your contribution'
        })
    }
    render() {
       const buttonTitle='Subscribe';
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button id='b1' onClick={() => this.changeMessage()}>{buttonTitle} </button>
            </div>
        )
    } 
}

export default Message