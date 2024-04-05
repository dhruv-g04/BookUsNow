import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div className="upper-navbar">
                <div className="logo">BookUsNow</div>
                <div className="options">
                    <div className="options categories">Categories</div>
                    <div className="options search-bar">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div>
                <div className="favorites">Favorites</div>
                <div className="signin">Sign In</div>
                </div>
            </div>
            <div className="lower-navbar">
                <div className="location">Location</div>
                <div className="categories">
                    <ul>
                        <li>Live Shows</li>
                        <li>Streams</li>
                        <li>Movies</li>
                        <li>Plays</li>
                        <li>Events</li>
                        <li>Sports</li>
                        <li>Activities</li>
                    </ul>
                </div>
                <div className="blank"></div>
            </div>
        </div>
    );
};

export default Navbar;
