import type { Event } from "../data/EventsData";
import { popularEvents, weekendEvents } from "../data/EventsData";

const EventsGrid = () => {
  interface EventCardProps {
    event: Event;
  }

  // Seperate function for creating each individual event card
  const EventCard = ({ event }: EventCardProps) => {
    // Adds status tag
    const GetStatus = (status: string) => {
      if (status === "Nearly full") {
        return "bg-orange-100 text-orange-800";
      } else if (status === "Full") {
        return "bg-red-100 text-red-800";
      } else if (status === "Popular") {
        return "bg-blue-100 text-blue-800";
      }
    };

    return (
      <div className="hover:bg-button-background-hover w-85 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm duration-400 hover:scale-102">
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
    );
  };

  interface EventShowcaseProps {
    title: string;
    events: Event[];
  }

  // Main body that houses all event cards
  // Calls individual event card function for every item in events array
  const EventShowcase = ({ title, events }: EventShowcaseProps) => {
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
  };

  return (
    <div className="bg-background-primary mx-auto min-h-screen max-w-7xl px-6 py-8">
      <EventShowcase title="Popular events" events={popularEvents} />
      <EventShowcase title="This weekend" events={weekendEvents} />
    </div>
  );
};

export default EventsGrid;
