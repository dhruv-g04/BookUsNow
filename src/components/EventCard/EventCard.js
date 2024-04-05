import React from 'react';
import './EventCard.css';
import { FaLocationDot } from "react-icons/fa6";

const EventCard = ({ event }) => {
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
    <div className="event-card">
      {/* <div className="image-container"> */}
        <img src={process.env.PUBLIC_URL + '/not_found.webp'} alt={event.eventName} />
        {/* <img src={imageUrl || process.env.PUBLIC_URL + '/not_found.svg'} alt={event.eventName} /> */}
      {/* </div> */}
      <div className="event-details">
        <div className="event-info-left">
          <p className="event-name">{event.eventName}</p>
          <p className="event-city"><FaLocationDot /> {event.cityName}</p>
        </div>
        <div className="event-info-right">
          <p className="event-date">{formattedDate}</p>
          <p className="event-weather">{event.weather} | {parseInt(event.distanceKm)} Km</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
