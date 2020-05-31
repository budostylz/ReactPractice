import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SendButton extends Component{
  
  determineSubmit = (e) => {    
     e.preventDefault();//disable default requests
     let textLength = e.target.parentElement.parentElement.firstChild.value.trim().length;
    
    if(textLength > 0){
      e.target.disabled = false
      this.sendMessage(e);
    }else if(textLength === 0){
      e.target.disabled = this.props.disableButton();
    }

  }
  
  sendMessage = (e) => {
    let owner = this.props.owner;
    let textMessage = e.target.parentElement.parentElement.firstChild.value;
    this.createMessage(owner, textMessage)     
   }

 createMessage = (owner, textMessage) => {   
   let message =  { username: owner, text: textMessage }
   this.props.appendMessage(message); 
 }

  render(){   
    //console.log('SendButton props', this.props)  
    return(<button
           		className="btn submit-button" 
				onClick={this.determineSubmit}
  
  			>
                    SEND
           </button>)
    
    
  }

  
}

SendButton.propTypes = {
  owner: PropTypes.string.isRequired,
  disableButton: PropTypes.func,
  appendMessage: PropTypes.func
  
}

export default SendButton

