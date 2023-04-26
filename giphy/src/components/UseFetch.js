import { useState, useEffect } from "react";

const baseUrl = "..."; // If all of them go to something like https://www.omdb.api this would go there

export default function useFetch(url) {
  // This hook uses state management AND hooks
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      // This is with fetch, but it could just as easily be with axios
      try {
        // Even though we initalized these pieces of state above, 
        // we reset them here in case this is not the first API call.
        setData(null);
        setError(null);
        setLoading(true);
        const response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [url]);

  // Exposes the data, any error, and whether or not it was loading
  return { data, error, loading };
}