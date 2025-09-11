import { useParams, useNavigate } from 'react-router-dom';
import { popularEvents, weekendEvents } from '../data/EventsData';
// import type { Event } from "../data/EventsData";

const EventDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const numericId = Number(id);

    // Find the event with the matching id
    const mergedEvents = [...popularEvents, ...weekendEvents];
    
    const event = mergedEvents.find((e) => e.id === numericId);

    if (!event) {
        return <p className = "p-6">Event not found</p>;
    }

    return (
        <div className = "min-h-screen bg-gray-50">
            {/* Back button */}
            <div className = "p-6">
                <button 
                    onClick = {() => navigate('/')}
                    className = "px-5 py-3 bg-orange-600 text-white rounded-lg hover:bg-gray-700"
                >
                    Back to Events
                </button>
            </div>

            {/* Event content */}
            <div className = "max-w-6xl mx-auto p-6">
                <div className = "bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Large image */}
                    <img 
                        src = {event.image} 
                        alt = {event.title}
                        className = "w-full h-110 object-cover"
                    />

                    {/* Event details */}
                    <div className = "p-8">
                        <h1 className = "text-4xl font-bold text-gray-900 mb-4">Meet Your Match | {event.title}</h1>
                        <p className = "text-xl text-purple-600 mb-6">Date and Time: {event.date} | Duration: 1.5hrs</p>
                        <h2 className = "text-3xl font-bold text-black mb-6">About this event?</h2>
                        <p className = "text-xl text-black mb-6">Meet eligible singles from across Sydney for a night of fun and flirtation! (Add more)</p>

                        {/* More detailed info sections */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-3">Event Details</h3>
                                <p className="text-lg mb-2"><strong>Venue:</strong> {event.venue}</p>
                                <p className="text-lg mb-2"><strong>Price:</strong> {event.price}</p>
                                <p className="text-lg mb-2"><strong>Requirements:</strong> Phone, Rizz, Louis Lim</p>
                            </div>
                            
                            <div>
                                <h3 className="text-2xl font-semibold mb-3">Itinerary</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    8:00PM - Guest arrivals, welcome drink and light snacks<br />
                                    8:10PM - Quiz starts<br />
                                    8:50PM - Quiz done<br />
                                    9:30PM - Event ends, post event socialising begins
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default EventDetails