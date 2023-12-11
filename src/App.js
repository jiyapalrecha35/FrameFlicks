import './App.css';
import React, { useState, useEffect } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = "http://www.omdbapi.com?apikey=55844e2"

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovie(data.Search);
  }

  useEffect(() => {
    searchMovies("army");
  }, []);

  const [movie, setMovie] = useState([]);
  const [text, setText] = useState("")

  return (
    <div className="app">
      <h1>FrameFlicks</h1>
      <div className="search">
        <input type='text' placeholder="Search for movies" value={text} onChange={(e) => { setText(e.target.value) }} />
        <img src={SearchIcon} alt="Search" onClick={() => { searchMovies(text) }} />
      </div>

      {movie?.length > 0 ? (
        <div className="container">
          {movie.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
