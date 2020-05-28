import React, { Component } from 'react'

class AddButton extends Component {
  
  inputIsEmpty = () => {
    return this.props.value === '';
  };
  
  render(){
    //console.log('AddButton props', this.props)

    return(<button disabled={this.inputIsEmpty()}>Add</button>)
  
  }
  

  
}


export default AddButton;
