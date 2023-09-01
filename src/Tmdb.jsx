import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './MovieList.css'


function Tmdb() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = 'fa84ee6383d9bcfdaa70dd42018269e2';
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTg0ZWU2MzgzZDliY2ZkYWE3MGRkNDIwMTgyNjllMiIsInN1YiI6IjY0ODYyNzhmYzAzNDhiMDBjODJlYmE5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pYqUiNTDKKJAosYXPCdshA1V9wbHnUczlFa8Tu3aQfw';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&access_token=${accessToken}`;

    axios.get(url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    
      <div>
        <h1 className = 'title'>Popular Movies</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h2>{movie.title}</h2>
              <img className = 'image-layout'
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={`${movie.title} Poster`}
              />
            </li>
          ))}
        </ul>
      </div>
  
    
  );
}

export default Tmdb;
