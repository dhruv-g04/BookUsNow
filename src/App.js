import React, { useState, useEffect } from 'react';
import EventCard from './components/RecommendedEventCard/EventCard';
import EventList from './components/EventList/EventList';
import HorizontalScrollContainer from './components/HorizontalScrollContainer/HorizontalScrollContainer';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import NavBar from './components/NavBar/Navbar';
import Banner from './components/Banner/Banner'; // Import the Banner component
import { fetchRecommendedEvents, fetchUpcomingEvents } from './api';
import { IoIosArrowRoundForward } from "react-icons/io";

function App() {
    const [recommendedEvents, setRecommendedEvents] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [recommendedData, upcomingData] = await Promise.all([
                    fetchRecommended(),
                    fetchUpcoming()
                ]);
                setRecommendedEvents(recommendedData);
                setUpcomingEvents(upcomingData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const fetchRecommended = async () => {
        try {
            const data = await fetchRecommendedEvents();
            return data;
        } catch (error) {
            console.error('Error fetching recommended events:', error);
            return [];
        }
    };

    const fetchUpcoming = async () => {
        try {
            const data = await fetchUpcomingEvents();
            return data;
        } catch (error) {
            console.error('Error fetching upcoming events:', error);
            return [];
        }
    };
    // console.log(upcomingEvents);
    return (
        <div className="app">
            <NavBar />
            <Banner />
            <div className='box'>
                <div className='recommended-events'>
                    <h4>Recommended Events <span className="arrow"><IoIosArrowRoundForward /></span></h4>
                    <HorizontalScrollContainer>
                        {recommendedEvents.map(event => (
                            <EventCard key={event.eventName} event={event} />
                        ))}
                    </HorizontalScrollContainer>
                </div>
                <div className='upcoming-events'>
                    <h4>Upcoming Events<span className="arrow"><IoIosArrowRoundForward /></span></h4>
                    <EventList events={upcomingEvents} />
                </div>
                {loading && <LoadingSpinner />}
            </div>
        </div>
    );
}

export default App;
