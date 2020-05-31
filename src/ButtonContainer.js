import React from 'react'
import AddUser from './AddUser'
import ToggleButton from './ToggleButton'
import PropTypes from 'prop-types'


const ButtonContainer = props => 
		(<div className="row">
         {console.log('ButtonContainer props', props)}
                <div className="col-sm">
                  <AddUser 
                      createProfile={props.createProfile}            
                   />
				</div>
                <div className="col-sm"></div>
                <div className="col-sm">
                  <ToggleButton 
					toggleView={props.toggleView}
					toggleState={props.toggleState}
					/>
                </div>
         </div>)

ButtonContainer.propTypes = {
  toggleState: PropTypes.boolean,
  toggleView: PropTypes.func
}

export default ButtonContainer;