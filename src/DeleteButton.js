import React, { Component } from 'react'

class DeleteButton extends Component{
  
  noItemsFound = () => {
    return this.props.itemLength === 0;
  };

  
  render(){
    //console.log('delete button', this.props)
    return(<button 
           	onClick={this.props.delete} 
			disabled={this.noItemsFound()}>
            Delete Last Item
          </button>)
    
    
  }
  
  
}

export default DeleteButton