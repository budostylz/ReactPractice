import React from 'react';

const MovieCard = (props) => (
 
  <li key={props.movieInfo.id}> 
	 <h2>{props.movieInfo.name}</h2>
     <h3>Liked By:</h3>

 	 {!props.usersWhoLikedMovie || props.usersWhoLikedMovie.length === 0 ? (
          <p>None of the current users liked this movie.</p>
        ) : (
          <ul>
            {props.usersWhoLikedMovie &&
              props.usersWhoLikedMovie.map(userId => {
                return (
                  <li key={userId}>
                    <p>{props.users[userId].name}</p>
                  </li>
                );
              })}
          </ul>
        )}
  </li>);



export default MovieCard;
