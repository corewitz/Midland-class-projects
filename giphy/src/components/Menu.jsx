import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
      <nav>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>

            <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/favorites">Favorites</Link>
            </li>
            <li>
                <Link to="/search">Search</Link>
            </li>
        </ul>
      </nav>
    )
}

export default Menu;