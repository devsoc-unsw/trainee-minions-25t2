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
        return <p className="p-6">Event not found</p>;
    }

    const navigateToQuiz = () => {
        navigate(`/quiz/${id}`);
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Back button */}
            <div className="p-6">
                <button
                    onClick={() => navigate('/')}
                    className="px-5 py-3 bg-orange-600 font-bold text-white rounded-lg hover:bg-orange-700"
                >
                    Back to Events!
                </button>
            </div>

            {/* Event content */}
            <div className="max-w-6xl mx-auto p-6">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Large image */}
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-110 object-cover"
                    />

                    {/* Event details */}
                    <div className="p-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Someone New! | {event.title}</h1>
                        <p className="text-xl text-black mb-6">Date and Time: {event.date} | Duration: 1.5hrs</p>

                        {/* About this event */}
                        <h2 className="text-3xl font-bold text-black mb-6">About this event?</h2>
                        <p className="text-xl text-black mb-6">Looking to meet new people in a fun, relaxed environment?
                            This singles mixer brings together like-minded singles for an evening of engaging conversations,
                            interactive icebreakers, and plenty of laughs. With group activities and one-on-one time, you'll
                            have the chance to connect naturally while enjoying a vibrant social setting.
                        </p>

                        {/* More detailed info sections */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-3">Event Details</h3>
                                <p className="text-lg mb-2"><strong>Venue:</strong> {event.venue} (Full address will be sent after booking)</p>
                                <p className="text-lg mb-2"><strong>Price:</strong> {event.price} (includes welcome drink & light snacks) </p>
                                <p className="text-lg mb-2"><strong>Dress Code:</strong> Smart casual: something you feel confident in!</p>
                                <p className="text-lg mb-2"><strong>Age Range:</strong> "25 - 40"</p>
                                <p className="text-lg mb-2"><strong>Requirements:</strong> Valid ID, charged phone, and a smile!</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-3">Itinerary</h3>
                                <p className="text-black leading-relaxed">
                                    8:00PM - Guest arrivals, welcome drink & mingling<br />
                                    8:15PM - Icebreaker activity<br />
                                    8:30PM - Fun quiz and team games<br />
                                    9:00PM - One-on-one matching conversations<br />
                                    9:30PM - Final round & “most compatible” reveal<br />
                                    9:45PM - Post-event socialising (optional drinks nearby)
                                </p>
                            </div>
                        </div>

                        {/* What’s Included */}
                        <div className="mt-10">
                            <h3 className="text-2xl font-semibold mb-3">What’s Included</h3>
                            <ul className="list-disc list-inside text-lg text-gray-800 space-y-2">
                                <li>Welcome drink on arrival</li>
                                <li>Light snacks throughout the evening</li>
                                <li>Interactive games and icebreakers</li>
                                <li>Facilitated matching at the end</li>
                            </ul>
                        </div>

                        {/* FAQ */}
                        <div className="mt-10">
                            <h3 className="text-2xl font-semibold mb-3">FAQ</h3>
                            <p className="text-lg mb-2"><strong>Do I need to stay the whole time?</strong> Not at all, but we recommend it so you don’t miss the matching session!</p>
                            <p className="text-lg mb-2"><strong>What if I’m shy?</strong> Don’t worry—our hosts and games make it easy to connect without pressure.</p>
                            <p className="text-lg mb-2"><strong>Refund policy?</strong> Tickets are transferable up to 48 hours before the event.</p>
                            <p className="text-lg mb-2"><strong>Will I find a match?</strong> Yes, you're guaranteed to talk to multiple people and be matched up!</p>
                        </div>

                        {/* Quiz button */}
                        <div className="p-4">
                            <button
                                onClick={navigateToQuiz}
                                className="px-7 py-5 bg-blue-600 font-bold text-white rounded-lg hover:bg-blue-700"
                            >
                                Go to Quiz!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EventDetails