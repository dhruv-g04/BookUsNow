import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            {/* <img src="/Banner.svg" alt="Banner" /> */}
            <div className="overlay">
                <h1>Discover Exciting Events Happening</h1>
                <h1>Near You - Stay Tuned for Updates!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna non libero tincidunt eleifend. Cras in enim a leo vulputate scelerisque.</p>
            </div>
        </div>
    );
};

export default Banner;
