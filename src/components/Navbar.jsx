import React, { useState } from 'react';
import './navbar.css'; // Import your CSS file
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
function Navbar() {
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    return (
        <nav>
            <ul>
                <li><a href="#home">Logo</a></li>
                <li><a href="#news">Mens</a></li>
                <li><a href="#contact">Womens</a></li>
                {/* Replace "About" text with the Material UI cart icon */}
                <li className="cart-icon"><a className="active" href="#cart"><ShoppingCartIcon /></a></li>
                <li className="cart-icon"><a className="active" href="#cart"><FavoriteBorderIcon /></a></li>
                <li className="cart-icon"><a className="active" href="#cart"><PersonOutlineIcon /></a></li>
                <li className="cart-icon"><a className="active" href="#cart"><SearchIcon /></a></li>
                {isSearchVisible && (
                <li className="search-container">
                    <input type="text" placeholder="Search..." />
                </li>
            )}
            </ul>
        </nav>
    );
}

export default Navbar;
 