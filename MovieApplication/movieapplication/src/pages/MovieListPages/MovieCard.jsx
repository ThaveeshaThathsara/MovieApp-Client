/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../constants/appContext';
import ScerchIc from '../../assets/redheart.png';
import ReactIc from '../../assets/heart.png';


const MovieCard = ({ movie }) => {
  const { favourites, addToFavorite, removeFromFavorite } = useAppContext();

  const isFavourite = favourites.some(favMovie => favMovie.imdbID === movie.imdbID);
  console.log(favourites);

  return (
    <div className="movie" key={movie.imdbID}>
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>
          <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
        </h3>
        {isFavourite ? (
          <img
            src={ScerchIc}
            alt="Remove from Favorite"
            style={{
              width: '30px',
              height: '30px',
            }}
            onClick={() => removeFromFavorite(movie.imdbID)}
          />
        ) : (
          <img
            src={ReactIc}
            alt="Add to Favorite"
            style={{
              width: '30px',
              height: '30px',
            }}
            onClick={() => addToFavorite(movie)}
          />
        )}
        {/* <button
          className="cartbtn"
          style={{
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            borderRadius: '5px',
            marginTop: '10px',
            marginLeft: '10px',
            fontSize: '20px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            transition: 'all 0.3s ease',
          }}
          
        >
          Reviews
        </button> */}
      </div>
    </div>
  );
};

export default MovieCard;
