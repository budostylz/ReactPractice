import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GameList extends Component {
  render(){
    //console.log('GameList', this.props)

    return(<div className="row"> 
            <div className="col-lg">
            	<table className="table mt-5">
              		<thead>
                		<tr>
                  			<th scope="col">User Name</th>
                  			<th scope="col">Games Played</th> 
                		</tr>
              		</thead>
                    <tbody>
           				
           				{
           					this.props.profiles.map(profile => 
           							<tr key={profile.userId}>
           								<td>{profile.userName}</td>
           								<td>{profile.gamesPlayed}</td>
           
           							</tr>)
  						}

                    </tbody>
				</table>
            </div>
           </div>)
    
    
  }
  
  
}

GameList.propTypes = {
  profiles: PropTypes.array
  
}

export default GameList