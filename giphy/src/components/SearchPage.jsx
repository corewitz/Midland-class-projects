import React, { useState } from 'react';
import Button from '../styled/elements/Button';
import getGifs from '../functions/getGifs';
import { useQuery } from 'react-query';
import { useSearchContext } from "../context/SearchContext";
import {useFavoritesContext} from "../context/FavoritesContext";
import GifDisplay from "../components/GifDisplay";

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
    <div>
      <h1>Search</h1>
      <form>
        <input
          placeholder='Search for a gif'
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value='g'>G</option>
          <option value='pg'>PG</option>
          <option value='pg-13'>PG-13</option>
          <option value='r'>R</option>
        </select>
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
          url={val.url}
          title={val.title}
          gif_id={val.gif_id}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
        />
      ))
       }


    </div>
  );
};

export default SearchPage;