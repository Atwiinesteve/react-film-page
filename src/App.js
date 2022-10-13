// Importing Modules
import React, { useEffect, useState } from "react";

// Importing Other Page Styles.
import './App.css';
import Search from './search.svg';

// Importing Custom Modules.
import MovieCard from "./components/MovieCard";

// API KEY
const API_KEY = '37fef23c';

// URL Link
const movie_url = `http://www.omdbapi.com/?apikey=${API_KEY}`;

// App Component
const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${movie_url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    
    // Main Container
    <div className="app">
      <h1>MovieLand</h1>

      {/* Search Area */}
      <div className="search">
        <input placeholder="Search Movie Here..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <img src={Search} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>

      {/* Looping through movies for display */}
      {
        movies.length > 0 
        ? 
          (
            {/* Movie Container */},
            <div className="container">
              { movies.map((movie) => ( <MovieCard movie={movie} /> )) }
            </div>
          ) : (
            {/* Movie Container */},
            <div className="empty">
              <h2>No Movies were found...</h2>
            </div>
          )
      }

      

    </div>

  );

}


// Exporting App Component.
export default App;