import React from 'react';
import './Navbar.css';
import { BsList } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";

const Navbar = () => {
    return (
        <div>
            <div className="upper-navbar">
                <div className="logo">BookUsNow</div>
                <div className="options">
                    <div className="options categories-box"><span className='fixing-icon'><BsList /></span>
                        Categories</div>
                    <div className="options search-bar">
                        <input type="text" placeholder="Search" /> <span className='fixing-icon search-icon'>  <CiSearch /></span>
                    </div>
                </div>
                <div className="options">
                    <div className="favorites"> <span className='fixing-icon fav-icon'> <FaHeart /> </span>
                        <span className='fav-text'>Favorites</span></div>
                    <div className="signin"><span className='signin-text'>Sign In</span><spam className='signin-img'> <IoMdPerson /> </spam></div>
                </div>
            </div>
            <div className="lower-navbar">
                <div className="location"> <span className='fixing-icon'><FaLocationDot /></span>
                    Location </div>
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
