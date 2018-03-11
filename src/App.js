import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	constructor(props){
		super(props)
		this.state = {
			side1: 0,
			side2: 0,
      side3: 0,
      result: ''
		}
  }

  handleChange = e => this.setState({ [e.target.name]: parseInt(e.target.value,10)})

  handdleSubmit = e => {
    e.preventDefault()
    const result = this.checkTriangle()
    this.setState({ result })
  }

  checkTriangle = () => {
    const { side1, side2, side3 } = this.state;
    if(side1 === 0 && side2 === 0 && side3 === 0) {
      return 'this is not triangle'
    } else if(side1 === side2 && side2 === side3) {
      return 'equilateral triangle'
    } else if(side1 === side2 || side2 === side3 || side1 === side3) {  
      return 'isosceles triangle'
    } else if(this.isRightTriangle(side1, side2, side3)) {
      return 'right triangle'
    } else return 'scalene triangle'
  }

  isRightTriangle = (side1, side2, side3) => {
    const a = Math.pow(side1, 2)
    const b = Math.pow(side2, 2)
    const c = Math.pow(side3, 2)

    if((a + b === c) || (a + c === b) || (b + c === a)) {
      return true
    } else return false
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form onSubmit={this.handdleSubmit}>
          side1: <input type="number" name="side1" onChange={this.handleChange} required/>
          side2: <input type="number" name="side2" onChange={this.handleChange} required/>
          side3: <input type="number" name="side3" onChange={this.handleChange} required/>
          <input type="submit" value="Submit"/>
        </form>
        {this.state.result}
      </div>
    );
  }
}

export default App;
