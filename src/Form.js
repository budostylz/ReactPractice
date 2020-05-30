import React, { Component } from 'react'
import Profile from './Profile'
import ButtonContainer from './ButtonContainer'
import GamesPlayed from './GamesPlayed'
import GameList from './GameList'

class Form extends Component{
  
  state = { 	
    profiles: [],
    toggleView: false
  }

createProfile = () => {
  
   //observe state
  //this.setState(currentState => (console.log([...currentState.profiles])))
  
  //get textbox values
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let userName = document.getElementById('userName').value;
  
  //set profile
  const aProfile = {	userId: this.state.profiles.length + 1,
             		    firstName: firstName,
             	        lastName: lastName,
                        userName: userName,
             	        gamesPlayed: 0 
                     }
  
  //validate
  let validateTextboxes = this.validateTextboxes(firstName, lastName, userName)
  let validateUserName = this.validateUserName(userName)
  
  console.log('validateTextboxes', validateTextboxes)
  console.log('validateUserName', validateUserName)
  
  if(validateTextboxes && validateUserName){
    
    this.setState(currentState => ({
          profiles:[...currentState.profiles, aProfile]

  	}))
    
    
   //reset textbox values
   document.getElementById('firstName').value = '';
   document.getElementById('lastName').value = '';
   document.getElementById('userName').value = '';
    
    
  }

 
  
  
  
}

validateTextboxes = (firstName, lastName, userName) => { 

 
  let checkTextBoxes = (firstName.trim().length > 0 && lastName.trim().length > 0 && userName.trim().length > 0)

  
  
  if(checkTextBoxes){
      return true  
  }else{
     alert('PLEASE COMPLETE ALL PROFILE AREAS')
     return false
  }
  
  
}

validateUserName = (userName) => {

  
  if( this.state.profiles.length > 0){

    let checkUserName = this.state.profiles.filter(un => un.userName.toLowerCase() === userName.toLowerCase())
  
    if( checkUserName.length  > 0 ){
      alert('USER NAME IS TAKEN');
      return false  ;   
    }else if( checkUserName.length  === 0 ){
      return true;
    }
    
  }
  
  
  return true;

}



toggleView = () => {
  
    //observe state
  //this.setState(currentState => (console.log(currentState.toggleView)))
  
  const newToggleState = (this.state.toggleView) ? false : true;
    
  this.setState(currentState => ({
  	toggleView: newToggleState
  
  }))
  

  
}


  render(){
    

   console.log('state', this.state)

    return(<form>
            
            <div className="container">
            
              <Profile />
           	  <ButtonContainer 
           		createProfile={this.createProfile}
				toggleView={this.toggleView}
				toggleState={this.state.toggleView}
				/>
				{(this.state.toggleView) 
					?  <GameList profiles={this.state.profiles}/> 
					:  <GamesPlayed /> }
              
			 
            
		    </div>
         </form>)
  }
  
  
}

export default Form