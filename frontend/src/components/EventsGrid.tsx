import { popularEvents, weekendEvents, noEvents } from "../data/EventsData";
import EventShowcase from "./EventsShowcase";

interface SearchFilters {
  events: string;
  locations: string;
  tags: string[];
}

interface EventsGridProps {
  searchFilters: SearchFilters;
}

const EventsGrid = ({ searchFilters }: EventsGridProps) => {
  return (
    <div className="bg-background-primary mx-auto min-h-screen max-w-7xl px-6 py-8">
      <EventShowcase
        title="Popular events"
        events={popularEvents}
        searchFilters={searchFilters}
      />
      <EventShowcase
        title="This weekend"
        events={weekendEvents}
        searchFilters={searchFilters}
      />
      {/* Example for no events added */}
      <EventShowcase
        title="Ranked Dating Matches"
        events={noEvents}
        searchFilters={searchFilters}
      />
    </div>
  );
};

export default EventsGrid;
