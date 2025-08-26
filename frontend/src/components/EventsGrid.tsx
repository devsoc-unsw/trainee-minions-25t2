import type { Event } from "../data/EventsData";
import { popularEvents, weekendEvents } from "../data/EventsData";
import { memo, useState } from "react";

// Adds status tag
const GetStatus = (status: string) => {
  if (status === "Nearly full") {
    return "bg-orange-100 text-orange-800";
  } else if (status === "Full") {
    return "bg-red-100 text-red-800";
  } else if (status === "Popular") {
    return "bg-blue-100 text-blue-800";
  }
  return "";
};

interface EventCardProps {
  event: Event;
}

// Seperate function for creating each individual event card
const EventCard = memo(({ event }: EventCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <div 
      className="hover:bg-button-background-hover w-85 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-transform duration-400 hover:scale-102 transform-gpu"
      onClick={() => setIsModalOpen(true)}
    >
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="h-48 w-full object-cover"
        />
        {event.status && (
          <div
            className={`absolute top-3 left-3 rounded px-2 py-1 text-xs font-medium ${GetStatus(
              event.status,
            )}`}
          >
            {event.status}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-gray-900">
          {event.title}
        </h3>
        <p className="mb-1 line-clamp-1 text-sm text-gray-600">
          {event.date}
        </p>
        <p className="mb-2 line-clamp-1 text-sm text-gray-600">
          {event.venue}
        </p>
        <p className="line-clamp-1 text-sm font-medium text-gray-900">
          {event.price}
        </p>
      </div>
    </div>

    {isModalOpen && (
      <>
        <div 
          className="fixed inset-0 backdrop-blur z-40"
        ></div>

        <div 
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)} // Click outside closes modal
        >
          <div 
            className="bg-white rounded-xl shadow-2xl w-5/6 h-2/5 max-w-5xl flex overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            
            <div className="w-3/5">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="w-1/2 p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">{event.title}</h2>
                <p className="text-lg text-black mb-3">{event.date}</p>
                <p className="text-lg text-black mb-3">Requirements: Phone, Rizz, Louis Lim</p>
                <p className="text-lg text-black mb-3">{event.venue}</p>
                <p className="text-xl font-semibold text-black mb-6">{event.price}</p>
              </div>
              
              <div className="flex gap-5">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 bg-purple-400 font-bold text-white rounded-lg hover:bg-purple-500"
                >
                  Close
                </button>
                <button className="px-6 py-3 bg-teal-500 font-bold text-white rounded-lg hover:bg-teal-600">
                  Extra Details & Info
                </button>
              </div>

            </div>

          </div>
        </div>
      </>
    )}
    </>
  );
});

interface EventShowcaseProps {
  title: string;
  events: Event[];
}

// Main body that houses all event cards
// Calls individual event card function for every item in events array
const EventShowcase = memo(({ title, events }: EventShowcaseProps) => {
  return (
    <div className="mb-12">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">{title}</h2>

      {/* Independant scaling */}
      <div className="flex items-start gap-4 overflow-x-auto pb-2">
        {events.map((event) => (
          // Note, key prop is not passed, by it used by react for more efficient rendering i think?
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
});

const EventsGrid = () => {
  return (
    <div className="bg-background-primary mx-auto min-h-screen max-w-7xl px-6 py-8">
      <EventShowcase title="Popular events" events={popularEvents} />
      <EventShowcase title="This weekend" events={weekendEvents} />
    </div>
  );
};

export default EventsGrid;
