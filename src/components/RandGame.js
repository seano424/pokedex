import React, { Component } from 'react'

export default class RandGame extends Component {
  state = {
    number: 1
  }

  handleClick = (e) => {
    const rando = Math.floor(Math.random() * 10)
    this.setState({ number: rando })
  }
  
  render() {
    return (
      <div>
        <h1>Number is {this.state.number}</h1>
        {this.state.number === 7 ? <h4>You win!!!</h4> : <button onClick={this.handleClick}>Click me!!!</button>}
      </div>
    )
  }
}
