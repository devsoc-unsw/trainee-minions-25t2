import type { Event } from "../data/EventsData";
import { memo, useMemo } from "react";
import EventCard from "./EventsCard";

interface SearchFilters {
  events: string;
  locations: string;
  tags: string[];
}

interface EventShowcaseProps {
  title: string;
  events: Event[];
  searchFilters: SearchFilters;
}

// Simple filter function for title, location, and tags
const filterEvents = (events: Event[], filters: SearchFilters): Event[] => {
  if (!filters) return events;

  return events.filter((event) => {
    const {
      events: eventSearch,
      locations: locationSearch,
      tags: selectedTags,
    } = filters;

    // Filter by title and venue
    const matchesEvent =
      !eventSearch ||
      event.title.toLowerCase().includes(eventSearch.toLowerCase()) ||
      event.venue.toLowerCase().includes(eventSearch.toLowerCase());

    // Filter by location
    const matchesLocation =
      !locationSearch ||
      event.location.toLowerCase().includes(locationSearch.toLowerCase());

    // Filter by tags
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((selectedTag) => event.tags.includes(selectedTag));

    return matchesEvent && matchesLocation && matchesTags;
  });
};

// Main body that houses all event cards
// Calls individual event card function for every item in events array
const EventShowcase = memo(
  ({ title, events, searchFilters }: EventShowcaseProps) => {
    const filteredEvents = useMemo(() => {
      if (!searchFilters) return events;
      return filterEvents(events, searchFilters);
    }, [events, searchFilters]);

    // Check if we have active filters
    const hasActiveFilters =
      searchFilters &&
      (searchFilters.events ||
        searchFilters.locations ||
        searchFilters.tags.length > 0);

    return (
      <div className="mb-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">{title}</h2>

        {/* Show empty state if no events */}
        {filteredEvents.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 py-16 text-center">
            <div className="mb-4 text-gray-400">
              <svg
                className="mx-auto h-16 w-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">
              {hasActiveFilters
                ? "No matching events found"
                : "Nothing here right now"}
            </h3>
            <p className="max-w-md text-gray-500">
              {hasActiveFilters
                ? "Try adjusting your search filters or browse other categories"
                : "Check back later for new events in this category"}
            </p>
          </div>
        ) : (
          /* Independent scaling */
          <div className="flex items-start gap-4 overflow-x-auto pb-2">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} /> // Whenever map is used, MUST use key
            ))}
          </div>
        )}
      </div>
    );
  },
);

export default EventShowcase;
