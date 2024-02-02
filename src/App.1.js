import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Movies } from './components/Movies'
import { DisplayBoard } from './components/DisplayBoard'
import CreateMovie from './components/CreateMovie'
import { getAllMovies, createMovie } from './services/MovieServiceService'
//----------------
import { Movies } from './components/Movies'
import { getAllMovies, createMovie } from './services/MovieService'

function App() {

  const [movie, setMovie] = movieState({})
  const [Movies, setmovies] = moviesState([])
  const [numberOfMovies, setNumberOfMovies] = movieState(0)

  //--------------

  const [movies, setMovies] = movieState([])


  const movieCreate = (e) => {

      createMovie(movie)
        .then(response => {
          console.log(response);
          setNumberOfUsers(numberOfUsers+1)
      });
  }

  const fetchAllMovies = () => {
    getAllMovies()
      .then(movies => {
        console.log(movies)
        setMovies(movies);
        setNumberOfMovies(movies.length)
      });
  }

  useEffect(() => {

    getAllMovies()
      .then(movies => {
         console.log(movies)
        setMovies(movies);
         setNumberOfMovies(movies.length)
      });

      getAllMovies()
      .then(movies => {
        console.log(movies)
        setMovies(movies);
        //setNumberOfUsers(users.length)
      });

  }, [])

  const onChangeForm = (e) => {
      if (e.target.name === 'firstname') {
          user.firstName = e.target.value;
      } else if (e.target.name === 'lastname') {
          user.lastName = e.target.value;
      } else if (e.target.name === 'email') {
          user.email = e.target.value;
      }
      setMovie(movie)
  }
  
    
    return (
        <div className="App">
          <Header></Header>
           <div className="container mrgnbtm">
            <div className="row">
              <div className="col-md-8">
                  <CreateUser 
                    user={user}
                    onChangeForm={onChangeForm}
                    createUser={movieCreate}
                    >
                  </CreateUser>
              </div>
              <div className="col-md-4">
                  <DisplayBoard
                    numberOfMovies={numberOfMovies}
                    getAllMovies={fetchAllMovies}
                  >
                  </DisplayBoard>
              </div>
            </div>
          </div>
          <div className="row mrgnbtm">
            <Movies movies={movies}></Movies>
          </div> 
          <div className="row mrgnbtm">
            <Movies movies={movies}></Movies>
          </div>
        </div>
    );
}

export default App;

