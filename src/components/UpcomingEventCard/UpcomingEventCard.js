import React from 'react';
import './UpcomingEventCard.css';
import { FaLocationDot } from "react-icons/fa6";
import { WiDegrees } from "react-icons/wi";

const UpcomingEventCard = ({ event }) => {
    if (!event) {
        return null;
    }

    const imageUrl = event.imgUrl || '';
    const eventDate = new Date(event.date);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = eventDate.toLocaleDateString('en-US', options);

    const handleImageError = (event) => {
        event.target.onerror = null; // Prevent infinite loop
        event.target.src = process.env.PUBLIC_URL + '/not_found.svg'; // Fallback image path
    };

    return (
        <div className="uevent-card">
            <div className="image-container">
                <img src={process.env.PUBLIC_URL + '/upcoming_img.svg'} alt={event.eventName} />
                {/* <img src={imageUrl || process.env.PUBLIC_URL + '/img_not_found_h.jpg'} alt={event.eventName} /> */}
                <div className='div-rel'>
                    <p className="uevent-date">{formattedDate}</p>
                </div>
            </div>
            <div className="uevent-details">
                <div>
                    <p className="uevent-name">{event.eventName}</p>
                </div>
                <div className='details'>
                    <div className="uevent-info-left">
                        <p className="uevent-city"><FaLocationDot /> {event.cityName}</p>
                    </div>
                    <div className="uevent-info-right">
                        <p className="uevent-weather">{event.weather} | {parseInt(event.distanceKm)} Km</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEventCard;