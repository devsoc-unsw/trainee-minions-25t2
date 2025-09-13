import type { Event } from "../data/EventsData";
import { useNavigate } from 'react-router-dom';

interface EventModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal = ({ event, isOpen, onClose }: EventModalProps) => {
    const navigate = useNavigate();
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
            {/* Image section */}
            <div className="w-3/5">
                <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover"
                ></img>
            </div>

            {/* Content Section */}
            <div className = "w-1/2 p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                    <h2 className = "text-3xl font-bold mb-4 text-gray-900">{event.title}</h2>
                    <p className = "text-lg text-black mb-3">{event.date}</p>
                    <p className = "text-lg text-black mb-3">Requirements: Phone, Rizz, Louis Lim</p>
                    <p className = "text-lg text-black mb-3">{event.venue}</p>
                    <p className = "text-xl font-semibold text-black mb-6">{event.price}</p>
                </div>

                {/* Buttons */}
                <div className = "flex gap-5">
                    <button 
                        onClick = {onClose}
                        className = "px-6 py-3 bg-purple-400 font-bold text-white rounded-lg hover:bg-purple-500"
                    >
                        Close
                    </button>
                    <button 
                        className = "px-6 py-3 bg-teal-500 font-bold text-white rounded-lg hover:bg-teal-600"
                        onClick={() => navigate(`/event/${event.id}`)}
                    >
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
