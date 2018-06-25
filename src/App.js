import React, { Component } from 'react';
import './App.css';
import EurekaModal from './components/EurekaModal';
import WordPaper from './components/WordPaper';
import AppBar from './components/AppBar';
import { wordList } from './WordList';

var words = wordList;
var intervalId = 0;

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

  onClick() {
    if (this.state.running) {
      this.stopTimer();
    }else {
      this.restartTimer();
    }
  }

  stopTimer() {
    console.log('ストップ');
    clearInterval(this.state.intervalId)
    this.setState({ running:false })
  }

  restartTimer() {
    console.log('再スタート');
    intervalId = setInterval(() => {
      var firstWord = words[Math.floor(Math.random() * words.length)];
      var secondWord =  words[Math.floor(Math.random() * words.length)];
      this.setState({ firstWord, secondWord });
    }, 3000)
    this.setState({ intervalId });
    this.setState({ running:true })
  }

  render() {
    var firstWord = this.state.firstWord;
    var secondWord = this.state.secondWord;

    return (
      <div className="App">
        <AppBar />

        <WordPaper word={firstWord}/>
        <WordPaper word={secondWord}/>

        <div className="Eureka-Button">
          <EurekaModal
            firstWord={firstWord}
            secondWord={secondWord}
            onClickModal={() => this.stopTimer()}
            onCloseModal={() => this.restartTimer()}
          />
        </div>
        <footer className="Footer">
          <p>COPYRIGHT &#169; yyokii ALL RIGHTS RESERVED.</p>
        </footer>
      </div>
    );
  }

  componentDidMount() {
    // 描画が成功して、DOMにアクセス可能になる
    intervalId = setInterval(() => {
      var firstWord = words[Math.floor(Math.random() * words.length)];
      var secondWord =  words[Math.floor(Math.random() * words.length)];
      this.setState({ firstWord, secondWord });
    }, 3000)
    this.setState({ intervalId });
  }
}

export default App;
