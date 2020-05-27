import React, { Component } from 'react'
import Echo from './Echo'

class Textbox extends Component {
  
  
  state = {
      text: ''
      
    }

	updateText = (text) => {
      console.log('text', text)
      this.setState(() => ({
      	 text: text
      }))
      
    }
    
    clearText = () => {
      this.clearText('')
      
    }

  render(){
    
    const { text } = this.state;
	console.log(text)
    
    
    return(<div>
    		<input 
           		type="text" 
           		placeholder="Say Something" 
           		value={text}
				onChange={(e) => this.updateText(e.target.value)} 
           
           />
            <Echo echo={this.state.text}/>
           </div>)
    
  }
  
  
  
}


export default Textbox