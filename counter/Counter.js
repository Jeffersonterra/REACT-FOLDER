import React, { Component } from 'react'

class Counter extends Component {

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }
  decrease(){
    this.setState((prevState) => ({
        count: prevState.count - 1
      }))
  }
  decreseFive(){
    console.log('Inside decreseFive')
      this.decrease()
      this.decrease()
      this.decrease()
      this.decrease()
      this.decrease()
    }

  incrementFive() {
    console.log('Inside incrementFive')
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.incrementFive()}>Increment five</button>
        <button onClick={() => this.decrease()}>Decrease</button>
        <button onClick={() => this.decreseFive()}>Decrese five</button>
        
      </div>
    )
  }
}

export default Counter
