import React, { Component } from 'react';

class Message extends Component {
    constructor() {
super()
this.state={
    message: 'Welcome visitor' 
    
    }
    }
    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    changeMessage2() {
        this.setState({
            message: 'Thank you for following'
        })
    }
render(){
    return (<div>

    <h1>
    {this.state.message}

    </h1>
    <button onClick={()=> this.changeMessage()}>Subscribe</button>
    <button onClick={()=> this.changeMessage2()}>Follow</button>
   
    </div>
    )
}

}
export default Message;