// src/components/MovieNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MovieNavbar = () => {
  return (
    <motion.div

    initial={{ opacity: 0}}
    animate={{ opacity:1 }}
    transition={{ duration: 2.5 }}
    
    className="flex mt-4 mb-8 space-x-4">
      <Link to="/MovieList" className="font-semibold text-white hover:underline text-[25px]">Movies</Link>
      <Link to="/favourites" className="font-semibold text-white hover:underline text-[25px]">Favourites</Link>
      <Link to="/reviews" className="font-semibold text-white hover:underline text-[25px]">Reviews</Link>
    </motion.div>
  );
};

export default MovieNavbar;
