import React from 'react'

const ToggleButton = (props) => 
		   (<div 
			 type="submit" 
			 className="btn btn-primary mt-5"
			 onClick={props.toggleView}>
				{( props.toggleState ) 
					? 'Show Number of Games Played'
					: 'Hide Number of Games Played'}
    	
		   </div>)


export default ToggleButton