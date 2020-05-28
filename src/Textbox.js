import React from 'react'

const Textbox = (props) => (
  
  <div>
  
  <input
     type="text"
     placeholder="Enter New Item"
     value={props.value}
     onChange={props.handleChange}
   />
  
  
  </div>)
 
export default Textbox