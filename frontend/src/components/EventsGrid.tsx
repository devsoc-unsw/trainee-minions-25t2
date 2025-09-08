import { popularEvents, weekendEvents } from "../data/EventsData";
import EventShowcase from "./EventsShowcase";

const EventsGrid = () => {
  return (
    <div className="bg-background-primary mx-auto min-h-screen max-w-7xl px-6 py-8">
      <EventShowcase title="Popular events" events={popularEvents} />
      <EventShowcase title="This weekend" events={weekendEvents} />
    </div>
  );
};

export default EventsGrid;
