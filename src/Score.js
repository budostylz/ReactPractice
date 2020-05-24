import React from 'react';

const Score = props => {
  
  return(<p className="text">
         
         	Your Score: {props.correct}/{props.questions}
         
         </p>);
  
  
}

export default Score;