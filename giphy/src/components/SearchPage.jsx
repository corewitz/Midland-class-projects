import React, { useState } from 'react';
import Button from '../styled/elements/Button';
import getGifs from '../functions/getGifs';
import { useQuery } from 'react-query';
import { useSearchContext } from "../context/SearchContext";
import {useFavoritesContext} from "../context/FavoritesContext";
import GifDisplay from "../components/GifDisplay";
import H1 from '../styled/elements/H1.js';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [url, setUrl] = useState(null);
  const [rating, setRating] = useState('g');
  const { searchResults, setSearchResults } = useSearchContext();
  const {favorites, addFavorite, removeFavorite} = useFavoritesContext();


  const { isLoading, error, isSuccess } = useQuery(["getGifs", url], () => getGifs(url), {
  enabled: !!url, 

  onSuccess: (data) => setSearchResults(data),
})


  return (
    <div className ="center top100">
      <H1>Search</H1>
      <div className="height25"></div>
      <form className="bottom100">
        <input
          placeholder='Search for a gif'
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className ="margin"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value='g'>G</option>
          <option value='pg'>PG</option>
          <option value='pg-13'>PG-13</option>
          <option value='r'>R</option>
        </select>
        <br></br>
        <div className="height25"></div>
        <Button
          disabled={searchTerm.length < 3}
          onClick={(e) => {
            e.preventDefault();
            if (searchTerm.length >= 3) {
              setUrl(`&q=${searchTerm}&rating=${rating}`);
            }
          }}
        >
        Search
        </Button>
      </form>
      {isLoading && <p>Loading....</p>}
      {error && <p>an error has occured: {error.message}</p>}
      {isSuccess && 
      searchResults.map((val) => (
        <GifDisplay 
          key={val.gif_id}
          {...val}
          //url={val.url}
          //title={val.title}
          //gif_id={val.gif_id}
          addFavorite={() => addFavorite({ gif_id: val.gif_id, url: val.url, title: val.title })}
          removeFavorite={removeFavorite}
          isFavorite={favorites.some((fav) => fav.gif_id === val.gif_id)}
        />
      ))
       }


    </div>
  );
};

export default SearchPage;