import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = "http://www.omdbapi.com/?apikey=f31299ba";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${API_URL}&i=${imdbID}`);
        setMovie(response.data);
      } catch (error) {
        console.error("Failed to fetch movie details", error);
      }
    };

    fetchMovieDetails();
  }, [imdbID]);

  if (!movie) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="p-4 text-2xl font-bold text-center text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse">
      Loading...
    </div>
  </div>
  
  }

  return (
    <div className="max-w-xl p-10 mx-auto mb-10 bg-gray-800 rounded-lg shadow-lg movie-details">
  <h2 className="mb-4 text-3xl font-bold text-center text-white">{movie.Title}</h2>
  <p className="mb-2 text-lg text-center text-white">{movie.Year}</p>
  <div className="flex justify-center mb-4">
    <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} className="rounded-lg shadow-lg" />
  </div>
  <p className="text-lg text-center text-white">{movie.Plot}</p>
</div>

  );
};

export default MovieDetails;
