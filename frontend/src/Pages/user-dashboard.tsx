import { User, Edit } from "lucide-react";

export default function UserDashboard() {
  return (
    <div
      className="flex min-h-screen w-full items-center justify-center bg-cover bg-center"
    >
      {/* Profile Header */}
      <div className="absolute top-24 left-0 right-0 mx-auto w-full max-w-4xl px-6">
        <div className="flex items-center justify-between rounded-lg bg-white p-6 shadow-lg">
          <div className="flex items-center space-x-4">
            {/* Profile Picture Placeholder */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-200">
              <User className="h-12 w-12 text-gray-400" />
            </div>
            {/* Name */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Lebron James</h2>
              <p className="text-gray-500">lebron.james@example.com</p>
            </div>
          </div>
          {/* Edit Profile Button */}
          <button className="flex items-center space-x-2 rounded-md bg-blue-500 px-4 py-2 text-white transition-all hover:bg-blue-600">
            <Edit className="h-4 w-4" />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>
      <div>
        YOUR UPCOMING EVENTS
      </div>
      <div>
        PREVIOUS EVENTS
      </div>
    </div>
  )
}