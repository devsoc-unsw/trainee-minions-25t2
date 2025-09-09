import FileDropZone from "../components/FileDropZone";
import Navbar from "../components/Navbar";

export default function HostCreateEvent() {
  return (
    <>
      <Navbar />
      <section className="m-8 ml-16">
        <div className="text-3xl font-bold text-black">Create Event</div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <FileDropZone w="w-100" h="h-100" m="mt-10" />
            <button className="mt-10 w-60 h-16 text-2xl font-bold rounded-2xl bg-gray-300">Create Event</button>
          </div>
          <div className="ml-20 -mt-10 flex flex-col gap-y-6">
            <div>
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-black">Title</label>
              <input type="text" id="title" className="w-220 h-15 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Add a title" required />
            </div>

            <div>
              <label htmlFor="location" className="block mb-2 text-sm font-medium text-black">Location</label>
              <input type="text" id="location" className="w-220 h-15 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Venue name, address, postal code, ..." required />
            </div>

            <div>
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-black">Description</label>
              <input type="text" id="description" className="w-220 h-15 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Add a detailed description" required />
            </div>

            <div>
              <label htmlFor="date-and-time" className="block mb-2 text-sm font-medium text-black">Date and Time</label>
              <input type="text" id="date-and-time" className="w-220 h-15 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Calendar pop-down" required />
            </div>

            <div>
              <label htmlFor="registration-deadline" className="block mb-2 text-sm font-medium text-black">Registration Deadlines</label>
              <input type="text" id="registration-deadline" className="w-220 h-15 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Registration deadlines" required />
            </div>

            <section className="flex flex-row gap-10 mt-4" id="numerical-data">
              <div>
                <label htmlFor="capacity" className="block mb-2 text-sm font-medium text-black">Capacity</label>
                <input type="number" id="capacity" className="w-30 h-15 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Capacity" required />
              </div>

              <div>
                <label htmlFor="age-range" className="block mb-2 text-sm font-medium text-black">Location</label>
                <input type="number" id="age-range" className="w-30 h-15 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Age Range" required />
              </div>

              <div>
                <label htmlFor="emergency-contact" className="block mb-2 text-sm font-medium text-black">Location</label>
                <input type="number" id="emergency-contact" className="w-50 h-15 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Emergency Contact Info" required />
              </div>
            </section>

          </div>
        </div>

      </section >
    </>
  );
};