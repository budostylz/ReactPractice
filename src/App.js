import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetAnswer from './GetAnswer'

/*const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;*/

class App extends Component {
  
 constructor(props){//mount state
    super(props);
    const valArr = this.game();
   
    this.state = {    
      value1 : valArr[0],
      value2 : valArr[1],
      value3:  valArr[2],
      proposedAnswer: valArr[3], 
      numQuestions: valArr[4],
      numCorrect: valArr[5]
  	}
    
    //console.log('valArr', valArr)
    
    
  }
  
  game = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
    const numQuestions = 0;
    const numCorrect = 0;
    return [value1, value2, value3, proposedAnswer, numQuestions , numCorrect];
 }

 updateState = newValuesArr => {
   this.setState(currentState => ({
   		value1: newValuesArr[0],
     	value2: newValuesArr[1],
     	value3: newValuesArr[2],
     	proposedAnswer: newValuesArr[3]

   }));

 };

getAnswer = answer => {
  
  console.log('answer', answer)
  
  if(answer){
    this.setState(currentState => ({
    	numCorrect: currentState.numCorrect + 1
    })) 
  }
  
  this.setState(currentState => ({
  	numQuestions: currentState.numQuestions + 1
  })) 
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
    	  <GetAnswer 
    		state = {this.state}
    		updateState={this.updateState}
    		a={this.state.value1}
			b={this.state.value2}
			c={this.state.value3}
			d={this.state.proposedAnswer}
			numQuestions={this.state.numQuestions}
			numCorrect={this.state.numCorrect}
			answer = {this.getAnswer}
			game = {this.game}
    		/>
          
        </div>
      </div>
    );
  }
}

export default App;
