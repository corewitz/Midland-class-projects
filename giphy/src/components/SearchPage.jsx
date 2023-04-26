import React, { useState } from 'react';
import Button from '../styled/elements/Button';
import getGifs from '../functions/getGifs';
import { useQuery } from 'react-query';
import { useSearchContext } from "../context/SearchContext";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [url, setUrl] = useState(null);
  const [rating, setRating] = useState('g');
  const { searchResults, setSearchResults } = useSearchContext();


  const { isLoading, error, isSuccess } = useQuery(["getGifs", url], () => getGifs(url), {
  enabled: !!url, 

  onSuccess: (data) => setSearchResults(data),


})

if (isLoading) {
  return "Loading....";
}

if (error) {
  return "an error has occured:" + error.message;
}
 
if (isSuccess) return console.log(searchResults);
 

/*
  useEffect(() => {
    const fetchGifs = async () =>  {
      if (url) {
        const gifs = await getGifs(url);
        console.log(gifs);
      }
    };
    fetchGifs();
  }, [url]);
*/
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
    </div>
  );
};

export default SearchPage;