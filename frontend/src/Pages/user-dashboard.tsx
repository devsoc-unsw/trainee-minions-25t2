import { useState } from "react";
import Navbar from "../components/Navbar";
import image1Svg from "../assets/restaurant_1.jpg";
import image2Svg from "../assets/restaurant_2.jpg";
import image3Svg from "../assets/rooftop_bar1.jpg";
import image4Svg from "../assets/rooftop_bar2.jpg";
import Background from "../components/Background";

export default function UserEventsGrid() {
  const [isMostRecent, setIsMostRecent] = useState(true);

  const events = [
    {
      title: "Singles night at Tavern",
      date: "Mon, 22nd Oct, 6:30pm",
      location: "Barangaroo",
      price: "20",
      description: "Join us for an exciting singles night at Tavern, where you can meet new people in a relaxed atmosphere. Enjoy live music, delicious cocktails, and a chance to mingle with other singles looking for connection. Perfect for those seeking fun and romance!",
      background: image1Svg
    },
    {
      title: "Speed Dating at The Lounge",
      date: "Wed, 24th Oct, 7:00pm",
      location: "Sydney CBD",
      price: "25",
      description: "Experience fast-paced romance at our speed dating event at The Lounge. Meet up to 15 potential matches in one evening, with each date lasting 5 minutes. Includes a welcome drink and expert tips to make the most of your night!",
      background: image2Svg
    },
    {
      title: "Couples Workshop at Parkview",
      date: "Sat, 27th Oct, 2:00pm",
      location: "Parramatta",
      price: "30",
      description: "Strengthen your relationship with our couples workshop at Parkview. Led by a certified therapist, this session focuses on communication skills, trust-building exercises, and fun activities to deepen your bond. Suitable for all relationship stages!",
      background: image3Svg
    },
    {
      title: "Mixer Night at Rooftop",
      date: "Tue, 30th Oct, 6:00pm",
      location: "Circular Quay",
      price: "15",
      description: "Unwind at our mixer night on the stunning Rooftop with panoramic views of Circular Quay. Enjoy a casual evening with light refreshments, music, and a diverse crowd. Ideal for networking or simply making new friends in a vibrant setting!",
      background: image4Svg
    }
  ];

  // Function to parse the date string into a Date object
  const parseEventDate = (dateString) => {
    // Split the date string into parts
    const parts = dateString.split(',');
    const dayPart = parts[1].trim(); // "22nd Oct"
    const timePart = parts[2].trim(); // "6:30pm"
    
    // Extract day, month, and time
    const dayMatch = dayPart.match(/(\d+)(?:st|nd|rd|th)/);
    const monthMatch = dayPart.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/);
    const timeMatch = timePart.match(/(\d+):(\d+)(am|pm)/);
    
    if (!dayMatch || !monthMatch || !timeMatch) {
      return new Date(0);
    }
    
    const day = parseInt(dayMatch[1]);
    const month = monthMatch[1];
    let hours = parseInt(timeMatch[1]);
    const minutes = parseInt(timeMatch[2]);
    const period = timeMatch[3];
    
    // Convert to 24-hour format
    if (period === 'pm' && hours !== 12) {
      hours += 12;
    } else if (period === 'am' && hours === 12) {
      hours = 0;
    }
    
    // Create a proper date string for parsing
    const currentYear = new Date().getFullYear();
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthIndex = monthNames.indexOf(month);
    
    return new Date(currentYear, monthIndex, day, hours, minutes);
  };

  const sortedEvents = [...events].sort((a, b) => {
    const dateA = parseEventDate(a.date);
    const dateB = parseEventDate(b.date);
    return isMostRecent ? dateB - dateA : dateA - dateB;
  });

  const toggleSort = () => {
    setIsMostRecent(!isMostRecent);
  };

  return (
    <div className="w-full min-h-screen relative">
      <Background />
      <Navbar />
      <div className="max-w-7xl mx-auto px-8 py-12 text-gray-800">
        <div className="mb-10 text-3xl font-extrabold text-black drop-shadow-md">
          You have {events.length} upcoming events
        </div>
        <div className="flex justify-end mb-8">
          <button
            className="rounded-lg bg-gradient-to-r from-red-500 to-pink-500 px-6 py-2 text-white text-sm font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={toggleSort}
          >
            {isMostRecent ? "Most recent → Least recent" : "Least recent → Most recent"}
          </button>
        </div>
        <div className="grid grid-cols-1 gap-10">
          {sortedEvents.map((event, index) => (
            <div
              key={index}
              className="flex items-start p-6 bg-white/90 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div
                className="w-1/3 h-72 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${event.background})` }}
              >
                <div className="w-full h-full bg-black/30 flex items-center justify-center text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {event.title}
                </div>
              </div>
              <div className="ml-8 flex-1 pt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-md text-gray-600 mb-2">{event.date} | {event.location}</p>
                <p className="text-md text-gray-700 mb-4 font-semibold">${event.price}</p>
                <p className="text-md text-gray-600 line-clamp-4 mb-6">{event.description}</p>
                <div className="flex justify-between text-md text-red-500 font-medium">
                  <a href="https://www.247freepoker.com/" className="underline hover:text-red-700 transition-colors" target="_blank">Visit Our Website</a>
                  <a href="https://www.247freepoker.com/" className="underline hover:text-red-700 transition-colors" target="_blank">Go to Session</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}