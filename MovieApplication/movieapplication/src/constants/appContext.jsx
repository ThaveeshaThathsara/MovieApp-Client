import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavorite = (movie) => {
    setFavourites((prevFavourites) => [...prevFavourites, movie]);
  };

  const removeFromFavorite = (id) => {
    setFavourites((prevFavourites) => prevFavourites.filter(movie => movie.imdbID !== id));
  };

  return (
    <AppContext.Provider value={{ favourites, addToFavorite, removeFromFavorite }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
