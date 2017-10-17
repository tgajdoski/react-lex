import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lex from './lexChat';

class App extends Component {
  constructor(){
    super();
    this.state = {
      botName : 'TestBotTr',
      IdentityPoolId : 'us-east-1:45f25176-0f92-4b5d-91ea-907eef85670c',
      placeholder: 'write something',
      backgroundColor: 'white',
      height: 500,
      headerText: 'header text'
    }

  }

  render() {
    return (
      <div className="App">
          <Lex  {...this.state} />
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
      </div>
    );
  }
}

export default App;
