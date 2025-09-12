import { useNavigate } from "react-router-dom"
import { Upload } from "lucide-react";
import { useState, useRef } from "react";
import NavBar from "../components/Navbar"

export default function CreateEventPage() {
    const [createEventIsClicked, setCreateEventIsClicked] = useState(false)
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [eventDate, setEventDate] = useState<string>("");
    const [eventTime, setEventTime] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleCreateEvent = () => {
        setCreateEventIsClicked(!createEventIsClicked)
        navigate('/host-event-board')
    }

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files || files.length === 0) return;

        const file = files[0]
        if (!file) return;

        // Check file type
        const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (!validTypes.includes(file.type)) {
            alert('Please select a JPEG or PNG image file');
            return;
        }

        // Check file size (2MB max)
        if (file.size > 2 * 1024 * 1024) {
            alert('File size exceeds 2MB limit');
            return;
        }

        setSelectedImage(file);

        // Create preview
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
            if (e.target && e.target.result) {
                setImagePreview(e.target.result as string);
            }
        };
        reader.readAsDataURL(file);
    }

    const getMinDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    }

    return (
        <div className="w-full h-screen">
            <NavBar/>
            <div className="flex px-24">
                <div className="h-screen w-1/2 bg-grey flex space-y-12">
                    <div className="h-screen w-full flex flex-col justify-center items-center space-y-8">
                        <div className="w-3/4 text-3xl font-bold mt-16">Host Your Singles Event</div>
                        { /* Picture */ }
                        <div 
                            className="w-3/4 h-11/16 bg-gray-300 rounded-xl flex flex-col justify-center items-center cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={handleImageClick}
                        >
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                                className="hidden"
                            />
                            
                            {imagePreview ? (
                                <div className="w-full h-full rounded-xl overflow-hidden flex items-center justify-center">
                                    <img 
                                        src={imagePreview} 
                                        alt="Event preview" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center p-4">
                                    <Upload size={50}/>
                                    <span className="text-xl mt-6 text-center">
                                        Upload an image (max 2MB, recommended
                                    </span>
                                    <span className="text-xl text-center">
                                        1200×800px, JPEG or PNG)
                                    </span>
                                </div>
                            )}
                        </div>
                        {/* Back button */}
                        <div className="w-3/4 h-1/16 flex">
                            <button 
                                className="text-white w-1/3 font-bold text-xl rounded-xl bg-red-500 hover:cursor-pointer hover:opacity-60 transition-opacity py-4"
                                onClick={handleCreateEvent}>
                                Create Event
                            </button>
                        </div>
                    </div>
                </div>
                {/* Enter event info */}
                <div className="h-screen w-1/2 flex flex-col space-y-10 justify-center items-center mt-10">
                    <div className="w-3/4 flex flex-col">
                        <label className="text-sm text-gray-600 mb-2">Name of Event</label>
                        <input 
                            className="pl-4 w-full rounded-xl h-20 border-2 border-gray-400 focus:placeholder-transparent focus:border-red-500 focus:outline-none transition-colors"
                            placeholder="Add event title"
                        />
                    </div>
                    <div className="w-3/4 flex flex-col">
                        <label className="text-sm text-gray-600 mb-2">Location</label>
                        <input 
                            className="pl-4 w-full rounded-xl h-20 border-2 border-gray-400 focus:placeholder-transparent focus:border-red-500 focus:outline-none transition-colors"
                            placeholder="Enter as 'unit number, street name, suburb, state'"
                        />
                    </div>                    
                    <div className="w-3/4 flex flex-col">
                        <label className="text-sm text-gray-600 mb-2">Description</label>
                        <textarea 
                            className="pl-4 pt-4 w-full rounded-xl h-32 border-2 border-gray-400 focus:placeholder-transparent focus:border-red-500 focus:outline-none transition-colors resize-none"
                            placeholder="Add a description of your event..."
                            rows={4}
                        />
                    </div>  
                    
                    {/* Date and Time Section */}
                    <div className="w-3/4 flex flex-col space-y-4">
                        <label className="text-sm text-gray-600 mb-2">Date and Time</label>
                        
                        <div className="grid grid-cols-2 gap-4">
                            {/* Date Picker */}
                            <div className="flex flex-col">
                                <input
                                    type="date"
                                    value={eventDate}
                                    onChange={(e) => setEventDate(e.target.value)}
                                    min={getMinDate()}
                                    className="w-full rounded-xl h-16 px-4 border-2 border-gray-400 focus:border-red-500 focus:outline-none transition-colors cursor-pointer bg-white"
                                />
                            </div>
                            
                            {/* Time Picker */}
                            <div className="flex flex-col">
                                <input
                                    type="time"
                                    value={eventTime}
                                    onChange={(e) => setEventTime(e.target.value)}
                                    className="w-full rounded-xl h-16 px-4 border-2 border-gray-400 focus:border-red-500 focus:outline-none transition-colors cursor-pointer bg-white"
                                />
                            </div>
                        </div>
                        
                        {/* Selected Date and Time Display */}
                        {eventDate && eventTime && (
                            <div className="bg-gray-100 rounded-lg p-4 mt-2">
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">Selected:</span>{" "}
                                    {new Date(eventDate).toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                    {" at "}
                                    {new Date(`2000-01-01T${eventTime}`).toLocaleTimeString('en-US', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        hour12: true
                                    })}
                                </p>
                            </div>
                        )}
                    </div>
                    
                    <div className="w-3/4 flex flex-col">
                        <label className="text-sm text-gray-600 mb-2">Registration Deadlines</label>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500 mb-1">Opens</span>
                                <input 
                                    type="datetime-local"
                                    className="rounded-xl h-16 px-4 border-2 border-gray-400 focus:border-red-500 focus:outline-none transition-colors text-sm cursor-pointer bg-white"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500 mb-1">Closes</span>
                                <input 
                                    type="datetime-local"
                                    className="rounded-xl h-16 px-4 border-2 border-gray-400 focus:border-red-500 focus:outline-none transition-colors text-sm cursor-pointer bg-white"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500 mb-1">Cancellation</span>
                                <input 
                                    type="datetime-local"
                                    className="rounded-xl h-16 px-4 border-2 border-gray-400 focus:border-red-500 focus:outline-none transition-colors text-sm cursor-pointer bg-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}