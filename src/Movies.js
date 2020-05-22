import React, { Component } from 'react';


  /*
  
  
  Old Solution 
  Return in App.js <Movies profiles={profiles} users ={users} movies={movies} /> 
  
  */
class Movies extends Component {
  render(){
    

    return(
      
    	<ol>
      
        {
          
          this.props.profiles.map((profile) => {
          let user = this.props.users[profile.id].name;
          let movie = this.props.movies[profile.favoriteMovieID].name;

          //`${userName}\'s favorite movie is "${favMovieName}."`
          //console.log(`${user}\'s favorite movie is "${movie}."` );
      
      		return(
              <li key={profile.id}> {`${user}\'s favorite movie is "${movie}."`} </li>
            
            )
      		

        })


        }

        </ol>
    
    
    );

    
  }
  
}//Movies

export default Movies;