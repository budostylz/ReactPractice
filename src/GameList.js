import React, { Component } from 'react'

class GameList extends Component {
  render(){
    console.log('GameList', this.props)
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
                      <tr>
                        <td>user1</td>
                        <td>0</td>    
                      </tr>
                       
                    </tbody>
				</table>
            </div>
           </div>)
    
    
  }
  
  
}

export default GameList