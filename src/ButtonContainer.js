import React from 'react'
import AddUser from './AddUser'
import ToggleButton from './ToggleButton'

const ButtonContainer = props => 
		(<div className="row">
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

export default ButtonContainer;