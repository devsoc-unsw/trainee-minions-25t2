import type { Event } from "../data/EventsData";

interface EventModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal = ({ event, isOpen, onClose }: EventModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 z-40 backdrop-blur"></div>

      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={onClose} // Click outside closes modal
      >
        <div
          className="flex h-2/5 w-5/6 max-w-5xl overflow-hidden rounded-xl bg-white shadow-2xl"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <div className="w-3/5">
            <img
              src={event.image}
              alt={event.title}
              className="h-full w-full object-cover"
            ></img>
          </div>

          <div className="flex w-1/2 flex-col justify-between overflow-y-auto p-8">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                {event.title}
              </h2>
              <p className="mb-3 text-lg text-black">{event.date}</p>
              <p className="mb-3 text-lg text-black">
                Requirements: Phone, Rizz, Louis Lim
              </p>
              <p className="mb-3 text-lg text-black">{event.venue}</p>
              <p className="mb-6 text-xl font-semibold text-black">
                {event.price}
              </p>
            </div>

            <div className="flex gap-5">
              <button
                onClick={onClose}
                className="rounded-lg bg-purple-400 px-6 py-3 font-bold text-white hover:bg-purple-500"
              >
                Close
              </button>
              <button className="rounded-lg bg-teal-500 px-6 py-3 font-bold text-white hover:bg-teal-600">
                Extra Details & Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventModal;
