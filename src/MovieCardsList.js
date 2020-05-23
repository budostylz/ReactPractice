import React, { Component } from 'react';
import MovieCard from './MovieCard';

const MovieCardsList = (props) => {

  	const usersByMovie = {};
  
  	props.profiles.forEach(profile => {
      const movieID = profile.favoriteMovieID;
      
      if (usersByMovie[movieID]) {
        usersByMovie[movieID].push(profile.userID);
      } else {
        usersByMovie[movieID] = [profile.userID];
      }
    	
    });
  
   const movieCards = Object.keys(props.movies).map(id => (
   		<MovieCard
        key={id}
        users={props.users}
        usersWhoLikedMovie={usersByMovie[id]}
        movieInfo={props.movies[id]}
      />
   
   ));
   
   return(<ul> { movieCards } </ul>)
      
    

}

	




class MovieCardsList2 extends Component {
  render() {
    /*
  Destructuring via ES6. We're getting the profiles, users, and movies properties
  off of the pros passed into this presentational component. If you need a refresher on this syntax, check
  out this course: https://www.udacity.com/course/es6-javascript-improved--ud356
  */

    const { profiles, users, movies } = this.props;
    const usersByMovie = {};

    profiles.forEach(profile => {
      const movieID = profile.favoriteMovieID;
     
      if (usersByMovie[movieID]) {
        usersByMovie[movieID].push(profile.userID);
      } else {
        usersByMovie[movieID] = [profile.userID];
      }
    });

    const movieCards = Object.keys(movies).map(id => (
      <MovieCard
        key={id}
        users={users}
        usersWhoLikedMovie={usersByMovie[id]}
        movieInfo={movies[id]}
      />
    ));

    /*
    Return JSX
    */
    return <ul>{movieCards}</ul>;
  }
}

export default MovieCardsList;
