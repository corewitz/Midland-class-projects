import React from 'react';
import GifDisplay from "./GifDisplay";
import { useFavoritesContext } from "../context/FavoritesContext";
import H1 from '../styled/elements/H1.js';

const FavoritesPage = () => {
  
  const {favorites, removeFavorite} = useFavoritesContext();

  return (
    <div className ="center">
      <H1>Favorites</H1>
      {favorites?.map((value) => {
        return (
          <GifDisplay
      key ={value.gif_id}
      title={value.title}
      gif_id={value.gif_id}
      url={value.url}
      removeFavorite={removeFavorite}
      isFavorite={true}
       />
        )
      })}
      

    </div>
  );
};

export default FavoritesPage;