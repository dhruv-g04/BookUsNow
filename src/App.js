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
    const [pageNumber, setPageNumber] = useState(1); // Initialize the page number

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [recommendedData, upcomingData] = await Promise.all([
                    fetchRecommendedEvents(),
                    fetchUpcomingEvents(pageNumber) // Pass the page number to the function
                ]);
                setRecommendedEvents(recommendedData);
                setUpcomingEvents(prevEvents => [...prevEvents, ...upcomingData]); // Merge the new data with existing data
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [pageNumber]); // Add pageNumber as a dependency to trigger the effect when it changes

    useEffect(() => {
        const sentinelRef = document.getElementById('sentinel');

        const handleIntersect = (entries) => {
            if (entries[0].isIntersecting) {
                // Increment the page number and fetch more upcoming events
                setPageNumber(prevPageNumber => prevPageNumber + 1);
            }
        };

        const observer = new IntersectionObserver(handleIntersect, {
            root: null,
            rootMargin: '0px',
            threshold: 1.0 // Trigger when the sentinel element is fully in view
        });

        if (sentinelRef) {
            observer.observe(sentinelRef);
        }

        // Cleanup function
        return () => {
            if (sentinelRef) {
                observer.unobserve(sentinelRef);
            }
        };
    }, [pageNumber]); // Add pageNumber as a dependency

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
                    <div id="sentinel" style={{ height: '10px' }}></div> {/* Sentinel element */}
                </div>
                {loading && <LoadingSpinner />}
            </div>
        </div>
    );
}

export default App;
