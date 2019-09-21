import React, { Component } from 'react';
import './App.css';

// function App() {
//   return (
//     <h1>Hello World</h1>
//   );
// }

class App extends Component {
  
  constructor() {
    super();
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.changeNumber = this.changeNumber.bind(this);


    this.title = "Tech Karo";

    this.state = {
      numb: 4,
      isStarted: false
    }
  }
  
  start() {
    console.log("BEFORE " + this.state.isStarted);
    this.setState({
      isStarted: true
    })
    console.log("AFTER " + this.state.isStarted);
  }
  
  stop() {
    this.setState({
      isStarted: false
    });
  }

  changeNumber() {
    this.setState({
      numb: parseInt(Math.random() * 10)
    })
  }
  
  render() {
    console.log("Render called again");
    return (
      <div>
        <h1>{this.state.numb}</h1>
        {
          this.state.isStarted === false ? <button onClick={this.start}>Start</button> : <button onClick={this.stop}>Stop</button>
        }
        <button onClick={this.changeNumber}>Change number</button>
      </div>
    );
  }

}

export default App;
