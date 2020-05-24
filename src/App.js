import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetSum from './GetSum'

/*const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;*/

class App extends Component {
  
  state = {    
    value1 : Math.floor(Math.random() * 100),
    value2 : Math.floor(Math.random() * 100),
    value3:  Math.floor(Math.random() * 100),
    proposedAnswer: 0,   
    numQuestions: 0,
    numCorrect: 0
  }

 init = () => {
	this.setState((currentState) => {
    // Important: read `state` instead of `this.state` when updating.
    
      proposedAnswer: currentState.proposedAnswer = Math.floor(Math.random() * 3) 
      + currentState.value1 + currentState.value2 + currentState.value3
    
  });
   
   
 }
  



 
  render() {
    
  
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
    	
    		<GetSum 
    			a={this.state.value1}
				b={this.state.value2}
				c={this.state.value3}
				d={this.state.proposedAnswer}
				numQuestions={this.state.numQuestions}
				numCorrect={this.state.numCorrect}
				init ={this.init}
    
    		/>
          
          </div>
          <button>True</button>
          <button>False</button>
          <p className="text">
            Your Score: 
          </p>
        </div>
      </div>
    );
  }
}

export default App;
