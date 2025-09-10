import type { Event } from "../data/EventsData";
import { memo } from "react";
import EventCard from "./EventsCard";

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

export default EventShowcase;
