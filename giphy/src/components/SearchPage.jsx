//import { UseFetch } from './UseFetch';

//const [query, setQuery] = useState("");
// Since useFetch returns an object, we will need to destructure the data. 
// This means that we will extract the values from the object and assign them to new variables.
//const { data: product, loading, error } = useFetch(`search?=${query}`);

function SearchPage () {
    return (
        <form>
            <input type="text" placeholder="Search.." name="search"></input>
            <button type="submit">SEARCH</button>
        </form>
    )
}

export default SearchPage;