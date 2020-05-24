import React, { Component } from 'react';
import GetSum from './GetSum'
import Score from './Score.js'

class GetAnswer extends Component {
  
  
    
    getAnswer = e => {
      const newGameArr = this.props.game();
      this.props.updateState(newGameArr);
      const correctAnswer = this.checkAnswer(e.target.name)
      this.props.answer(correctAnswer);
           
    };

	checkAnswer(selection) {
      const { value1, value2, value3, proposedAnswer } = this.props.state;
	  const correctAnswer = value1 + value2 + value3;

		return (
        	( correctAnswer === proposedAnswer && selection === 'true' ) || 
            ( correctAnswer !== proposedAnswer && selection === 'false')    
        );

      
    }
    
  
  
  render(){
    console.log('GetAnswerProps', this.props)
   	return(
      
      <div className="equation">
    	<GetSum 
      		a={this.props.a}
			b={this.props.b}
			c={this.props.c}
			d={this.props.d}

      	/>
    		
          
      
          <button onClick={this.getAnswer} name="true">True</button>
          <button onClick={this.getAnswer} name="false">False</button>
		
		  <Score
		    correct={this.props.state.numCorrect}
		    questions={this.props.state.numQuestions}
		  />

			


         
    	</div>
    
    
    ) 
  }
  
  
}

export default GetAnswer;