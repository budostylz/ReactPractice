import React, { Component } from 'react'

class AddUser extends Component {
  

  render(){
      //console.log('AddUser props', this.props)
    return(<div type="submit" 
           	    className="btn btn-primary mt-5"
            	onClick={this.props.createProfile}>Add User to Game
		  </div>)
    
  }
  
}

export default AddUser