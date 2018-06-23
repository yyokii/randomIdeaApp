import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Time from '../containers/Time'
import TimerController from '../containers/TimerController'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      words: {
        firstWord: 'Infinity',
        secondWord: 'Idea',
      },
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{this.state.words.firstWord}</div>
        <div>{this.state.words.secondWord}</div>

        <div className="container">
        <Time />
        <TimerController />
        </div>

        <div></div>
      </div>
    );
  }
}

export default App;
