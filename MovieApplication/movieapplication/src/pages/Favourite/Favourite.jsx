import React from 'react';
import { useAppContext } from '../../constants/appContext';
import MovieNavbar from "../../components/MovieNavbar"; // Import the new navbar
import './FavCart.css';

const Favourite = () => {
  const { favourites, removeFromFavorite } = useAppContext();

  return (
    <div className="favourite">
      <div className="flex flex-col items-center justify-center px-8 py-16 bg-gray-900">
      <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-transparent bg-clip-text">
        MovieAI
      </h1>
      <MovieNavbar />

      </div>
     
      {favourites.length > 0 ? (
        <div className="container ">
          {favourites.map((movie) => (
            <div className="movie" key={movie.imdbID}>
              <div>
                <p>{movie.Year}</p>
              </div>
              <div>
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
              </div>
              <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
                <button className='cartbtn' onClick={() => removeFromFavorite(movie.imdbID)}>
                  Remove from Favourite
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center p-10 empty">
          <h2 className='text-2xl text-center '>No favourite movies added</h2>
        </div>
      )}
    </div>
  );
};

export default Favourite;
