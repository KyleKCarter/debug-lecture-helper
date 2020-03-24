import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 0,
      word: 'hello'
    }
  }

  componentDidMount() {
    //showing that the component did mount actually ran
    console.log('componentDidMount method invoked...')
    const incrementTimer = () => this.setState({ timer: this.state.timer + 1 })
    setInterval(incrementTimer, 1000)
  }


  render() {
    //Displaying what's in state in the console
    console.log(this.state.word)
    return (
      <div className="App">
        <p>How many seconds have you been on my app?</p>
        <p>{this.state.timer} seconds</p>
      </div>
    );
  }
}

export default App;
