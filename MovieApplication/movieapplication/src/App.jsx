import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MovieList from './pages/MovieListPages/MovieList';
import Favourite from './pages/Favourite/Favourite';
import Review from './pages/Reviews/Review';
import MovieDetails from './pages/MovieListPages/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MovieList" element={<MovieList />} />
          <Route path="/favourites" element={<Favourite />} />
          <Route path="/reviews" element={<Review movieId="tt0076759" />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
