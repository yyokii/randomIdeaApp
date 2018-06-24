import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const words = ['朝', 'プログラミング', '革命', 'カーテン', 'ボール'];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      intervalId: 0,
      running: true,
      firstWord: 'Infinity',
      secondWord: 'Idea',
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.state.running) {
      console.log('ストップ');
      clearInterval(this.state.intervalId)
    }else {
      console.log('再スタート');
      const intervalId = setInterval(() => {
        var firstWord = words[Math.floor(Math.random() * words.length)];
        var secondWord =  words[Math.floor(Math.random() * words.length)];
        this.setState({ intervalId, firstWord, secondWord });
      }, 3000)
    }

    const running = ! this.state.running
    this.setState({ running })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>{this.state.firstWord}</div>
        <div>{this.state.secondWord}</div>
        <button onClick={this.onClick}>click!</button>
      </div>
    );
  }

  componentDidMount() {
    // 描画が成功して、DOMにアクセス可能になる
    const intervalId = setInterval(() => {
      var firstWord = words[Math.floor(Math.random() * words.length)];
      var secondWord =  words[Math.floor(Math.random() * words.length)];
      this.setState({ intervalId, firstWord, secondWord });
    }, 3000)

  }

}

export default App;
