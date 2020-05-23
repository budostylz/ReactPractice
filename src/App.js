import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import Movies from './Movies'

/*
Display a list of movies where each movie contains a list of users that favorited it.
=======
import './App.css';
import logo from './logo.svg';
import Movies from './Movies';

/*
Use React and the data below to display a list of users alongside their favorite movies.
>>>>>>> dcd8cb56d0aa5a1608fd0afa1d58ad02e0c34ab2

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
<<<<<<< HEAD
    name: 'Jane Jones',
=======
    name: 'Jane Cruz',
>>>>>>> dcd8cb56d0aa5a1608fd0afa1d58ad02e0c34ab2
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
<<<<<<< HEAD
    id: 3,
=======
    id: 4,
>>>>>>> dcd8cb56d0aa5a1608fd0afa1d58ad02e0c34ab2
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
<<<<<<< HEAD
    name: 'Planet Earth',
=======
    name: 'Planet Earth 1',
>>>>>>> dcd8cb56d0aa5a1608fd0afa1d58ad02e0c34ab2
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
=======
      <div>
>>>>>>> dcd8cb56d0aa5a1608fd0afa1d58ad02e0c34ab2
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
<<<<<<< HEAD
        <h2>How Popular is Your Favorite Movie?</h2>
		<Movies profiles={profiles} users={users} movies={movies}/>

=======
        <h2>Favorite Movies</h2>
		<Movies profiles={profiles} users ={users} movies={movies} /> 

      
		
>>>>>>> dcd8cb56d0aa5a1608fd0afa1d58ad02e0c34ab2
		
      </div>
    );
  }
}

export default App;
