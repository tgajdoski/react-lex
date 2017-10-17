import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lex from './lexChat';

Lex.botName = 'order-flowers';
Lex.IdentityPoolId = 'asdasdasdasd';
Lex.placeholder = 'write someting to start';
Lex.backgroundColor = 'white';
Lex.height = 430;
Lex.headerText = 'VIDI STO HEADER IMAME';

class App extends Component {
  constructor(){
    super();
    this.state = {
      onePromonState : "asdasdas",
    }

  }

  render() {
    return (
      <div className="App">
          <Lex />>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       
         {/*<h1>Amazon Lex - react</h1>
	      <div id="conversation"></div>
	        <form id="chatform" >
		        <input type="text" id="wisdom" size="80" value="" placeholder="I need a hotel room"></input>
	        </form> */}
      </div>
    );
  }
}

export default App;
