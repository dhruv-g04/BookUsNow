import React from 'react';
import './EventList.css';
import EventCard from '../EventCard/EventCard';

const EventList = ({ events }) => {
  // Check if events is not null or undefined, and if events is an array
  if (!events || !Array.isArray(events)) {
    return null; // or render an error message
  }
  
  return (
    <div className="event-list">
      {events.map(event => (
        <EventCard key={event.eventName} event={event} />
      ))}
    </div>
  );
};

export default EventList;
