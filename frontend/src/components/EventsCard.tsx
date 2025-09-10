import type { Event } from "../data/EventsData";
import { memo, useState } from "react";
import EventModal from "./EventModal";

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

// Separate function for creating each individual event card
const EventCard = memo(({ event }: EventCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="hover:bg-button-background-hover w-85 flex-shrink-0 transform-gpu cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-transform duration-400 hover:scale-102"
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

      {isModalOpen && ( // Only render modal when open
        <EventModal
          event={event}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
});

export default EventCard;
