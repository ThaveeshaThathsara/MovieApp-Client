import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import MovieCard from "./MovieCard";
import SearchIcon from "../../assets/search.svg";
import Favourite from '../Favourite/Favourite';
import Review from "../Reviews/Review";
import MovieDetails from './MovieDetails'; // Import the new component
import MovieNavbar from "../../components/MovieNavbar"; // Import the new navbar
import { motion } from 'framer-motion';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=f31299ba";

const MovieList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <div className="flex flex-col items-center justify-center px-8 py-16 bg-gray-900">
      <motion.h1

      initial={{ opacity: 0}}
      animate={{ opacity:1 }}
      transition={{ duration: 2 }}
      
      className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-transparent bg-clip-text">
        MovieAI
      </motion.h1>
      <MovieNavbar /> 
      <div className="flex items-center justify-center w-full p-4 mb-8 bg-gray-600 rounded-full shadow-lg">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
          className="flex-grow px-4 text-white placeholder-gray-400 bg-gray-600 outline-none"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
          className="w-8 h-8 cursor-pointer"
        />
      </div>
      {movies?.length > 0 ? (
        <div className="flex flex-wrap items-center justify-center mt-8">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center w-full mt-8">
          <h2 className="text-lg text-orange-400">No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default MovieList;
