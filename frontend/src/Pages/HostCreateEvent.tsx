import { useState } from "react";
import FileDropZone from "../components/FileDropZone";
import Navbar from "../components/Navbar";

export default function HostCreateEvent() {
  const PORT = import.meta.env.VITE_BACKEND_PORT;

  const [formData, setFormData] = useState(
    {
      title: '',
      date: '', // 'date and time'
      venue: '', // place name
      price: '',
      status: '',
      image: '',

      location: '',
      description: '',
      registrationDeadlines: '',
      capacity: -1,
      ageRangeMax: -1,
      emergencyContact: '',
    }
  );

  // TODO: params should use interface props (backend defined types)
  const createEvent = async (title: string, date: string, venue: string, price: string, status: string, image: string, location: string, description: string, registrationDeadlines: string, capacity: number, ageRangeMax: number, emergencyContact: string) => {
    await fetch(`http://localhost:${PORT}/api/host/events/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, date, venue, price, status, image, location, description, registrationDeadlines, capacity, ageRangeMax, emergencyContact }),
    }).then(response => response.json()) // Parse the JSON response
      .then(data => {
        console.log('POST request successful:', data);
        // Process the retrieved data
        alert(`your new event named '${data.title}' has been created!`);
      })
      .catch(error => {
        console.error('POST request failed:', error);
        alert(`encountered an error while creating your new event`);
      });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('Form data:', formData);
    createEvent(
      formData.title,
      formData.date,
      formData.venue,
      formData.price,
      formData.status,
      formData.image,
      formData.location,
      formData.description,
      formData.registrationDeadlines,
      formData.capacity,
      formData.ageRangeMax,
      formData.emergencyContact
    );
  };

  return (
    <>
      <Navbar />
      <form id="create-event" onSubmit={handleSubmit} className="m-8 ml-16">
        <div className="text-3xl font-bold text-black">Create Event</div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <FileDropZone w="w-100" h="h-100" m="mt-10" />
            {/* submit button: */}
            <button className="mt-10 w-60 h-16 text-2xl font-bold rounded-2xl bg-gray-300 hover:text-gray-800 hover:bg-red-300">Create Event</button>
          </div>
          <div className="ml-20 -mt-10 flex flex-col gap-y-6">
            <div>
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-black">Title</label>
              <input onChange={handleChange} type="text" id="title" className="w-220 h-15 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Event by Your Host at <Venue Name>" required />
            </div>

            <div>
              <label htmlFor="location" className="block mb-2 text-sm font-medium text-black">Location</label>
              <input onChange={handleChange} type="text" id="location" className="w-220 h-15 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Venue name, address, postal code, ..." required />
            </div>

            <div>
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-black">Description</label>
              <input onChange={handleChange} type="text" id="description" className="w-220 h-15 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Add a detailed description" required />
            </div>

            <div>
              <label htmlFor="date-and-time" className="block mb-2 text-sm font-medium text-black">Date and Time</label>
              <input onChange={handleChange} type="text" id="date" className="w-220 h-15 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Calendar pop-down" required />
            </div>

            <div>
              <label htmlFor="registration-deadline" className="block mb-2 text-sm font-medium text-black">Registration Deadlines</label>
              <input onChange={handleChange} type="text" id="registrationDeadlines" className="w-220 h-15 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="[Opens... Closes... Cancellation deadline]" required />
            </div>

            <section className="flex flex-row gap-10 mt-4" id="numerical-data">
              <div>
                <label htmlFor="capacity" className="block mb-2 text-sm font-medium text-black">Capacity</label>
                <input onChange={handleChange} type="number" id="capacity" className="w-30 h-15 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Capacity" required />
              </div>

              <div>
                <label htmlFor="age-range-max" className="block mb-2 text-sm font-medium text-black">Age Range</label>
                <div className="flex flex-row">
                  <input onChange={handleChange} type="number" id="ageRangeMax" className="w-30 h-15 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Max Age" required />
                </div>
                {/* <label htmlFor="age-range" className="block mb-2 text-sm font-medium text-black">Location</label>
                <div className="flex flex-row">
                  <input onChange={handleChange} type="number" id="age-range-min" className="w-30 h-15 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Age Range" required />
                  <input onChange={handleChange} type="number" id="age-range-max" className="w-30 h-15 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Age Range" required />
                </div> */}
              </div>

              <div>
                <label htmlFor="emergency-contact" className="block mb-2 text-sm font-medium text-black">Emergency Contact</label>
                <input onChange={handleChange} type="text" id="emergencyContact" className="w-50 h-15 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Emergency Contact Info" required />
              </div>
            </section>
          </div>
        </div>
      </form>
    </>
  );
};