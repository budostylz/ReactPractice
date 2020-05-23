import React, { Component } from 'react';


  /*
  
  
  Old Solution 
  Return in App.js <Movies profiles={profiles} users ={users} movies={movies} /> 
  
  */
class Movies extends Component {
  render(){
    
<<<<<<< HEAD
    /* models
    console.log('profiles', this.props.profiles)
    console.log('users', this.props.users)
    console.log('movies', this.props.movies)
   */
    
   

    return(<div>

        {
          
          Object.values(this.props.movies).map((movie) => {
       
      			let movieName = movie.name;
      			let movieProfile = this.props.profiles.filter(favMovie => parseInt(favMovie.favoriteMovieID, 10) === movie.id);
      			let favorite = (movieProfile.length > 0) ? 'Liked By:' : 'None of the current users liked this movie' ;
      			//console.log('movie', movieName);
      			//console.log(favorite);
                //console.log('movie id', movie.id)
      				

      			return(<div key={movie.id}>
                       <h2>{movieName}</h2>
                       <p>{(movieProfile.length > 0) ? 'Liked By:' : 'None of the current users liked this movie' }</p>
                       {
                  			movieProfile.map((userProfile) =>  {
                  				let userArr = Object.values(this.props.users).filter(user => parseInt(userProfile.userID, 10) === user.id)
                                if(userArr.length > 0){
                                  	//console.log('user', userArr[0].name)
                                  	let user = userArr[0].name;
                               		return(<ul key={userProfile.id}>
                                           		<li>{user}</li>
                                           </ul>)

                                 }
                				
                
                			})
                  
                		}
                                               
                       
                     </div>)


        	})
=======

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
>>>>>>> dcd8cb56d0aa5a1608fd0afa1d58ad02e0c34ab2


        }

<<<<<<< HEAD
        </div>);
=======
        </ol>
    
    
    );
>>>>>>> dcd8cb56d0aa5a1608fd0afa1d58ad02e0c34ab2

    
  }
  
}//Movies

export default Movies;