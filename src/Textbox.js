import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Textbox extends Component {
  
  
  determineSubmit = (e) => {   
    let textLength = e.target.value.trim().length;
    let submitButton = e.target.parentElement.childNodes[1].firstChild;

    if(textLength > 0){
      console.log('enable submit')
      submitButton.disabled = false
    }else if(textLength === 0){
      console.log('disable submit')
      submitButton.disabled = this.props.isDisabled();
    }
    
    
  }
  
  render(){
    
    //console.log('Textbox props', this.props)

    return(
    	<input type="text" 
      		   className="form-control" 
               placeholder="Enter your message..." 
         	   onChange={this.determineSubmit}
      
        />
    
    )
    
  }
  
}

Textbox.propTypes = {
  owner: PropTypes.string.isRequired,
  isDisabled: PropTypes.func.isRequired
  
}

export default Textbox