import { FavoritesProvider } from './FavoritesContext';
import { UserProvider } from './UserContext';
import { SearchProvider } from './SearchContext';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function StateProvider(props) {
    return (
        <UserProvider>
            <FavoritesProvider>
                <SearchProvider>
                    {props.children}
                </SearchProvider>
            </FavoritesProvider>
        </UserProvider>
    )
}