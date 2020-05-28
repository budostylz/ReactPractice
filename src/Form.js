import React, { Component } from 'react'
import Textbox from './Textbox'
import AddButton from './AddButton'
import DeleteButton from './DeleteButton'
import Items from './Items'

class Form extends Component{
  
   state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };



  
  render(){
  	return(
      <div>
       <h2>Shopping List</h2>
       <form onSubmit={this.addItem}>
            <Textbox
				value={this.state.value}
				handleChange={this.handleChange}
			/>
           <AddButton 
				value={this.state.value}
			/>
          </form>

			<DeleteButton 
				itemsLength={this.state.items.length}
				delete={this.deleteLastItem}
			/>

			<Items 
			  items={this.state.items}
			/>
          

          
      </div>
    
    
    )
  
  }
  
  
}



export default Form